type ApiFunction<Return = any> = (
  topic: string,
  body?: { [T: string]: any } & { topic?: never }
) => Promise<Return>;

type UseApiHook = () => { api: ApiFunction };

export const useApi: UseApiHook = () => {
  const api: ApiFunction = async (topic, body = undefined) => {
    const startTime = Date.now();
    const response = await fetch("/api/public", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ topic, ...body }),
    });

    const test = await response.json();
    console.log(test);
    console.log(`${topic} ${Date.now() - startTime}ms`);
    return test;
  };
  return { api };
};
