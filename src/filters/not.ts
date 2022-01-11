import { FilterValue, IFilterObject } from "../types";

const not = (column: string, value: FilterValue): IFilterObject => {
  return {
    operator: "$not",
    operatorSQL: "IS NOT",
    column,
    value,
  };
};

export default not;
