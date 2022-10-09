import react from 'react';
import './styles.css';

import InputLink from '../../atoms/Input/InputLink/InputLink';
import ShortenButton from '../../atoms/Buttons/Shorten/ShortenButton';

const InputShortenForm = () => {
  return (
    <form class="shorten-form-container">
      <div class="form-group">
        <InputLink />
      </div>
      <ShortenButton />
    </form>
  );
}

export default InputShortenForm;