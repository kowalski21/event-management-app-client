import { DateTime } from "luxon";

export const getIsoDate = (dt) => {
  const parsedDt = DateTime.fromISO(dt);

  return parsedDt.toLocaleString(DateTime.DATETIME_FULL);
};

export const getWeekDate = () => {
  const now = DateTime.now();
  const nextTwoWeeks = now.plus({ days: 6, months: 1 });

  return [now.toJSDate(), nextTwoWeeks.toJSDate()];
};

export const formatJSDate = (dt = [], isArray = true) => {
  if (isArray) {
    let tmp = dt.map((item) => DateTime.fromJSDate(item).toISODate());
    return tmp;
  } else {
    return DateTime.fromJSDate(item).toISODate();
  }
};

export const prettyDate = (dt) => {
  const item = DateTime.fromISO(dt);

  return item.toFormat("LLL dd yyyy ");
};
