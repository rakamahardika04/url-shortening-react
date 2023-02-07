import react from 'react';
import './styles.css';

import icon_brand_recognition from  '../../../assets/icons/icon-brand-recognition.svg';
import icon_detailed_records from  '../../../assets/icons/icon-detailed-records.svg';
import icon_fully_customizable from  '../../../assets/icons/icon-fully-customizable.svg';

import CardFiture from '../../atoms/Cards/CardFiture/CardFiture';

const CardFitures = () => {
  return (
    <div className="card-fitures-container">
      <span className="card-border" />      
      <CardFiture 
        card_image={icon_brand_recognition}
        card_image_alt={'brand-recognition'}
        card_headline={'Brand Recognition'}
        card_subheadline={'Boost your brand recognition with each click. Generic links dont mean a thing. Branded links help instill confidence in your content.'}
      />

      <CardFiture 
        card_image={icon_detailed_records}
        card_image_alt={'detailed-records'}
        card_headline={'Detailed Records'}
        card_subheadline={'Gain insight into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'}
      />

      <CardFiture 
        card_image={icon_fully_customizable}
        card_image_alt={'fully-customizable'}
        card_headline={'Fully Customizable'}
        card_subheadline={'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'}
      />
    </div>
  );
}

export default CardFitures;