import { FilterValue, IFilterObject } from "../types";

const notlike = (column: string, value: FilterValue): IFilterObject => {
  return {
    operator: "$notLike",
    operatorSQL: "NOT LIKE",
    column,
    value,
  };
};

export default notlike;
