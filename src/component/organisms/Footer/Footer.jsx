import './styles.css';
import react from 'react';
import WhiteLogoButton from '../../atoms/Buttons/WhiteLogo/WhiteLogoButton';
import SocialMediaMenus from '../../atoms/Menus/SocialMedia/SocialMediaMenus';

const Footer = () => {
    return (
      <div className="footer-section">
        <div className="footer container">

            {/* COLUMN LEFT */}
            <div className="footer-column-left">
                <div className='white-logo-button-container'>
                    <WhiteLogoButton />
                </div>
            </div>

            {/* COLUMN RIGHT */}
            <div className='footer-column-right'>

                {/* FEATURES LIST */}
                <ul className='footer-list'>
                    <li className='footer-headline'>Features</li>
                    <li className='footer-item'>
                        <a className='footer-link' href="">Link Shortening</a>
                    </li>
                    <li className='footer-item'>
                        <a className='footer-link' href="">Branded Links</a>
                    </li>
                    <li className='footer-item'>
                        <a className='footer-link' href="">Analytics</a>
                    </li>
                </ul>

                {/* RESOURCES LIST */}
                <ul className='footer-list'>
                    <li className='footer-headline'>Resources</li>
                    <li className='footer-item'>
                        <a className='footer-link' href="">Blog</a>
                    </li>
                    <li className='footer-item'>
                        <a className='footer-link' href="">Developers</a>
                    </li>
                    <li className='footer-item'>
                        <a className='footer-link' href="">Support</a>
                    </li>
                    
                </ul>

                {/* COMPANY LIST */}
                <ul className='footer-list'>
                    <li className='footer-headline'>Companies</li>
                    <li className='footer-item'>
                        <a className='footer-link' href="">About</a>
                    </li>
                    <li className='footer-item'>
                        <a className='footer-link' href="">Our Team</a>
                    </li>
                    <li className='footer-item'>
                        <a className='footer-link' href="">Careers</a>
                    </li>
                    <li className='footer-item'>
                        <a className='footer-link' href="">Contact</a>
                    </li>
                </ul>

                {/* SOCIAL MEDIA LIST */}
                <div className='social-media-list'>
                    <SocialMediaMenus />
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Footer;