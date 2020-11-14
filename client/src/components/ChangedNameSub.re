[@react.component]
let make = () => {
  <>
  <h4> "[ Company Name Changed Subscription will show here ]"->React.string </h4>
    // <p>
    //   "[ Company Name Changed Subscription will show here ]"->React.string
    // </p>
    {switch (GQL.NameChangedSub.use()) {
     | {data: Some({companyNameChanged: Some({name})})} =>
       <p>
         {React.string(
            "New company is: "
            ++ name
          )}
       </p>
     | _ignoredForExample => React.null
     }}
  </>;
};