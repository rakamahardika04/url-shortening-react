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

  handleCopyFromLinkFiture = (linkCode) => {
    this.props.setLinkCode(linkCode)
    console.log(this.props.linkCode)
  }

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
              return (
               <div className='link-fiture-container'>
                {(() => {
                  if(this.props.linkCode == item.result.code){
                    return (
                      <LinkFiture
                        button_color={'black'}
                        text={'Copied!'}
                        handleCopyFromLinkFiture={this.handleCopyFromLinkFiture}
                        link_code={item.result.code} 
                        original_link={item.result.original_link} 
                        share_link={item.result.share_link}/>
                    )
                  } else {
                    console.log(`${this.props.linkCode} dan ${item.result.code}`)
                    return (
                      <LinkFiture
                        button_color={'cyan'}
                        text={'Copy'}
                        handleCopyFromLinkFiture={this.handleCopyFromLinkFiture}
                        link_code={item.result.code} 
                        original_link={item.result.original_link} 
                        share_link={item.result.share_link}/>
                    )
                  }
                  })()
                }
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

const mapStateToProps = (state) => {
  return {
    url: state.url,
    datas: state.datas,
    linkCode: state.linkCode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLinkCode: (linkCode) => dispatch({type: "SET_LINK_CODE", linkCode: linkCode})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);