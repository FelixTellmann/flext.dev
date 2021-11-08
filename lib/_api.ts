import { SQLCLIENT } from "lib/_client";
import { ResultSetHeader } from "mysql2";

export const isObject = (val) => {
  return typeof val === "object" && val !== null && !Array.isArray(val);
};

type Operation = "SELECT" | "INSERT" | "UPDATE" | "DELETE" | "COUNT";

type SQLInput =
  | {
      operation: Operation;
      table: string;
      query?: string;
    }
  | {
      query: string;
      operation?: Operation;
      table?: string;
    };

type Conditions<T> = {
  [P in keyof T]?: conditionFilter<T, P>;
} & {
  and?: Conditions<T>;
  or?: Conditions<T>;
};

type conditionFilter<T, P extends keyof T> = T[P] extends number
  ?
      | {
          between?: T[P][];
          eq?: T[P];
          ge?: T[P];
          gt?: T[P];
          in?: T[P][];
          le?: T[P];
          like?: string;
          lt?: T[P];
          ne?: T[P];
          regexp?: string;
        }
      | string
      | number
  :
      | {
          between?: T[P][];
          eq?: T[P];
          in?: T[P][];
          like?: string;
          ne?: T[P];
          regexp?: string;
        }
      | string
      | number;

export type SQLSort<T = object> = (keyof Partial<T>)[];

export type SQLSortDirection = "ASC" | "DESC";

export type SQLFunctionOptions<T> = {
  condition?: Conditions<T>;
  input?: Partial<T>;
  limit?: number;
  offset?: number;
  sort?: SQLSort<T>;
  sortDirection?: SQLSortDirection;
  values?: (keyof Partial<T>)[] | ["*"] | string[];
};

const filterBy = (property, value) => {
  console.log({ property, value });
  if (typeof value === "string" || typeof value === "number") {
    return `${property} = ${JSON.stringify(value)}`;
  }

  if (Array.isArray(value) && value.every((v) => typeof v === "string")) {
    return `${property} IN (${value.map((v) => `'${v}'`).join(", ")})`;
  }

  if (Array.isArray(value) && value.every((v) => typeof v === "number")) {
    return `${property} IN (${value.join(", ")})`;
  }
  return Object.entries(value)
    .map(([key, val]) => {
      switch (key) {
        case "between": {
          if (!Array.isArray(val) || val.length !== 2) return "";
          return `${property} BETWEEN ${val[0]} AND ${val[1]}`;
        }
        case "eq": {
          if (val === null) {
            return `${property} IS NULL`;
          }
          if (Array.isArray(val) && val.every((v) => typeof v === "string")) {
            return `${property} IN (${val.map((v) => `'${v}'`).join(", ")})`;
          }

          if (Array.isArray(val) && val.every((v) => typeof v === "number")) {
            return `${property} IN (${val.join(", ")})`;
          }
          return `${property} = ${JSON.stringify(val)}`;
        }
        case "ge": {
          return `${property} >= ${JSON.stringify(val)}`;
        }
        case "gt": {
          return `${property} > ${JSON.stringify(val)}`;
        }
        case "in": {
          if (!Array.isArray(val)) return "";
          return `${property} IN (${val
            .map((v) => (typeof v === "number" ? `${v}` : `'${v}'`))
            .join(", ")})`;
        }
        case "le": {
          return `${property} <= ${JSON.stringify(val)}`;
        }
        case "lt": {
          return `${property} < ${JSON.stringify(val)}`;
        }
        case "ne": {
          if (val === null) {
            return `${property} IS NOT NULL`;
          }
          if (Array.isArray(val) && val.every((v) => typeof v === "string")) {
            return `${property} NOT IN (${val.map((v) => `'${v}'`).join(", ")})`;
          }

          if (Array.isArray(val) && val.every((v) => typeof v === "number")) {
            return `${property} NOT IN (${val.join(", ")})`;
          }
          return `${property} != ${JSON.stringify(val)}`;
        }
        case "regexp": {
          return `${property} REGEXP ${JSON.stringify(val)}`;
        }
        case "like": {
          return `${property} LIKE ${JSON.stringify(val)}`;
        }
      }
      return "";
    })
    .join(" ");
};

