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
      ></ReusableForm>
      <ReusableForm
        formTitle={"Profile Update"}
        handleForm={handleUpdateProfileForm}
      ></ReusableForm>
    </>
  );
}

export default App;
