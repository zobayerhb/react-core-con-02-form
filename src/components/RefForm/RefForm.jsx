import { useEffect } from "react";
import { useRef } from "react";

const RefForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <input
          ref={nameRef}
          className="border-2 border-red-500"
          defaultValue={"Zobayer Hosen"}
          type="text"
          name="name"
        />
        <br />
        <input
          ref={emailRef}
          className="border-2 border-red-500"
          type="email"
          name="email"
        />
        <br />
        <input
          ref={passwordRef}
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

export default RefForm;
