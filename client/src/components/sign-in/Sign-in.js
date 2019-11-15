import React, { useState } from "react";
import FormInput from "../form-input/FormInput";
import "./Sign-in.scss";
import CustomButton from "../custom-button/CustomButton";

import { connect } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/actions/userAction";

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [state, setState] = useState({ email: "", password: "" });

  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = state;
    emailSignInStart({ email, password });
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setState(state => ({ ...state, [name]: value }));
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
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default connect(null, { googleSignInStart, emailSignInStart })(SignIn);
