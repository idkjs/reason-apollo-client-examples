[@react.component]
let make = (~company: GQL.CompaniesQuery.t_companies) => {
  let (mutate, result) = GQL.ChangeNameMutation.use();
  let (name, setName) = React.useState(() => company.name);

  React.useEffect1(
    () => {
      setName(_ => name);
      None;
    },
    [|name|],
  );

  switch (result) {
  | {called: false} =>
    <>
      <input
        value=name
        onChange={event => {
          let value = event->ReactEvent.Form.target##value;
          setName(_ => value);
        }}
      />
      <button
        onClick={_ => {
          let variables =
            GQL.ChangeNameMutation.makeVariables(
              ~input={id: company.id, name},
              (),
            );
          mutate(variables)->ignore;
        }}>
        "Rename"->React.string
      </button>
      
    </>
  | {loading: true} => "Loading..."->React.string
  | {data: Some({changeCompanyName}), error: None} =>
    let name =
      changeCompanyName
      ->Belt.Option.map(c => c.name)
      ->Belt.Option.getWithDefault("");
  <>
    <p>
      "[ Name Changed Mutation Result, Not Subscription ]"->React.string
    </p>
    <p> {React.string("Name Changed to: \"" ++ name ++ "\"")} </p>
  </>
  | {error} =>
    <>
      "Error loading data"->React.string
      {switch (error) {
       | Some(error) => React.string(": " ++ error.message)
       | None => React.null
       }}
    </>
  };
};
