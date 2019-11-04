import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/content">
          Content
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <>
            <Link to="/signin" className="option">
              Sign In
            </Link>
            <Link to="/signup" className="option">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { currentUser: state.user.currentUser };
};
export default connect(mapStateToProps)(Header);
