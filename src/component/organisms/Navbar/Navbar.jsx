import react from 'react';
import BlackLogoButton from '../../atoms/Buttons/BlackLogo/BlackLogoButton';
import LoginButton from '../../atoms/Buttons/Login/LoginButton';
import SignUpButton from '../../atoms/Buttons/SignUp/SignUpButton';
import './styles.css';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <BlackLogoButton />
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                <div class="form-inline my-2 my-lg-0">
                    <LoginButton />
                    <SignUpButton />
                </div>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;