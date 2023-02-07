import react from 'react';
import './styles.css';
import icon_brand_recognition from  '../../../../assets/icons/icon-brand-recognition.svg'

const CardFiture = (props) => {
  return (
    <div class="card-container">
      <div class="card-icon">
        <img src={props.card_image} alt={props.card_image_alt} />
      </div>
      <div class="card-text">
        <h4 class="card-headline">{props.card_headline}</h4>
        <h6 class="card-subheadline">{props.card_subheadline}</h6>
      </div>
    </div>
  );
}

export default CardFiture;