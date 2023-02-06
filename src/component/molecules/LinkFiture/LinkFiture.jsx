import react, { useState, useEffect } from 'react';
import './styles.css';

import InputLink from '../../atoms/Input/InputLink/InputLink';
import ShortenButton from '../../atoms/Buttons/Shorten/ShortenButton';

const LinkFiture = (props) => {
  return (
    <div className='link-fiture-section'>
      <div className='link-fiture-column-left'>
          <h6 className='link-fiture-original-link'>{props.original_link}</h6>
      </div>
      <div className='link-fiture-column-right'>
          <h6 className='link-fiture-shorten-link'>{props.share_link}</h6>
          <button className='btn link-fiture-button'>Copy</button>
      </div>
    </div>
  );
}

export default LinkFiture;