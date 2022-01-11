import { FilterValue, IFilterObject } from "../types";

const in_ = (column: string, value: FilterValue): IFilterObject => {
  return {
    operator: "$in",
    operatorSQL: "IN",
    column,
    value: (value as string).replace(/ /g, "").split(","),
  };
};

export default in_;
