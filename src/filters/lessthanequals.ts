import { FilterValue, IFilterObject } from "../types";

const lessthanequals = (column: string, value: FilterValue): IFilterObject => {
  return {
    operator: "$lte",
    operatorSQL: "<=",
    column,
    value,
  };
};

export default lessthanequals;
