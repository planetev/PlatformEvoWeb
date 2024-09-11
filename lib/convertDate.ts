import { addDays, format } from "date-fns";

export const convertDate = (date: any) => {
  return format(date, "yyyy-MM-dd");
};
