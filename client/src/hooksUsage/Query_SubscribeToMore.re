
[@react.component]
let make = () => {
  let queryResult = GQL.CompaniesQuery.use();

  React.useEffect0(() => {
    queryResult.subscribeToMore(
      ~subscription=(module GQL.CompanyAddedSub),
      ~updateQuery=
        (previous, {subscriptionData: {data: {companyAdded}}}) => {
          // handle companyAdded Values here
          //   if try passing `{subscriptionData: {data: {companyAdded:Some(companyAdded)}}}` we are required to handle that option in passed variables and I dont know the syntax for that.

          let id =
            companyAdded
            ->Belt.Option.map(c => c.id)
            ->Belt.Option.getWithDefault(0);
          let __typename =
            companyAdded
            ->Belt.Option.map(c => c.__typename)
            ->Belt.Option.getWithDefault("");
          let name =
            companyAdded
            ->Belt.Option.map(c => c.name)
            ->Belt.Option.getWithDefault("");


          let newCompanies:
            option(
              array(option(GQL.CompaniesQuery.CompaniesQuery_inner.t_companies)),
            ) =
            switch (previous.companies) {
            | Some(t_companies) =>
              switch (t_companies) {
              | [||] => Some([||])
              | _ =>
                // here we are pulling the companies out of the array option type returned
                let t_companies =
                  t_companies->Belt.Array.keepMap(e => Some(e));
                // add the newly added company to the previous array
                let newCompany:
                  option(GQL.CompaniesQuery.CompaniesQuery_inner.t_companies) =
                  Some({__typename, id, name});
                Some(Belt.Array.concat(t_companies, [|newCompany|]));
              }
            | None => Some([||])
            };

          {companies: newCompanies};
        },
      (),
    );
    None;
  });

  <>
    <p> "[ Companies Count Subscription will show here ]"->React.string </p>
    {switch (queryResult) {
     | {data: Some({companies})} =>
       let companies =
         switch (companies) {
         | Some(t_companies) =>
           switch (t_companies) {
           | [||] => 0
           | _ =>
             let t_companies = t_companies->Belt.Array.keepMap(e => Some(e));
             t_companies->Belt.Array.length;
           }
         | None => 0
         };
       <p>
         {React.string(
            "There are " ++ companies->string_of_int ++ " Companies",
          )}
       </p>;
     | _ignoredForExample => React.null
     }}
  </>;
};
