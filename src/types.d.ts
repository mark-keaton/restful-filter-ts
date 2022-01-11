export interface IConfig {
  case_sensitive: boolean;
  limit_param_name: string;
  max_count_per_page: number;
  order_param_name: string;
  page_param_name: string;
  per_page: number;
}

export type FilterValue =
  | string
  | number
  | boolean
  | string[]
  | number[]
  | boolean[];

export interface IFilterObject {
  operator: string;
  operatorSQL: string | string[];
  column: string;
  value: FilterValue;
}

export interface IPaginationObject {
  offset: number;
  limit: number;
}

export interface IQueryObject {
  [key: string]: any;
}
