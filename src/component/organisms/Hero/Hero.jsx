import react from 'react';
import BlackLogoButton from '../../atoms/Buttons/BlackLogo/BlackLogoButton';
import GetStartedButton from '../../atoms/Buttons/GetStarted/GetStartedButton';
import LoginButton from '../../atoms/Buttons/Login/LoginButton';
import SignUpButton from '../../atoms/Buttons/SignUp/SignUpButton';
import HeroHeadline from '../../atoms/Texts/Hero/HeroHeadline/HeroHeadline';
import HeroSubHeadline from '../../atoms/Texts/Hero/HeroSubHeadline/HeroSubHeadline';
import InputShortenForm from '../../molecules/InputShortenForm/InputShortenForm';
import './styles.css';

import IllustrationWorking from '../../../assets/images/illustration-working.svg';

const Hero = () => {
  return (
    <div class="hero-section">
        <div class="hero container">
            <div class="hero-column-left">
                <HeroHeadline />
                <HeroSubHeadline />
                <div class="hero-button-container">
                    <GetStartedButton />
                </div>
            </div>
            <div class="hero-column-right">
                <div class="hero-img-container">
                    <img class="hero-img" src={IllustrationWorking} alt="working" />
                </div>
            </div>
        </div>
    </div>
    
  );
}

export default Hero;