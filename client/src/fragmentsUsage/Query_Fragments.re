// The TodosQuery below is going to look for a module of the same name to define the fragment
module Company = Fragments.Company;

[%graphql
  {|
    query CompaniesQuery {
      companies {
        # This references the Company fragment definition module above!
        ...Company
      }
    }
  |}
];

// It's easy to share types when using Fragments
module CompanyCount = {
  [@react.component]
  let make = (~companies: array(Company.t)) => {
    <p>
      {React.string(
         "There are "
         ++ companies->Belt.Array.length->string_of_int
         ++ " Companies",
       )}
    </p>;
  };
};

[@react.component]
let make = () => {
  let queryResult = CompaniesQuery.use();

  <div>
    {switch (queryResult) {
     | {loading: true, data: None} => <p> "Loading"->React.string </p>
     | {loading, data: Some({companies}), error} =>
       let companies =
         companies
         ->Belt.Option.getWithDefault([||])
         ->Belt.Array.keepMap(e => e);

       <>
         <dialog>
           {loading ? <p> "Refreshing..."->React.string </p> : React.null}
           {switch (error) {
            | Some(_) =>
              <p>
                "Something went wrong, data may be incomplete"->React.string
              </p>
            | None => React.null
            }}
         </dialog>
         <CompanyCount companies />
       </>;
     | {loading: false, data: None} =>
       <p> "Error loading data"->React.string </p>
     }}
  </div>;
};
