import react, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './styles.css';

class ShortenButton extends Component {


  render(){
      return (
        <button type="submit" class="btn btn-shorten">Shorten it</button>
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
    handleUrlChanged: (event) => dispatch({type: "SET_URL", url: event.target.value})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShortenButton);