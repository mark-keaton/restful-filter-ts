/**
Configuration parameters for the parser.

Defaults:
case_sensitive: false
page_param_name: "page"
limit_param_name: "count",
per_page: 20
max_count_per_page: 100
order_param_name: "order_by"
*/
export interface IConfig {
  case_sensitive: boolean;
  limit_param_name: string;
  max_count_per_page: number;
  order_param_name: string;
  page_param_name: string;
  per_page: number;
}

/**
Possible types allowed  for the filter values
*/
export type FilterValue =
  | string
  | number
  | boolean
  | string[]
  | number[]
  | boolean[];

/**
The parsed filter query object for consumption by library
*/
export interface IFilterObject {
  operator: string;
  operatorSQL: string | string[];
  column: string;
  value: FilterValue;
}

/**
Offset and limit arguments for pagination
*/
export interface IPaginationObject {
  offset: number;
  limit: number;
}

/**
Querystring arguments parsed into an object.
*/
export interface IQueryObject {
  [key: string]: any;
}

/**
Curried Parse function with config in closure 
*/
export interface IConfiguredParse {
  parse: (
    queryObject: IQueryObject,
    allowedKeys?: string[] | null
  ) => IParsedQueryObject;
}

export interface IParsedQueryObject {
  filter: IFilterObject[];
  order: string[];
  paginate: IPaginationObject;
}
