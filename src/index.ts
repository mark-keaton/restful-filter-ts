import _ from "lodash";
import { IConfig, IQueryObject } from "./types";

import getFilter from "./filter";
import getPaginate from "./paginate";
import getOrder from "./order";

const parse = (
  config: IConfig,
  queryObject: IQueryObject,
  allowedKeys: string[] | null = null
) => {
  return {
    filter: getFilter(config, queryObject, allowedKeys),
    paginate: getPaginate(config, queryObject),
    order: getOrder(config, queryObject, allowedKeys),
  };
};

const init = (config = {}) => {
  const defaultConfig = {
    // All parser setting
    case_sensitive: false,
    // Paginate settings
    page_param_name: "page",
    limit_param_name: "count",
    per_page: 20,
    max_count_per_page: 100,
    // Order setting
    order_param_name: "order_by",
  };

  const compiledConfig = Object.assign({}, defaultConfig, config);

  return {
    parse: _.curry(parse)(compiledConfig),
  };
};

export default init;
