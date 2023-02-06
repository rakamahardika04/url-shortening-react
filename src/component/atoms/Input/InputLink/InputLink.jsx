import react from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';

class InputLink extends Component {

  render(){
    return (
      <input onInput={this.props.handleUrlChanged} value={this.props.url} type="text" class="form-control input-link" id="inputLink" placeholder="Shorten a link here..." />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    url: state.url
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleUrlChanged: (event) => dispatch({type: "SET_URL", url: event.target.value})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputLink);