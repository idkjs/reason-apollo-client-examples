
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

[@react.component]
let make = () => {
  let queryResult = CompaniesQuery.use();

  <div>
    {switch (queryResult) {
     | {loading: true, data: None} => <p> "Loading"->React.string </p>
     | {loading, data: Some({companies}), error, fetchMore} =>
 
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
         <p>
           <button
             onClick={_ =>
               fetchMore(
                 ~updateQuery=
                   (prev, {fetchMoreResult}) => {
                     switch (prev, fetchMoreResult) {
                     | (
                         {companies: Some(companies)},
                         Some({companies: Some(newCompanies)}),
                       ) => {
                         companies:
                           Some(Belt.Array.concat(companies, newCompanies)),
                       }
                     | _ => {
                         companies:
                           Some(companies->Belt.Option.getWithDefault([||])),
                       }
                     }
                   },
                 (),
               )
               ->Js.Promise.then_(
                   result => {
                     switch (result) {
                     | Ok(_) => Js.log("fetchMore: success!")
                     | Error(_) => Js.log("fetchMore: failure!")
                     };
                     Js.Promise.resolve();
                   },
                   _,
                 )
               ->Utils.Promise.ignore
             }>
             "Fetch More!"->React.string
           </button>
         </p>
       </>;
     | {loading: false, data: None} =>
       <p> "Error loading data"->React.string </p>
     }}
  </div>;
};
