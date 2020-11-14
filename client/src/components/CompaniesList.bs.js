// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var ChangeName = require("./ChangeName.bs.js");
var DeleteCompany = require("./DeleteCompany.bs.js");

function CompaniesList(Props) {
  var companies = Props.companies;
  return React.createElement(React.Fragment, undefined, React.createElement("h4", undefined, "Companies List"), Belt_Array.map(companies, (function (company) {
                    return React.createElement("div", {
                                key: String(company.id)
                              }, React.createElement("h3", undefined, company.name), React.createElement(ChangeName.make, {
                                    company: company
                                  }), React.createElement(DeleteCompany.make, {
                                    id: company.id
                                  }));
                  })));
}

var Company;

var make = CompaniesList;

exports.Company = Company;
exports.make = make;
/* react Not a pure module */