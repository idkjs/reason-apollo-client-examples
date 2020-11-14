[@react.component]
let make = (~id: int) => {
  let (_, setId) = React.useState(_ => id);

  let (mutate, result) = GQL.DeleteCompanyMutation.use();
  let handleSubmit = event => {
    ReactEvent.Form.preventDefault(event);
    mutate({id: id})->ignore;
  };
  let idStr = id->string_of_int;
  switch (result) {
  | {called: false} =>
    <>
      "Not called... "->React.string
      <form onSubmit=handleSubmit>
        <h2> {React.string("Delete Id: " ++ idStr ++ "?")} </h2>
        <div className="form-field">
          <input
            placeholder=idStr
            value=idStr
            onChange={event => {
              let value = event->ReactEvent.Form.target##value;
              setId(value);
            }}
          />
        </div>
        <div className="form-field">
          <input type_="submit" value="Delete" />
        </div>
      </form>
    </>
  | {loading: true} => "Loading..."->React.string
  | {data: Some({deleteCompany}), error: None} =>
    let deletedSuccess =
      switch (deleteCompany) {
      | Some(_) => true
      | None => false
      };
    <p>
      {React.string(
         "Company id: \""
         ++ idStr
         ++ "\" deleted:"
         ++ deletedSuccess->string_of_bool,
       )}
    </p>;
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