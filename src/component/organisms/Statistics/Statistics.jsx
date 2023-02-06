import react from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

import StatisticsHeadline from '../../atoms/Texts/Statistics/StatisticsHeadline/StatisticsHeadline';
import StatisticsSubHeadline from '../../atoms/Texts/Statistics/StatisticsSubHeadline/StatisticsSubHeadline';
import CardFitures from '../../molecules/CardFitures/CardFitures';
import InputShortenForm from '../../molecules/InputShortenForm/InputShortenForm';
import LinkFiture from '../../molecules/LinkFiture/LinkFiture';
import './styles.css';

class Statistics extends Component {

  render(){
    return (
      <div class="statistics-section">
        <div class="input-shorten-form-container">
              <InputShortenForm />
          </div>
        <div class="statistics container">
  
          {/* COLUMN LEFT */}
          <div class="statistics-column-left">
          {this.props.datas.map((item, index) => {
            console.log(item.result)
              return (
               <div className='link-fiture-container'>
                <LinkFiture 
                original_link={item.result.original_link} 
                share_link={item.result.share_link}/>
              </div>
              )
          })}
            
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
}

// const Statistics = (props) => {
//   console.log(this.props)
//   return (
//     <div class="statistics-section">
//       <div class="input-shorten-form-container">
//             <InputShortenForm />
//         </div>
//       <div class="statistics container">

//         {/* COLUMN LEFT */}
//         <div class="statistics-column-left">
//           <div class="statistics-text-container">
//             <div class="statistics-headline-container">
//               <StatisticsHeadline />
//             </div>
//             <div class="statistics-subheadline-container">
//               <StatisticsSubHeadline />
//             </div>  
//           </div>
//         </div>

//         {/* COLUMN RIGHT */}
//         <div class="statistics-column-right">
//             <div class="card-fitures-box">
//                 <CardFitures />
//             </div>
//         </div>
        
//       </div>
//     </div>
//   );
// }

const mapStateToProps = (state) => {
  return {
    url: state.url,
    datas: state.datas
  }
}

export default connect(mapStateToProps)(Statistics);