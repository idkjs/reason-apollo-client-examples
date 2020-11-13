[%graphql
  {|
    # Check it out! This will be exposed as a module called CompanItem!
    fragment Company on Company {
        id
        name
        
    }

    query Fragments {
      companies {
        ...Company
      }
    }
  |};
  {inline: true}
];
