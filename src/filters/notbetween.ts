import { FilterValue, IFilterObject } from "../types";

const notbetween = (column: string, value: FilterValue): IFilterObject => {
  return {
    operator: "$notBetween",
    operatorSQL: ["NOT BETWEEN", "AND"],
    column,
    value: (value as string).replace(/ /g, "").split(","),
  };
};

export default notbetween;
