import react from 'react';
import StatisticsHeadline from '../../atoms/Texts/Statistics/StatisticsHeadline/StatisticsHeadline';
import StatisticsSubHeadline from '../../atoms/Texts/Statistics/StatisticsSubHeadline/StatisticsSubHeadline';
import CardFitures from '../../molecules/CardFitures/CardFitures';
import './styles.css';

const Statistics = () => {
  return (
    <div class="statistics-section">
      <div class="statistics container">

        <div class="statistics-column-left">
          <StatisticsHeadline />
          <StatisticsSubHeadline />
        </div>

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