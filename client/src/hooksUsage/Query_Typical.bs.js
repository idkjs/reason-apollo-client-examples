// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Utils = require("../utils/Utils.bs.js");
var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var ApolloClient__React_Hooks_UseQuery = require("reason-apollo-client/src/@apollo/client/react/hooks/ApolloClient__React_Hooks_UseQuery.bs.js");

var Raw = {};

var query = (require("@apollo/client").gql`
  query CompaniesQuery  {
    companies  {
      __typename
      id
      name
    }
  }
`);

function parse(value) {
  var value$1 = value.companies;
  return {
          companies: !(value$1 == null) ? value$1.map(function (value) {
                  if (!(value == null)) {
                    return {
                            __typename: value.__typename,
                            id: value.id,
                            name: value.name
                          };
                  }
                  
                }) : undefined
        };
}

function serialize(value) {
  var value$1 = value.companies;
  var companies = value$1 !== undefined ? value$1.map(function (value) {
          if (value === undefined) {
            return null;
          }
          var value$1 = value.name;
          var value$2 = value.id;
          var value$3 = value.__typename;
          return {
                  __typename: value$3,
                  id: value$2,
                  name: value$1
                };
        }) : null;
  return {
          companies: companies
        };
}

function serializeVariables(param) {
  
}

function makeVariables(param) {
  
}

function makeDefaultVariables(param) {
  
}

var CompaniesQuery_inner = {
  Raw: Raw,
  query: query,
  parse: parse,
  serialize: serialize,
  serializeVariables: serializeVariables,
  makeVariables: makeVariables,
  makeDefaultVariables: makeDefaultVariables
};

var include = ApolloClient__React_Hooks_UseQuery.Extend({
      query: query,
      Raw: Raw,
      parse: parse,
      serialize: serialize,
      serializeVariables: serializeVariables
    });

var use = include.use;

var CompaniesQuery_refetchQueryDescription = include.refetchQueryDescription;

var CompaniesQuery_useLazy = include.useLazy;

var CompaniesQuery_useLazyWithVariables = include.useLazyWithVariables;

var CompaniesQuery = {
  CompaniesQuery_inner: CompaniesQuery_inner,
  Raw: Raw,
  query: query,
  parse: parse,
  serialize: serialize,
  serializeVariables: serializeVariables,
  makeVariables: makeVariables,
  makeDefaultVariables: makeDefaultVariables,
  refetchQueryDescription: CompaniesQuery_refetchQueryDescription,
  use: use,
  useLazy: CompaniesQuery_useLazy,
  useLazyWithVariables: CompaniesQuery_useLazyWithVariables
};

function Query_Typical(Props) {
  var queryResult = Curry.app(use, [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined
      ]);
  var match = queryResult.data;
  var tmp;
  if (match !== undefined) {
    var fetchMore = queryResult.fetchMore;
    var companies = match.companies;
    var companyCount = companies !== undefined && companies.length !== 0 ? Belt_Array.keepMap(companies, (function (e) {
              return Caml_option.some(e);
            })).length : 0;
    tmp = React.createElement(React.Fragment, undefined, React.createElement("dialog", undefined, queryResult.loading ? React.createElement("p", undefined, "Refreshing...") : null, queryResult.error !== undefined ? React.createElement("p", undefined, "Something went wrong, data may be incomplete") : null), React.createElement("p", undefined, "There are " + (String(companyCount) + " Companies")), React.createElement("p", undefined, React.createElement("button", {
                  onClick: (function (param) {
                      var __x = Curry._5(fetchMore, undefined, undefined, undefined, (function (prev, param) {
                              var fetchMoreResult = param.fetchMoreResult;
                              var companies$1 = prev.companies;
                              if (companies$1 !== undefined && fetchMoreResult !== undefined) {
                                var newCompanies = fetchMoreResult.companies;
                                if (newCompanies !== undefined) {
                                  return {
                                          companies: Belt_Array.concat(companies$1, newCompanies)
                                        };
                                }
                                
                              }
                              return {
                                      companies: Belt_Option.getWithDefault(companies, [])
                                    };
                            }), undefined);
                      return Utils.$$Promise.ignore(__x.then(function (result) {
                                      if (result.TAG) {
                                        console.log("fetchMore: failure!");
                                      } else {
                                        console.log("fetchMore: success!");
                                      }
                                      return Promise.resolve(undefined);
                                    }));
                    })
                }, "Fetch More!")));
  } else {
    tmp = queryResult.loading ? React.createElement("p", undefined, "Loading") : React.createElement("p", undefined, "Error loading data");
  }
  return React.createElement("div", undefined, tmp);
}

var make = Query_Typical;

exports.CompaniesQuery = CompaniesQuery;
exports.make = make;
/* query Not a pure module */
