import { FilterValue, IFilterObject } from "../types";

const negate = (column: string, value: FilterValue): IFilterObject => {
  return {
    operator: "$ne",
    operatorSQL: "!=",
    column,
    value,
  };
};

export default negate;
