[%graphql
  {|
  mutation ChangeCompanyName($input: ChangeCompanyInput!) {
    changeCompanyName(input: $input) {
      id
      name
    }
  }
  |}
];

[%graphql
{|
  mutation AddCompany($name: String!) {
    addCompany(name: $name) {
      id
      name
    }
  }
  |}
];

[%graphql
{|
  mutation DeleteCompany($id: Int!) {
    deleteCompany(id: $id)
  }
  |}
];



[%graphql
{|
  subscription CompanyNameChanged {
    companyNameChanged {
      id
      name
    }
  }
  |}
];


[%graphql
{|
  subscription CompanyAdded {
    companyAdded {
      id
      name
    }
  }
  |}
];


[%graphql
{|
  subscription CompanyRemoved {
    companyRemoved {
      id
    }
  }
  |}
];


[%graphql
  {|
    query Companies {
      companies {
        id
        name
      }
    }
  |}
];