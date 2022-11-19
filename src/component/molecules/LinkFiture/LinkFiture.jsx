import react, { useState, useEffect } from 'react';
import './styles.css';

import InputLink from '../../atoms/Input/InputLink/InputLink';
import ShortenButton from '../../atoms/Buttons/Shorten/ShortenButton';

const LinkFiture = () => {
  return (
    <div className='link-fiture-section'>
      <div className='link-fiture-column-left'>
          <h6 className='link-fiture-original-link'>http://example.org/very/long/link.htmlhttp://example.org/very/long/link.html</h6>
      </div>
      <div className='link-fiture-column-right'>
          <h6 className='link-fiture-shorten-link'>shrtco.de/KCveN</h6>
          <button className='btn link-fiture-button'>Copy</button>
      </div>
    </div>
  );
}

export default LinkFiture;