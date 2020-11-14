module Company = Fragments.Company;
[@react.component]
let make =
    (~companies: array(Company.t)) => {
  <>
    <h4> "Companies List"->React.string </h4>
    {companies
     ->Belt.Array.map(company =>
         <div key={company.id->string_of_int}>
           <h3> company.name->React.string </h3>
           <ChangeName company={__typename: company.__typename, id: company.id,name:company.name} />
           <DeleteCompany id={company.id} />
         </div>
       )
     ->React.array}
  </>;
};
