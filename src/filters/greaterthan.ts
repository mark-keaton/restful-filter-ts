import { FilterValue, IFilterObject } from "../types";

const greaterthan = (column: string, value: FilterValue): IFilterObject => {
  return {
    operator: "$gt",
    operatorSQL: ">",
    column,
    value,
  };
};

export default greaterthan;
