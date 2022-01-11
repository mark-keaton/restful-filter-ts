import _ from "lodash";

export const lowercasedQuerystring = (queryString: { [key: string]: any }) => {
  const mappedQueryStrings = Object.assign({}, queryString);
  _.entries(queryString).forEach(([key, value]) => {
    // remove old key
    delete mappedQueryStrings[key];
    mappedQueryStrings[key.toLowerCase()] = value;
  });
  return mappedQueryStrings;
};

export const cleanWhitespaces = (stringValue: string) => {
  return stringValue.replace(/ /g, "");
};
