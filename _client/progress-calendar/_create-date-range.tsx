import { Day } from "_client/progress-calendar/progress-calendar";

export const createDateRange = (
  originalDate: string = new Date().toISOString().split("T")[0],
  year = false
): Day[][] => {
  let date = new Date(originalDate);
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  date = new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000);
  if (date.getDay() !== 0) {
    date.setDate(date.getDate() + (7 - date.getDay()));
  }

  date.setDate(date.getDate() - 7 * 53 + 1);

  const weeks: Day[][] = [];
  for (let i = 0; i < 53; i++) {
    weeks[i] = [];
    for (let j = 0; j < 7; j++) {
      if (year) {
        if (date.getFullYear() !== new Date(originalDate).getFullYear()) {
          weeks[i][j] = {
            date: `${date.toISOString().split("T")[0]}`,
            hide: true,
          };
          date.setDate(date.getDate() + 1);
          continue;
        }
      }
      weeks[i][j] = {
        date: `${date.toISOString().split("T")[0]}`,
        hide: false,
      };
      date.setDate(date.getDate() + 1);
    }
  }

  return weeks;
};