const mapConditions = <T>(filters: Conditions<T>, recursion = ""): string => {
  let returnString = "";
  for (const key in filters) {
    if (Object.prototype.hasOwnProperty.call(filters, key)) {
      if ((key === "and" || key === "or") && isObject(filters[key])) {
        returnString += returnString
          ? ` ${recursion || "AND"} ${mapConditions(filters[key], key.toUpperCase())}`
          : `${mapConditions(filters[key], key.toUpperCase())}`;
      } else {
        returnString += returnString
          ? ` ${recursion || "AND"} ${filterBy(key, filters[key])}`
          : filterBy(key, filters[key]);
      }
    }
  }

  if (returnString) {
    return recursion ? `(${returnString})` : `WHERE ${returnString}`;
  }

  return "";
};

const mapSetKeys = <R>(variables: Partial<R> & { updatedAt: number }): string => {
  const setKeys = Object.keys(variables);
  if (setKeys.length) {
    return setKeys.map((val) => `${val}=:${val}`).join(", ");
  }
  return "";
};

const mapInsertKeys = <R>(variables: Partial<R>) => {
  const insertKeys = Object.keys(variables);
  if (insertKeys.length) {
    return `(${insertKeys.join(", ")}) VALUES (${insertKeys.map((val) => `:${val}`).join(", ")})`;
  }
  return "";
};

const mapSort = <R>(
  sort: (keyof Partial<R>)[] = [],
  sortDirection: "ASC" | "DESC" = "ASC"
): string => {
  if (sort.length) {
    return `ORDER BY ${sort.join(", ")} ${sortDirection}`;
  }
  return "";
};

const mapValues = <R>(values: (keyof Partial<R>)[] | ["*"] | string[] = ["*"]) => {
  return values.join(", ");
};

const mapLimit = (limit: number): string => {
  return limit !== undefined ? `LIMIT ${limit}` : "";
};

const mapOffset = (offset: number) => {
  return offset !== undefined ? `OFFSET ${offset}` : "";
};

const createRequest = <R>(
  table: string,
  operation: Operation,
  { input, values, condition, sort, sortDirection, limit, offset }: SQLFunctionOptions<R>
): [string, Partial<R>] => {
  const now = Date.now();

  switch (operation) {
    case "INSERT": {
      const variables = {
        createdAt: now,
        updatedAt: now,
        ...input,
      };

      const query = `INSERT into \`${table}\` ${mapInsertKeys(variables)}`;
      return [query, variables];
    }

    case "SELECT": {
      const variables = {
        ...input,
      };

      const query = `SELECT ${mapValues(values)} FROM \`${table}\` ` +
      `${mapConditions(condition)} ` +
      `${mapSort(sort, sortDirection)} ` +
      `${mapLimit(limit)} ` +
      `${mapOffset(offset)} `;

      return [query, variables];
    }

    case "COUNT": {
      const variables = {
        ...input,
      };

      const query = `SELECT COUNT(${mapValues(values)}) AS \`count\` FROM \`${table}\` ` +
      `${mapConditions(condition)} ` +
      `${mapSort(sort, sortDirection)} ` +
      `${mapLimit(limit)} ` +
      `${mapOffset(offset)} `;

      return [query, variables];
    }

    case "UPDATE": {
      const variables = {
        updatedAt: now,
        ...input,
      };

      const query = `UPDATE \`${table}\` SET ${mapSetKeys(variables)} ${mapConditions(condition)} `;

      return [query, variables];
    }

    case "DELETE": {
      const variables = {
        ...input,
      };

      const query = `DELETE FROM \`${table}\` ${mapConditions(condition)} `;

      return [query, variables];
    }
  }
};

type SQLFunction = <R, T = ResultSetHeader>(
  options: SQLInput
) => (input?: SQLFunctionOptions<R>, db?: any) => Promise<T>;

export const SQL: SQLFunction = ({ query, table, operation }) => {
  const serverlessDb = new SQLCLIENT("main");
  return async (options, db = serverlessDb) => {
    const startTime = Date.now();
    const [request, variables] = query
      ? [query, options.input]
      : createRequest(table, operation, options);

    console.log(request, variables);

    try {
      const [result] = await db.execute(request, variables);
      console.log(`${Date.now() - startTime}ms - SQL request`);
      return result;
    } catch (err) {
      console.log(`${Date.now() - startTime}ms - SQL Error`);
      console.log(err.response?.status);
      console.log(err.response?.data);
      console.log(err.message);
      console.log(err);
      return null;
    }
  };
};
