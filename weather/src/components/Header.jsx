import logo from "./pics/svg/logo.svg";
import "./styles/Header.css";
import user from "./pics/svg/user.svg";
import React, { useState } from "react";

function Header() {
  const [showForm, setShowForm] = useState(false);
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [currentUser, setCurrentUser]=useState(null)
  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    setCurrentUser({
      name: userData.userName,
    })
    setUserData({
      userName: "",
      email: "",
      password: "",
    });
    setShowForm(false);
  };
  return (
    <>
      <div className="container">
        <div className="header-div">
          <div className="menu-div">
            <img src={logo} alt="logo" className="logo" />
            <ul className="header-menu-list">
              <li className="header-menu-item">
                <a href="" className="header-menu-link">
                  <p className="header-menu-paragraph">Who we are</p>
                </a>
              </li>
              <li className="header-menu-item">
                <a href="" className="header-menu-link">
                  <p className="header-menu-paragraph">Contacts</p>
                </a>
              </li>
              <li className="header-menu-item">
                <a href="" className="header-menu-link">
                  <p className="header-menu-paragraph">Menu</p>
                </a>
              </li>
            </ul>
          </div>
          <ul className="sign-up-list">
            <li className="sign-up-item">
              {currentUser ? (
                <p>Hello, {currentUser.name}</p>
              ) : (
                  <button
                className="sign-up-button"
                onClick={() => setShowForm(true)}
              >
                Sign Up
              </button>
              )}
            </li>
            <li className="sign-up-item">
              <img
                src={user}
                alt="profile-photo"
                className="sign-up-profile-photo"
              />
            </li>
          </ul>
        </div>
        {showForm && (
          <div className="register-div">
            <form className="form" onSubmit={handleSubmit}>
               <h3>Username</h3>
              <input type="text" 
              name="userName"
              placeholder="Username"
              value={userData.userName}
              onChange={handleChange}
              />
              <h3>E-mail</h3>
                 <input type="email" 
              name="email"
              placeholder="E-mail"
              value={userData.email}
              onChange={handleChange}
              />
              <h3>Password</h3>
                 <input type="password" 
              name="password"
              placeholder="Password"
              value={userData.password}
              onChange={handleChange}
              />
              <button className="form-btn" onClick={handleSubmit}>Sign up</button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
