// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var ApolloClient__React_Hooks_UseQuery = require("reason-apollo-client/src/@apollo/client/react/hooks/ApolloClient__React_Hooks_UseQuery.bs.js");
var ApolloClient__React_Hooks_UseSubscription = require("reason-apollo-client/src/@apollo/client/react/hooks/ApolloClient__React_Hooks_UseSubscription.bs.js");

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

var Raw$1 = {};

var query$1 = (require("@apollo/client").gql`
  subscription SubscriptionForCompanies  {
    companyAdded  {
      __typename
      id
      name
    }
  }
`);

function parse$1(value) {
  var value$1 = value.companyAdded;
  return {
          companyAdded: !(value$1 == null) ? ({
                __typename: value$1.__typename,
                id: value$1.id,
                name: value$1.name
              }) : undefined
        };
}

function serialize$1(value) {
  var value$1 = value.companyAdded;
  var companyAdded;
  if (value$1 !== undefined) {
    var value$2 = value$1.name;
    var value$3 = value$1.id;
    var value$4 = value$1.__typename;
    companyAdded = {
      __typename: value$4,
      id: value$3,
      name: value$2
    };
  } else {
    companyAdded = null;
  }
  return {
          companyAdded: companyAdded
        };
}

function serializeVariables$1(param) {
  
}

function makeVariables$1(param) {
  
}

function makeDefaultVariables$1(param) {
  
}

var SubscriptionForCompanies_inner = {
  Raw: Raw$1,
  query: query$1,
  parse: parse$1,
  serialize: serialize$1,
  serializeVariables: serializeVariables$1,
  makeVariables: makeVariables$1,
  makeDefaultVariables: makeDefaultVariables$1
};

var include$1 = ApolloClient__React_Hooks_UseSubscription.Extend({
      query: query$1,
      Raw: Raw$1,
      parse: parse$1,
      serialize: serialize$1,
      serializeVariables: serializeVariables$1
    });

var SubscriptionForCompanies_use = include$1.use;

var SubscriptionForCompanies = {
  SubscriptionForCompanies_inner: SubscriptionForCompanies_inner,
  Raw: Raw$1,
  query: query$1,
  parse: parse$1,
  serialize: serialize$1,
  serializeVariables: serializeVariables$1,
  makeVariables: makeVariables$1,
  makeDefaultVariables: makeDefaultVariables$1,
  use: SubscriptionForCompanies_use
};

function Query_SubscribeToMore(Props) {
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
  React.useEffect((function () {
          Curry._5(queryResult.subscribeToMore, {
                query: query$1,
                Raw: Raw$1,
                parse: parse$1,
                serialize: serialize$1,
                serializeVariables: serializeVariables$1
              }, (function (previous, param) {
                  var companyAdded = param.subscriptionData.data.companyAdded;
                  var id = Belt_Option.getWithDefault(Belt_Option.map(companyAdded, (function (c) {
                              return c.id;
                            })), 0);
                  var __typename = Belt_Option.getWithDefault(Belt_Option.map(companyAdded, (function (c) {
                              return c.__typename;
                            })), "");
                  var name = Belt_Option.getWithDefault(Belt_Option.map(companyAdded, (function (c) {
                              return c.name;
                            })), "");
                  var t_companies = previous.companies;
                  var previousTodosOption = t_companies !== undefined ? (
                      t_companies.length !== 0 ? Belt_Array.keepMap(t_companies, (function (e) {
                                return e;
                              })) : []
                    ) : [];
                  var t_companies$1 = previous.companies;
                  var previousTodosArr = t_companies$1 !== undefined ? (
                      t_companies$1.length !== 0 ? Belt_Array.keepMap(t_companies$1, (function (e) {
                                return e;
                              })) : []
                    ) : [];
                  var t_companies$2 = previous.companies;
                  var previousTodosArrayOption = t_companies$2 !== undefined ? (
                      t_companies$2.length !== 0 ? Belt_Array.keepMap(t_companies$2, (function (e) {
                                return Caml_option.some(e);
                              })) : []
                    ) : [];
                  var t_companies$3 = previous.companies;
                  var newCompanies;
                  if (t_companies$3 !== undefined) {
                    if (t_companies$3.length !== 0) {
                      var t_companies$4 = Belt_Array.keepMap(t_companies$3, (function (e) {
                              return Caml_option.some(e);
                            }));
                      var newCompany = {
                        __typename: __typename,
                        id: id,
                        name: name
                      };
                      newCompanies = Belt_Array.concat(t_companies$4, [newCompany]);
                    } else {
                      newCompanies = [];
                    }
                  } else {
                    newCompanies = [];
                  }
                  var companyAdded$1 = {
                    __typename: __typename,
                    id: id,
                    name: name
                  };
                  console.log("previous", previous);
                  console.log("companyAdded", companyAdded$1);
                  console.log("previousTodosArrayOption", previousTodosArrayOption);
                  console.log("previousTodosArr", previousTodosArr);
                  console.log("previousTodosOption", previousTodosOption);
                  console.log("newCompanies", newCompanies);
                  return {
                          companies: newCompanies
                        };
                }), undefined, undefined, undefined);
          
        }), []);
  var match = queryResult.data;
  var tmp;
  if (match !== undefined) {
    var companies = match.companies;
    var companies$1 = companies !== undefined && companies.length !== 0 ? Belt_Array.keepMap(companies, (function (e) {
              return Caml_option.some(e);
            })).length : 0;
    tmp = React.createElement("p", undefined, "There are " + (String(companies$1) + " Companies"));
  } else {
    tmp = null;
  }
  return React.createElement(React.Fragment, undefined, React.createElement("p", undefined, "[ Companies Count Subscription will show here ]"), tmp);
}

var make = Query_SubscribeToMore;

exports.CompaniesQuery = CompaniesQuery;
exports.SubscriptionForCompanies = SubscriptionForCompanies;
exports.make = make;
/* query Not a pure module */
