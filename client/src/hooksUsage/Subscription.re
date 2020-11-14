[@react.component]
let make = () => {
  <>
    <p>
      "[ New Companies Subscription will show here ]"->React.string
    </p>
    {switch (GQL.CompanyAddedSub.use()) {
     | {data: Some({companyAdded: Some({name})})} =>
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
