import React, { useState } from "react";
import FormInput from "../form-input/FormInput";
import "./Sign-in.scss";
import CustomButton from "../custom-button/CustomButton";
const SignIn = () => {
  const [state, setState] = useState({ email: "", password: "" });

  const handleSubmit = e => {
    e.preventDefault();
    setState({ email: "", password: "" });
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setState(s => ({ ...s, [name]: value }));
  };
  return (
    <div className="sign-in">
      <h2>I already have account</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={state.email}
          required
          handlChange={handleChange}
          label="Email"
          autoComplete="off"
        />
        <FormInput
          name="password"
          type="password"
          value={state.password}
          required
          handlChange={handleChange}
          label="Password"
          autoComplete="off"
        />
        <CustomButton type="submit">Sign In</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
