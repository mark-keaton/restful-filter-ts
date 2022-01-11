import equals from "./filters/equals";
import negate from "./filters/negate";
import lessThanEquals from "./filters/lessThanEquals";
import greaterThanEquals from "./filters/greaterThanEquals";
import lessThan from "./filters/lessThan";
import greaterThan from "./filters/greaterThan";
import not_ from "./filters/not";
import in_ from "./filters/in";
import notIn from "./filters/notIn";
import like from "./filters/like";
import iLike from "./filters/iLike";
import notLike from "./filters/notLike";
import notILike from "./filters/notILike";
import contains from "./filters/contains";
import between from "./filters/between";
import notBetween from "./filters/notBetween";

export const OPERATORS = {
  __eq: {
    parser: equals,
  },
  __ne: {
    parser: negate,
  },
  __lte: {
    parser: lessThanEquals,
  },
  __gte: {
    parser: greaterThanEquals,
  },
  __lt: {
    parser: lessThan,
  },
  __gt: {
    parser: greaterThan,
  },
  __not: {
    parser: not_,
  },
  __in: {
    parser: in_,
  },
  __notIn: {
    parser: notIn,
  },
  __like: {
    parser: like,
  },
  __iLike: {
    parser: iLike,
  },
  __notLike: {
    parser: notLike,
  },
  __notILike: {
    parser: notILike,
  },
  __contains: {
    parser: contains,
  },
  __between: {
    parser: between,
  },
  __notBetween: {
    parser: notBetween,
  },
};
