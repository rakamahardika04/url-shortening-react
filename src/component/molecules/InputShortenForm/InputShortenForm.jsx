import react from 'react';
import './styles.css';

import InputLink from '../../atoms/Input/InputLink/InputLink';
import ShortenButton from '../../atoms/Buttons/Shorten/ShortenButton';

const InputShortenForm = () => {
  return (
    <form class="shorten-form-container container">
      <div class="form-group shorten-form-group">
        <InputLink />
      </div>
      <div class="shorten-btn-container">
        <ShortenButton />
      </div>
    </form>
  );
}

export default InputShortenForm;