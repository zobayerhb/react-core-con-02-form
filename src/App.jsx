import "./App.css";
import ReusableForm from "./components/ReusableForm/ReusableForm";
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StateFulForm from './components/StateFulForm/StateFulForm'

function App() {
  const handleFormSignUp = (data) => {
    console.log("sign up", data);
  };

  const handleUpdateProfileForm = (data) => {
    console.log("update form", data);
  };

  return (
    <>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm
        formTitle={"Sign Up"}
        handleForm={handleFormSignUp}
        submitBtn="Sign Up"
      >
        <div>
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p>Please Sign Up First</p>
        </div>
      </ReusableForm>
      <ReusableForm
        handleForm={handleUpdateProfileForm}
        submitBtn="Update Profile"
      >
        <div>
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <p>Always keep update your profile</p>
        </div>
      </ReusableForm>
    </>
  );
}

export default App;
