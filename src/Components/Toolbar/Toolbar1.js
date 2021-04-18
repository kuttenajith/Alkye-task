import React from "react";
import "../../UserManagement/user_management.scss";
import 'react-responsive-modal/styles.css';
class login extends React.Component {

    render() {

        return (
            <div class="topSection">
                <div class="topSectionContents d-flex">
                    <div class="logoSection col-sm-4">
                        <a href="/">   <img src="img/seedaLogo.png" class="logo" /></a>
                    </div>
                    <div class='col-sm-6 pt-3'>
                        <h3>XYZ PTY LTD</h3>
                    </div>
                    <div class='d-flex userProfile menuSection col-sm-2 pt-3'>
                        <p class="userIcon m-0"><b>MK</b></p>
                        <button className="c-pointer signUp">LOGOUT</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default login;
