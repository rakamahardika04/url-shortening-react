import react from 'react';
import StatisticsHeadline from '../../atoms/Texts/Statistics/StatisticsHeadline/StatisticsHeadline';
import StatisticsSubHeadline from '../../atoms/Texts/Statistics/StatisticsSubHeadline/StatisticsSubHeadline';
import CardFitures from '../../molecules/CardFitures/CardFitures';
import InputShortenForm from '../../molecules/InputShortenForm/InputShortenForm';
import './styles.css';

const Statistics = () => {
  return (
    <div class="statistics-section">
      <div class="input-shorten-form-container">
            <InputShortenForm />
        </div>
      <div class="statistics container">

        {/* COLUMN LEFT */}
        <div class="statistics-column-left">
          <div class="statistics-text-container">
            <div class="statistics-headline-container">
              <StatisticsHeadline />
            </div>
            <div class="statistics-subheadline-container">
              <StatisticsSubHeadline />
            </div>  
          </div>
        </div>

        {/* COLUMN RIGHT */}
        <div class="statistics-column-right">
            <div class="card-fitures-box">
                <CardFitures />
            </div>
        </div>
        
      </div>
    </div>
  );
}

export default Statistics;