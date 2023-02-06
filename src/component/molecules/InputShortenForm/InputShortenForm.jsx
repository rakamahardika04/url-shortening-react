import react, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './styles.css';

import InputLink from '../../atoms/Input/InputLink/InputLink';
import ShortenButton from '../../atoms/Buttons/Shorten/ShortenButton';
import { Component } from 'react';

class InputShortenForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    let url = event.target.getAttribute('data-arg1');

    axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`)
    .then((result) => {
      this.props.addDataToState(result.data)
      this.handleEmptyUrl()
    })
    
  }

  handleEmptyUrl = () => {
    this.props.emptyUrl();
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
    addDataToState: (newData) => dispatch({type: "ADD_DATA", newData: newData}),
    emptyUrl: () => dispatch({type: "EMPTY_URL", emptyUrl: ''})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputShortenForm);