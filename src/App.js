import React, { Component } from 'react';
import './Reset.css';
import './App.css';
import routes from './routes';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        { routes }
      </div>
    );
  }
}
 function mapStateToProps(state){
  return {
    state
  };
 }
export default connect( mapStateToProps ) ( App );
