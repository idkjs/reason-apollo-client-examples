module CompanyAddedSubscription = [%graphql
  {|
  subscription CompanyAdded {
    companyAdded {
      id
      name
    }
  }
  |}
];

[@react.component]
let make = () => {
  <>
    <p>
      "[ New Companies Subscription will show here ]"->React.string
    </p>
    {switch (CompanyAddedSubscription.use()) {
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
