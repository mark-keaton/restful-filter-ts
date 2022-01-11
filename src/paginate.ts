import _ from "lodash";

import * as utils from "./utils";

import { IConfig, IPaginationObject, IQueryObject } from "./types.d";

export const paginate = (
  config: IConfig,
  queryObject: IQueryObject
): IPaginationObject => {
  const mappedQueryObject = !config.case_sensitive
    ? utils.lowercasedQuerystring(queryObject)
    : queryObject;

  const pageName = !config.case_sensitive
    ? config.page_param_name.toLowerCase()
    : config.page_param_name;
  const limit = !config.case_sensitive
    ? config.limit_param_name.toLowerCase()
    : config.limit_param_name;

  const pageNumber = _.parseInt(_.get(mappedQueryObject, pageName, 1));
  let limitNumber = _.get(mappedQueryObject, limit, config.per_page);

  if (
    _.parseInt(limitNumber) >
    _.parseInt(config.max_count_per_page as unknown as string)
  ) {
    limitNumber = _.parseInt(config.max_count_per_page as unknown as string);
  }

  const offsetNumber = pageNumber === 1 ? 0 : (pageNumber - 1) * limitNumber;

  return {
    limit: parseInt(limitNumber as unknown as string),
    offset: parseInt(offsetNumber as unknown as string),
  };
};
