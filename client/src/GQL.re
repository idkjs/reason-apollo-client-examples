[%graphql
  {|
  mutation ChangeNameMutation($input: ChangeCompanyInput!) {
    changeCompanyName(input: $input) {
      id
      name
    }
  }
  |}
];

[%graphql
  {|
  mutation AddCompanyMutation($name: String!) {
    addCompany(name: $name) {
      id
      name
    }
  }
  |}
];

[%graphql
  {|
  mutation DeleteCompanyMutation($id: Int!) {
    deleteCompany(id: $id)
  }
  |}
];

[%graphql
  {|
  subscription NameChangedSub {
    companyNameChanged {
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

[%graphql
  {|
  subscription CompanyRemovedSub {
    companyRemoved {
      id
    }
  }
  |}
];

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
