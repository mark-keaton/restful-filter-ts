import _ from "lodash";
import { IConfig, IQueryObject } from "./types";

const parse = (
  config: IConfig,
  queryObject: IQueryObject,
  allowedKeys: string[] | null = null
) => {
  return {
    filter: require("./filter")(config, queryObject, allowedKeys),
    paginate: require("./paginate")(config, queryObject),
    order: require("./order")(config, queryObject, allowedKeys),
  };
};

module.exports = (config = {}) => {
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
