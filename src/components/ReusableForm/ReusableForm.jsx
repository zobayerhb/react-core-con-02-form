import PropTypes from "prop-types";

const ReusableForm = ({ handleForm , submitBtn = 'Submit', children}) => {

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
        {children}
      <form>
        <input className="border-2 border-red-500" type="text" name="name" />
        <br />
        <input className="border-2 border-red-500" type="email" name="email" />
        <br />
        <input className="border-2 border-red-500" type="password" name="password" />
        <br />
        <input type="submit" value={submitBtn} />
      </form>
    </div>
  );
};

ReusableForm.propTypes = {
//   formTitle: PropTypes.string,
  handleForm: PropTypes.func,
  submitBtn: PropTypes.string,
  children: PropTypes.any
};

export default ReusableForm;
