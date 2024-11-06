import useStateHook from "../hooks/useStateHook";

const HookForm = () => {
  //   const [name, handelNameChange] = useStateHook("Zobayer Hosen");

  const emailChange = useStateHook("zobayer@gmail.com");

  const handleFormSubmit = (e) => {
    e.preventsDefault();
    console.log("form data", emailChange.value);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          //   value={name}
          //   onChange={handelNameChange}
          className="border-2 border-red-500"
          type="text"
          name="name"
        />
        <br />
        <input
          {...emailChange}
          className="border-2 border-red-500"
          type="email"
          name="email"
        />
        <br />
        <input
          className="border-2 border-red-500"
          type="password"
          name="password"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
