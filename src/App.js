import './App.css';

import GetStartedButton from './component/atoms/Buttons/GetStarted/GetStartedButton';
import SignUpButton from './component/atoms/Buttons/SignUp/SignUpButton';
import ShortenButton from './component/atoms/Buttons/Shorten/ShortenButton';
import LoginButton from './component/atoms/Buttons/Login/LoginButton';
import BlackLogoButton from './component/atoms/Buttons/BlackLogo/BlackLogoButton';
import WhiteLogoButton from './component/atoms/Buttons/WhiteLogo/WhiteLogoButton';
import HeroHeadline from './component/atoms/Texts/Hero/HeroHeadline/HeroHeadline';
import HeroSubHeadline from './component/atoms/Texts/Hero/HeroSubHeadline/HeroSubHeadline';
import InputLink from './component/atoms/Input/InputLink/InputLink';
import StatisticsHeadline from './component/atoms/Texts/Statistics/StatisticsHeadline/StatisticsHeadline';
import StatisticsSubHeadline from './component/atoms/Texts/Statistics/StatisticsSubHeadline/StatisticsSubHeadline';
import CardFiture from './component/atoms/Cards/CardFiture/CardFiture';
import InputShortenForm from './component/molecules/InputShortenLink/InputShortenForm';

function App() {
  return (

    <div className="App">
      {/* <GetStartedButton /> */}
      {/* <SignUpButton /> */}
      {/* <ShortenButton /> */}
      {/* <LoginButton /> */}
      {/* <WhiteLogoButton /> */}
      {/* <BlackLogoButton /> */}
      {/* <HeroHeadline /> */}
      {/* <HeroSubHeadline /> */}
      {/* <InputLink /> */}
      {/* <StatisticsHeadline /> */}
      {/* <StatisticsSubHeadline /> */}
      <CardFiture />
      {/* <InputShortenForm /> */}
    </div>
  );
}

export default App;
