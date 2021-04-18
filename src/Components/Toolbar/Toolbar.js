import React from "react";
import "../../UserManagement/user_management.scss";
import 'react-responsive-modal/styles.css';
class login extends React.Component {

  render() {

    return (
      <div class="topSection">
        <div class='topSectionContents d-flex'>
          <div class="logoSection">
            <a href="/">   <img src="img/seedaLogo.png" class="logo" /></a>
          </div>
          <nav class="navbar navbar-expand-lg navbar-light col-sm-4 menuSection">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a href='/'>Features</a>
                </li>
                <li class="nav-item">
                  <a href='/'>About</a>
                </li>
                <li class="nav-item">
                  <a href='/'>Roadmap</a>
                </li>
                <li class="nav-item">
                  <a href='/'>Pricing</a>
                </li>
                <button className="c-pointer signUp">Sign Up</button>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default login;
