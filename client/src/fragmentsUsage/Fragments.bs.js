// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var ApolloClient__React_Hooks_UseQuery = require("reason-apollo-client/src/@apollo/client/react/hooks/ApolloClient__React_Hooks_UseQuery.bs.js");

var Raw = {};

var query = (require("@apollo/client").gql`
  fragment Company on Company   {
    __typename
    id
    name
  }
`);

function parse(value) {
  return {
          __typename: value.__typename,
          id: value.id,
          name: value.name
        };
}

function serialize(value) {
  var value$1 = value.name;
  var value$2 = value.id;
  var value$3 = value.__typename;
  return {
          __typename: value$3,
          id: value$2,
          name: value$1
        };
}

function verifyArgsAndParse(_Company, value) {
  return parse(value);
}

function verifyName(param) {
  
}

var Company = {
  Raw: Raw,
  query: query,
  parse: parse,
  serialize: serialize,
  verifyArgsAndParse: verifyArgsAndParse,
  verifyName: verifyName
};

var Raw$1 = {};

var query$1 = ((frag_0) => require("@apollo/client").gql`
  query Fragments  {
    companies  {
      ...Company
    }
  }
  ${frag_0}
`)(query);

function parse$1(value) {
  var value$1 = value.companies;
  return {
          companies: !(value$1 == null) ? value$1.map(function (value) {
                  if (!(value == null)) {
                    return parse(value);
                  }
                  
                }) : undefined
        };
}

function serialize$1(value) {
  var value$1 = value.companies;
  var companies = value$1 !== undefined ? value$1.map(function (value) {
          if (value !== undefined) {
            return serialize(value);
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

var Fragments_inner = {
  Raw: Raw$1,
  query: query$1,
  parse: parse$1,
  serialize: serialize$1,
  serializeVariables: serializeVariables,
  makeVariables: makeVariables,
  makeDefaultVariables: makeDefaultVariables
};

var include = ApolloClient__React_Hooks_UseQuery.Extend({
      query: query$1,
      Raw: Raw$1,
      parse: parse$1,
      serialize: serialize$1,
      serializeVariables: serializeVariables
    });

var Fragments_refetchQueryDescription = include.refetchQueryDescription;

var Fragments_use = include.use;

var Fragments_useLazy = include.useLazy;

var Fragments_useLazyWithVariables = include.useLazyWithVariables;

var Fragments = {
  Fragments_inner: Fragments_inner,
  Raw: Raw$1,
  query: query$1,
  parse: parse$1,
  serialize: serialize$1,
  serializeVariables: serializeVariables,
  makeVariables: makeVariables,
  makeDefaultVariables: makeDefaultVariables,
  refetchQueryDescription: Fragments_refetchQueryDescription,
  use: Fragments_use,
  useLazy: Fragments_useLazy,
  useLazyWithVariables: Fragments_useLazyWithVariables
};

exports.Company = Company;
exports.Fragments = Fragments;
/* query Not a pure module */
