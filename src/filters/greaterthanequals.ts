import { FilterValue, IFilterObject } from "../types";

const greaterthanequals = (
  column: string,
  value: FilterValue
): IFilterObject => {
  return {
    operator: "$gte",
    operatorSQL: ">=",
    column,
    value,
  };
};

export default greaterthanequals;
