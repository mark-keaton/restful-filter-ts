import { FilterValue, IFilterObject } from "../types";

const notin = (column: string, value: FilterValue): IFilterObject => {
  return {
    operator: "$notIn",
    operatorSQL: "NOT IN",
    column,
    value: (value as string).replace(/ /g, "").split(","),
  };
};

export default notin;
