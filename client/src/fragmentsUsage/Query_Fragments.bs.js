// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Fragments = require("./Fragments.bs.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var ApolloClient__React_Hooks_UseQuery = require("reason-apollo-client/src/@apollo/client/react/hooks/ApolloClient__React_Hooks_UseQuery.bs.js");

var Raw = {};

var query = ((frag_0) => require("@apollo/client").gql`
  query CompaniesQuery  {
    companies  {
      ...Company
    }
  }
  ${frag_0}
`)(Fragments.Company.query);

function parse(value) {
  var value$1 = value.companies;
  return {
          companies: !(value$1 == null) ? value$1.map(function (value) {
                  if (!(value == null)) {
                    return Fragments.Company.verifyArgsAndParse("Company", value);
                  }
                  
                }) : undefined
        };
}

function serialize(value) {
  var value$1 = value.companies;
  var companies = value$1 !== undefined ? value$1.map(function (value) {
          if (value !== undefined) {
            return Fragments.Company.serialize(value);
          } else {
            return null;
          }
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

function Query_Fragments$CompanyCount(Props) {
  var companies = Props.companies;
  return React.createElement("p", undefined, "There are " + (String(companies.length) + " Companies"));
}

var CompanyCount = {
  make: Query_Fragments$CompanyCount
};

function Query_Fragments(Props) {
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
    var companies = Belt_Array.keepMap(Belt_Option.getWithDefault(match.companies, []), (function (e) {
            return e;
          }));
    tmp = React.createElement(React.Fragment, undefined, React.createElement("dialog", undefined, queryResult.loading ? React.createElement("p", undefined, "Refreshing...") : null, queryResult.error !== undefined ? React.createElement("p", undefined, "Something went wrong, data may be incomplete") : null), React.createElement(Query_Fragments$CompanyCount, {
              companies: companies
            }));
  } else {
    tmp = queryResult.loading ? React.createElement("p", undefined, "Loading") : React.createElement("p", undefined, "Error loading data");
  }
  return React.createElement("div", undefined, tmp);
}

var Company;

var make = Query_Fragments;

exports.Company = Company;
exports.CompaniesQuery = CompaniesQuery;
exports.CompanyCount = CompanyCount;
exports.make = make;
/* query Not a pure module */
