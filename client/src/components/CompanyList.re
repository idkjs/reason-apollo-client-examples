[@react.component]
let make = () => {
  let queryResult = GQL.CompaniesQuery.use();
  let (mutate, _) = GQL.DeleteCompanyMutation.use();
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
         <div>
         <h4> "Company List"->React.string </h4>
           {companies
            ->Belt.Array.map(company =>
                <div key={company.id->string_of_int}>
                  <h3> company.name->React.string </h3>
                  <ChangeName company />
                  <button onClick={_ => mutate({id: company.id})->ignore}>
                    "Delete"->React.string
                  </button>
                </div>
              )
            ->React.array}
         </div>
 
       </>;
     | {loading: false, data: None} =>
       <p> "Error loading data"->React.string </p>
     }}
  </div>;
};
