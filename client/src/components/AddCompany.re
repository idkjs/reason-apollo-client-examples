[@react.component]
let make = () => {
  let (mutate, result) = GQL.AddCompany.use();
  let (name, setName) = React.useState(() => "");

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
          let variables = GQL.AddCompany.makeVariables(~name, ());
          mutate(variables)->ignore;
        }}>
        "Add"->React.string
      </button>

    </>
  | {loading: true} => "Loading..."->React.string
  | {data: Some({addCompany}), error: None} =>
    let name =
      addCompany
      ->Belt.Option.map(c => c.name)
      ->Belt.Option.getWithDefault("");

    <p> {React.string("Company added: \"" ++ name ++ "\"")} </p>;

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
