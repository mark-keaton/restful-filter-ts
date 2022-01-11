import { FilterValue, IFilterObject } from "../types";

const between = (column: string, value: FilterValue): IFilterObject => {
  return {
    operator: "$between",
    operatorSQL: ["BETWEEN", "AND"],
    column,
    value: (value as string).replace(/ /g, "").split(","),
  };
};

export default between;
