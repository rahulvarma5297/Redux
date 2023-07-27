import { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.name.length < 3) {
      alert("Name must be at least 3 characters long");
      return;
    }

    if (!data.email.includes(".")) {
      alert("Email must be valid");
      return;
    }

    if (data.password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }

    alert("Form submitted successfully");
    alert(`${data.name} ${data.email} ${data.password}`);
    console.log(data);

    setData({
      name: "",
      email: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>This is the form page</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          required
        />{" "}
        <br />
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          required
        />{" "}
        <br />
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          required
        />{" "}
        <br />
        <input type="submit" value={"Submit"} />
      </form>
    </div>
  );
};

export default Form;
