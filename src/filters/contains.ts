import { FilterValue, IFilterObject } from "../types";

const contains = (column: string, value: FilterValue): IFilterObject => {
  return {
    operator: "$contains",
    operatorSQL: "@>",
    column,
    value: (value as string).replace(/ /g, "").split(","),
  };
};

export default contains;
