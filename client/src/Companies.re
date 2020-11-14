[@react.component]
let make = () => {
  let queryResult = GQL.CompaniesQuery.use();
  <div>
    {switch (queryResult) {
     | {loading: true, data: None} => <p> "Loading"->React.string </p>
     | {loading, data: Some({companies}), error} =>
       let companies =
         companies
         ->Belt.Option.getWithDefault([||])
         ->Belt.Array.keepMap(e => e);
       // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
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
         <CompanyList />
         <br />
         <hr />
         <br />
         <CompaniesList companies />
         <br />
         <hr />
         <br />
         <AddCompany />
         <br />
         <hr />
         <br />
         <Query_Lazy />
         <br />
         <hr />
         <br />
         <ChangedNameSub />
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
