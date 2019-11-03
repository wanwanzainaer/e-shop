import React, { useState } from "react";

import "./Sign-up.scss";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import {
  auth,
  createUserProfileDocument
} from "../../firebase/firebase.utils";

const SignUp = () => {
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const handleSubmit = async e => {
    e.preventDefault();
    const { displayName, password, confirmPassword, email } = state;
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setState(s => ({ ...s, [name]: value }));
  };
  return (
    <div className="sign-up" onSubmit={handleSubmit}>
      <h2 className="titlle">I do not have account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form">
        <FormInput
          name="email"
          type="email"
          value={state.email}
          required
          handlChange={handleChange}
          label="Email"
          autoComplete="off"
        />{" "}
        <FormInput
          name="displayName"
          type="displayName"
          value={state.displayName}
          required
          handlChange={handleChange}
          label="Name"
          autoComplete="off"
        />{" "}
        <FormInput
          name="password"
          type="password"
          value={state.password}
          required
          handlChange={handleChange}
          label="Password"
          autoComplete="off"
        />{" "}
        <FormInput
          name="confirmPassword"
          type="password"
          value={state.confirmPassword}
          required
          handlChange={handleChange}
          label="Confirm Password"
          autoComplete="off"
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
