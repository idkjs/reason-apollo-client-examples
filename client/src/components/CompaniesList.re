module Company = Fragments.Company;
[@react.component]
let make =
    (~companies: array(GQL.CompaniesQuery.t_companies)) => {
  <>
    <h4> "Companies List"->React.string </h4>
    {companies
     ->Belt.Array.map(company =>
         <div key={company.id->string_of_int}>
           <h3> company.name->React.string </h3>
           <ChangeName company />
           <DeleteCompany id={company.id} />
         </div>
       )
     ->React.array}
  </>;
};
