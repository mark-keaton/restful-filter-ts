import { FilterValue, IFilterObject } from "../types";

const ilike = (column: string, value: FilterValue): IFilterObject => {
  return {
    operator: "$iLike",
    operatorSQL: "ILIKE",
    column,
    value,
  };
};

export default ilike;
