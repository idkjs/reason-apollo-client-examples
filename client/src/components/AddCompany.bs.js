// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var GQL = require("../GQL.bs.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");

function AddCompany(Props) {
  var match = Curry.app(GQL.AddCompanyMutation.use, [
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
  var result = match[1];
  var mutate = match[0];
  var match$1 = React.useState(function () {
        return "";
      });
  var setName = match$1[1];
  var name = match$1[0];
  React.useEffect((function () {
          Curry._1(setName, (function (param) {
                  return name;
                }));
          
        }), [name]);
  var match$2 = result.data;
  if (!result.called) {
    return React.createElement(React.Fragment, undefined, React.createElement("input", {
                    value: name,
                    onChange: (function ($$event) {
                        var value = $$event.target.value;
                        return Curry._1(setName, (function (param) {
                                      return value;
                                    }));
                      })
                  }), React.createElement("button", {
                    onClick: (function (param) {
                        var variables = GQL.AddCompanyMutation.makeVariables(name, undefined);
                        Curry._8(mutate, undefined, undefined, undefined, undefined, undefined, undefined, undefined, variables);
                        
                      })
                  }, "Add"));
  }
  if (result.loading) {
    return "Loading...";
  }
  if (match$2 !== undefined && result.error === undefined) {
    var name$1 = Belt_Option.getWithDefault(Belt_Option.map(match$2.addCompany, (function (c) {
                return c.name;
              })), "");
    return React.createElement("p", undefined, "Company added: \"" + (name$1 + "\""));
  }
  var error = result.error;
  return React.createElement(React.Fragment, undefined, "Error loading data", error !== undefined ? ": " + error.message : null);
}

var make = AddCompany;

exports.make = make;
/* GQL Not a pure module */
