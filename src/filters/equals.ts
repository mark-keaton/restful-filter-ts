import { FilterValue, IFilterObject } from "../types";

const equals = (column: string, value: FilterValue): IFilterObject => {
  return {
    operator: "$eq",
    operatorSQL: "=",
    column,
    value,
  };
};

export default equals;
