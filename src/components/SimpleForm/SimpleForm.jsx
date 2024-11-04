const SimpleForm = () => {
  const handleForm = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.phone.value);
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <input className="border-2 border-red-500" type="text" name="name" />
        <br />
        <input className="border-2 border-red-500" type="email" name="email" />
        <br />
        <input className="border-2 border-red-500" type="text" name="phone" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
