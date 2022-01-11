import { FilterValue, IFilterObject } from "../types";

const like = (column: string, value: FilterValue): IFilterObject => {
  return {
    operator: "$like",
    operatorSQL: "LIKE",
    column,
    value,
  };
};

export default like;
