import equals from "./filters/equals";
import negate from "./filters/negate";
import lessthanequals from "./filters/lessthanequals";
import greaterthanequals from "./filters/greaterthanequals";
import lessthan from "./filters/lessthan";
import greaterthan from "./filters/greaterthan";
import not_ from "./filters/not";
import in_ from "./filters/in";
import notin from "./filters/notin";
import like from "./filters/like";
import ilike from "./filters/ilike";
import notlike from "./filters/notlike";
import notilike from "./filters/notilike";
import contains from "./filters/contains";
import between from "./filters/between";
import notbetween from "./filters/notbetween";

export const OPERATORS = {
  __eq: {
    parser: equals,
  },
  __ne: {
    parser: negate,
  },
  __lte: {
    parser: lessthanequals,
  },
  __gte: {
    parser: greaterthanequals,
  },
  __lt: {
    parser: lessthan,
  },
  __gt: {
    parser: greaterthan,
  },
  __not: {
    parser: not_,
  },
  __in: {
    parser: in_,
  },
  __notIn: {
    parser: notin,
  },
  __like: {
    parser: like,
  },
  __iLike: {
    parser: ilike,
  },
  __notLike: {
    parser: notlike,
  },
  __notILike: {
    parser: notilike,
  },
  __contains: {
    parser: contains,
  },
  __between: {
    parser: between,
  },
  __notBetween: {
    parser: notbetween,
  },
};
