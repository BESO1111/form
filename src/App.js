import "./App.css";
import { useState } from "react";
import Form from "./Form";

function App() {
  const [value, setvalue] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMesage:
        "Username should be 3-16 characters and shouldn't include any spacial character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMesage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMesage:
        "Password should be 8-20 characters and include at least 1 letter, 1number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMesage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: value.password,
      required: true,
    },
  ];

  const onsubmitform = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    setvalue({ ...value, [e.target.name]: e.target.value });
  };
  console.log(value);
  return (
    <div className="App">
      <form onSubmit={onsubmitform}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <Form
            key={input.id}
            {...input}
            value={value[input.name]}
            onChange={onChange}
          />
        ))}
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
