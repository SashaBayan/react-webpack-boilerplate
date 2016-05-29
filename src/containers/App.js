import React from 'react';
import { connect } from 'react-redux';
import Hello from '../components/Hello/Hello';

const App = ({ children }) => (
  <div>
    <Hello />
  </div>
);

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps)(App);
