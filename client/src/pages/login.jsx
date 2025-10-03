import { useState } from "react";
import FormPage from "../components/layouts/formPage";
import Input from "../components/interactions/input";

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json().then((data) => ({ ok: res.ok, data })))
      .then(({ ok, data }) => {
        if (ok) {
          onLogin(data);
        } else {
          alert(data.message || "Login failed");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong");
      });
  };

  return (
    <FormPage title='Log In'>
      <form onSubmit={handleSubmit}>
        <Input label="username" id="user"  value={formData.username} onChange={handleChange}/>
        <Input label="password" id="password" type="password" value={formData.password} onChange={handleChange}/>
      </form>
    </FormPage>
  );
};

export default Login;

