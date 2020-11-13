[@react.component]
let make = () => {
  let queryResult = GQL.Companies.use();
  let (mutate, result) = GQL.DeleteCompany.use();
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
           <br />
           <hr />
           <br />
           <h1> "add a new company"->React.string </h1>
           <AddCompany />
         </div>
         <br />
         <hr />
         <br />
         <Subscription />
         <br />
         <hr />
         <br />
         <h4> "Query with Subscription for More"->React.string </h4>
         <Query_SubscribeToMore />
         <br />
         <hr />
         <br />
         <h4> "Typical Query"->React.string </h4>
         <Query_Typical />
         <br />
         <hr />
         <br />
         <h2> "Using Query Fragments"->React.string </h2>
         <Query_Fragments />
       </>;
     | {loading: false, data: None} =>
       <p> "Error loading data"->React.string </p>
     }}
  </div>;
};
