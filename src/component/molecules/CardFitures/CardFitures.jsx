import react from 'react';
import './styles.css';

import CardFiture from '../../atoms/Cards/CardFiture/CardFiture';

const CardFitures = () => {
  return (
    <div className="card-fitures-container">
      <span className="card-border" />      
      <CardFiture />
      <CardFiture />
      <CardFiture />
    </div>
  );
}

export default CardFitures;