import React, { Component } from 'react';
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCoffee,
  faUserPlus,
  faSearch,
  faUserCog,
  faUsersCog
} from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
// import Parse from "parse";

import Button from '../components/Button';
import Display from '../components/Display';
import './App.css';

library.add(
  faCoffee,
  faUserPlus,
  faCheckCircle,
  faSearch,
  faUserCog,
  faUsersCog
)
function mapStateToProps(store) {
  return {
    input: store.input,
    output: store.output
  }
}

class App extends Component {
  render() {
    const {
      dispatch,
      input,
      output
    } = this.props;
    const { item } = input || "";
    const { result } = output || 0;
    return (
      <div className="container" style={{paddingTop: "100px"}}>
        <div className="col-md-3 col-md-offset-5" style={{background: "white", padding: "20px"}}>
          <Display
            item={item}
            result={result}
          />
          <Button
            dispatch={dispatch}
            item={item}
          />
        </div>
      </div>
    );
  }
}


export default connect(mapStateToProps)(App);
