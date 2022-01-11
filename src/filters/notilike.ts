import { FilterValue, IFilterObject } from "../types";

const notilike = (column: string, value: FilterValue): IFilterObject => {
  return {
    operator: "$notILike",
    operatorSQL: "NOT ILIKE",
    column,
    value,
  };
};

export default notilike;
