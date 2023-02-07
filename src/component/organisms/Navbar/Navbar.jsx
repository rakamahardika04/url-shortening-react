import react, { Component } from 'react';
import BlackLogoButton from '../../atoms/Buttons/BlackLogo/BlackLogoButton';
import LoginButton from '../../atoms/Buttons/Login/LoginButton';
import SignUpButton from '../../atoms/Buttons/SignUp/SignUpButton';
import './styles.css';

class Navbar extends Component {

    render(){
        return (
            <nav class="navbar-section navbar navbar-expand-lg navbar-light bg-white">
                <div class="container">
                    <div class="logo-container">
                        <BlackLogoButton />
                    </div>
                    <button onClick={this.handleToggler} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Features <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Resources</a>
                            </li>
                        </ul>

                        <div class="nav-button form-inline my-2 my-lg-0">
                                <div class="login-btn-container">
                                    <LoginButton />
                                </div>
                                <div class='signup-btn-container'>
                                    <SignUpButton />
                                </div>
                        </div>
                    </div>
                </div>
             </nav>
        )
    }
}

export default Navbar;