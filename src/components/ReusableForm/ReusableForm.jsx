import PropTypes from "prop-types";

const ReusableForm = ({ formTitle, handleForm }) => {

    const handleLocalFormSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email:e.target.email.value,
            password: e.target.password.value
        }
        handleForm(data)
    }

  return (
    <div onSubmit={handleLocalFormSubmit}>
      <h1 className="text-3xl font-bold">{formTitle}</h1>
      <form>
        <input className="border-2 border-red-500" type="text" name="name" />
        <br />
        <input className="border-2 border-red-500" type="email" name="email" />
        <br />
        <input className="border-2 border-red-500" type="password" name="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

ReusableForm.propTypes = {
  formTitle: PropTypes.string,
  handleForm: PropTypes.func
};

export default ReusableForm;
