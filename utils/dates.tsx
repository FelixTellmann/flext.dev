const DAY_IN_MS = 1000 * 60 * 60 * 24;
export const getFormattedFullDate = (num: number) => {
  return new Date(num).toISOString().slice(0, 10);
};
export const getFormattedDate = (num: number) => {
  return new Date(num).getDate();
};
const getFormattedMonth = (num: number) => {
  return new Date(num).toLocaleString("en-GB", { month: "long" });
};
const getFormattedYear = (num: number) => {
  return new Date(num).toLocaleString("en-GB", { year: "numeric" });
};
export const getFormattedYearAndMonth = (num: number) => {
  return `${getFormattedMonth(num)} ${getFormattedYear(num)}`;
};

export function getWeek(num, startOfWeek = 1) {
  const dayIndex = new Date(num).getDay();
  return Array(7)
    .fill(
      num +
        (dayIndex < startOfWeek
          ? -((dayIndex + (7 - startOfWeek)) * DAY_IN_MS)
          : -((dayIndex - startOfWeek) * DAY_IN_MS))
    )
    .map((num, index) => num + index * DAY_IN_MS);
}

const getLastDayOfMonth = (num) => {
  const date = new Date(num);
  date.setDate(1);
  date.setMonth(date.getMonth() + 1);
  date.setDate(0);
  return date.getTime();
};

export const getPreviousMonth = (num) => {
  const date = new Date(num);
  date.setMonth(date.getMonth() - 1);
  if (
    date.getMonth() - new Date(num).getMonth() !== -1 &&
    date.getMonth() - new Date(num).getMonth() !== 11
  ) {
    const specialDate = new Date(num);
    specialDate.setDate(0);
    return specialDate.getTime();
  }
  return date.getTime();
};

export const getNextMonth = (num, max) => {
  const date = new Date(num);
  date.setMonth(date.getMonth() + 1);

  if (
    date.getMonth() - new Date(num).getMonth() !== 1 &&
    date.getMonth() - new Date(num).getMonth() !== -11
  ) {
    date.setDate(0);
    return max ? Math.min(date.getTime(), max) : date.getTime();
  }
  return max ? Math.min(date.getTime(), max) : date.getTime();
};

export const isCurrentMonth = (num, currentNum) => {
  return getFormattedYearAndMonth(num) === getFormattedYearAndMonth(currentNum);
};

export const getOverlappingMonthDates = (num, startOfWeek = 1) => {
  const firstDayNum = num - DAY_IN_MS * (new Date(num).getDate() - 1);
  const lastDayNum = getLastDayOfMonth(num);
  const firstDayIndex = new Date(firstDayNum).getDay();
  const lastDayIndex = new Date(lastDayNum).getDay();
  const dayArray: number[] = [];
  const firstDay =
    firstDayNum +
    (firstDayIndex < startOfWeek
      ? -((firstDayIndex + (7 - startOfWeek)) * DAY_IN_MS)
      : -((firstDayIndex - startOfWeek) * DAY_IN_MS));

  const lastDay =
    lastDayNum +
    (lastDayIndex < startOfWeek
      ? (lastDayIndex + (startOfWeek - 1)) * DAY_IN_MS
      : (7 - (startOfWeek - 1) - lastDayIndex) * DAY_IN_MS);

  for (let i = 0; i < 43; i++) {
    dayArray.push(firstDay + DAY_IN_MS * i);
    if (firstDay + DAY_IN_MS * i + 1 > lastDay) {
      break;
    }
  }

  return dayArray;
};

export const getFullMonthDates = (num) => {
  const firstDayNum = num - DAY_IN_MS * (new Date(num).getDate() - 1);
  const lastDayNum = getLastDayOfMonth(num);
  const dayArray: number[] = [];

  for (let i = 0; i < 43; i++) {
    dayArray.push(firstDayNum + DAY_IN_MS * i);
    if (firstDayNum + DAY_IN_MS * i + 1 > lastDayNum) {
      break;
    }
  }

  return dayArray;
};
