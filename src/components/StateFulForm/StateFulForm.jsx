import { useState } from "react";

const StateFulForm = () => {
  const [name, setName] = useState('zobayer hosen');
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Your password must be 6 character or longer");
    } else {
      setError("");
      console.log(name, email, password);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <input
        value={name}
          onChange={handleNameChange}
          className="border-2 border-red-500"
          type="text"
          name="name"
        />
        <br />
        <input
          onChange={handleEmailChange}
          className="border-2 border-red-500"
          type="email"
          name="email"
        />
        <br />
        <input
          onChange={handlePasswordChange}
          className="border-2 border-red-500"
          type="password"
          name="password"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      {
        error && <p>{error}</p>
      }
    </div>
  );
};

export default StateFulForm;
