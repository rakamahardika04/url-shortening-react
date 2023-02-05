import react, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './styles.css';

import InputLink from '../../atoms/Input/InputLink/InputLink';
import ShortenButton from '../../atoms/Buttons/Shorten/ShortenButton';
import { Component } from 'react';

class InputShortenForm extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       data: {}
//     };
//  }

  
  handleSubmit = (event) => {
    let url = event.target.getAttribute('data-arg1');

    axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`)
    .then((result) => {
      console.log(this.props)
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} data-arg1={this.props.url} class="shorten-form-container container">
        <div class="form-group shorten-form-group">
          <InputLink />
        </div>
        <div class="shorten-btn-container">
          <ShortenButton />
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    url: state.url,
    datas: state.datas
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addDataToState: (event) => dispatch({type: "SET_URL", url: event.target.value})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputShortenForm);