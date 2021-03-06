// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var GQL = require("../GQL.bs.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");

function Query_Lazy(Props) {
  var match = Curry.app(GQL.CompaniesQuery.useLazy, [
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
  var queryResult = match[1];
  var executeQuery = match[0];
  var tmp;
  if (queryResult.TAG) {
    tmp = React.createElement(React.Fragment, undefined, "Lazy Query Waiting to be executed... ", React.createElement("button", {
              value: "execute",
              onClick: (function (param) {
                  return Curry._3(executeQuery, undefined, undefined, undefined);
                })
            }, "Get Company Count"));
  } else {
    var match$1 = queryResult._0;
    var match$2 = match$1.data;
    if (match$2 !== undefined) {
      var companies = match$2.companies;
      var companyCount = companies !== undefined && companies.length !== 0 ? Belt_Array.keepMap(companies, (function (e) {
                return Caml_option.some(e);
              })).length : 0;
      tmp = React.createElement(React.Fragment, undefined, React.createElement("dialog", undefined, match$1.loading ? React.createElement("p", undefined, "Refreshing...") : null, match$1.error !== undefined ? React.createElement("p", undefined, "Something went wrong, data may be incomplete") : null), React.createElement("p", undefined, "There are " + (String(companyCount) + " Companies")));
    } else {
      tmp = match$1.loading ? React.createElement("p", undefined, "Loading") : React.createElement("p", undefined, "Error loading data");
    }
  }
  return React.createElement("div", undefined, tmp);
}

var make = Query_Lazy;

exports.make = make;
/* GQL Not a pure module */
