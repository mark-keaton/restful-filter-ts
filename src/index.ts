import _ from "lodash";

import { IConfig, IConfiguredParse, IQueryObject } from "./types.d";

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

const init = (config: Partial<IConfig> = {}): IConfiguredParse => {
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
  } as unknown as IConfiguredParse;
};

export default init;
export { OPERATORS } from "./operators";
