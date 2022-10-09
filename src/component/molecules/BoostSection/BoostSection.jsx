import react from 'react';
import './styles.css';

import InputLink from '../../atoms/Input/InputLink/InputLink';
import GetStartedButton from '../../atoms/Buttons/GetStarted/GetStartedButton';

const BoostSection = () => {
  return (
    <div class="boost-container">
      <h3 class="boost-headline">Boost your links today</h3>
      <GetStartedButton />
    </div>
  );
}

export default BoostSection;