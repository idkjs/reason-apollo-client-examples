
[%graphql
  {|
    query CompaniesQuery {
      companies {
        id
        name
      }
    }
  |}
];

[%graphql
  {|
    subscription CompanyAddedSub {
        companyAdded {
        id
        name
      }
    }
  |}
];

[@react.component]
let make = () => {
  let queryResult = CompaniesQuery.use();

  React.useEffect0(() => {
    queryResult.subscribeToMore(
      ~subscription=(module CompanyAddedSub),
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

          let previousTodosOption:
            option(array(CompaniesQuery.CompaniesQuery_inner.t_companies)) =
            switch (previous.companies) {
            | Some(t_companies) =>
              switch (t_companies) {
              | [||] => Some([||])
              | _ => Some(t_companies->Belt.Array.keepMap(e => e))
              }
            | None => Some([||])
            };
          let previousTodosArr:
            array(CompaniesQuery.CompaniesQuery_inner.t_companies) =
            switch (previous.companies) {
            | Some(t_companies) =>
              switch (t_companies) {
              | [||] => [||]
              | _ => t_companies->Belt.Array.keepMap(e => e)
              }
            | None => [||]
            };
          let previousTodosArrayOption:
            option(
              array(option(CompaniesQuery.CompaniesQuery_inner.t_companies)),
            ) =
            switch (previous.companies) {
            | Some(t_companies) =>
              switch (t_companies) {
              | [||] => Some([||])
              | _ =>
                let t_companies =
                  t_companies->Belt.Array.keepMap(e => Some(e));
                Some(t_companies);
              }
            | None => Some([||])
            };
          let newCompanies:
            option(
              array(option(CompaniesQuery.CompaniesQuery_inner.t_companies)),
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
                  option(CompaniesQuery.CompaniesQuery_inner.t_companies) =
                  Some({__typename, id, name});
                Some(Belt.Array.concat(t_companies, [|newCompany|]));
              }
            | None => Some([||])
            };
          let companyAdded:
            option(CompaniesQuery.CompaniesQuery_inner.t_companies) =
            Some({__typename, id, name});
          Js.log2("previous", previous);
          Js.log2("companyAdded", companyAdded);
          Js.log2("previousTodosArrayOption", previousTodosArrayOption);
          Js.log2("previousTodosArr", previousTodosArr);
          Js.log2("previousTodosOption", previousTodosOption);
          Js.log2("newCompanies", newCompanies);
          // Error: This expression has type
          //          option(array(CompaniesQuery.CompaniesQuery_inner.t_companies))
          //        but an expression was expected of type
          //          option(array(option(CompaniesQuery.CompaniesQuery_inner.t_companies)))
          //        Type CompaniesQuery.CompaniesQuery_inner.t_companies is not compatible with type
          //          option(CompaniesQuery.CompaniesQuery_inner.t_companies)
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
