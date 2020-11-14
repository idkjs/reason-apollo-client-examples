[@react.component]
let make = () => {
  let (executeQuery, queryResult) = GQL.CompaniesQuery.useLazy();
  <div>
    {switch (queryResult) {
     | Unexecuted(_) =>
       <>
         "Lazy Query Waiting to be executed... "->React.string
         <button onClick={_ => executeQuery()} value="execute">
           "Get Company Count"->React.string
         </button>
       </>
     | Executed({loading: true, data: None}) =>
       <p> "Loading"->React.string </p>
     | Executed({loading, data: Some({companies}), error}) =>
       let companyCount =
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
         <p>
           {React.string(
              "There are " ++ companyCount->string_of_int ++ " Companies",
            )}
         </p>
       </>;
     | Executed({loading: false, data: None}) =>
       <p> "Error loading data"->React.string </p>
     }}
  </div>;
};
