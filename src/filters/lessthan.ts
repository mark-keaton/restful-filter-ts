import { FilterValue, IFilterObject } from "../types";

const lessthan = (column: string, value: FilterValue): IFilterObject => {
  return {
    operator: "$lt",
    operatorSQL: "<",
    column,
    value,
  };
};

export default lessthan;
