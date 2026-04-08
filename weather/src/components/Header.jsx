import logo from "./pics/svg/logo.svg";
import "./styles/Header.css";
import user from "./pics/svg/user.svg";

function Header() {
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
              <button className="sign-up-button">Sign Up</button>
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
      </div>
    </>
  );
}

export default Header;
