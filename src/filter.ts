import _ from "lodash";

import { OPERATORS } from "./operators";
import { IConfig, IFilterObject, IQueryObject } from "./types";

const filtering = (
  config: IConfig,
  queryObject: IQueryObject,
  allowedKeys: string[] | null
) => {
  const filtered: IFilterObject[] = [];
  _.entries(queryObject).forEach(([key, value]) => {
    for (const [op, processor] of _.entries(OPERATORS)) {
      const regexStr = `^([a-zA-Z0-9_]+)${op}$`;
      const re = config.case_sensitive
        ? new RegExp(regexStr, "g")
        : new RegExp(regexStr, "ig");
      const check = re.exec(key);
      if (check !== null) {
        if (
          (allowedKeys !== null && allowedKeys.includes(check[1])) ||
          allowedKeys === null
        ) {
          filtered.push(processor.parser(check[1], value));
        }
      }
    }
  });
  return filtered.length > 0 ? filtered : null;
};

export default filtering;
