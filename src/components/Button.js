import React, {Component} from 'react';
import { inputAction, outputAction } from '../actions/calculateActions';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0
    }
    this.addValue = this.addValue.bind(this);
    this.clear = this.clear.bind(this);
    this.calculate = this.calculate.bind(this);
  }
  addValue(value) {
    const { item } = this.props || "";
    let input = "";
    if(item) {
      input = item+value;
    } else {
      input = value;
    }
    // const
    // console.log(value, item, input);
    this.props.dispatch(inputAction(input));
  }
  clear(){
    this.props.dispatch(inputAction(""));
    this.props.dispatch(outputAction(0));
  }
  calculate() {
    const { item } = this.props || "";
    const result = eval(item);

    this.props.dispatch(outputAction(result));
  }
  render() {
      const { item } = this.props || "";
      return (
          <div style={{margin: "auto", width: "240px"}}>
              <div className="btn-group" role="group" aria-label="First group">
                <button className="btn btn-danger newButton w-150" onClick={() => this.clear()}>Clear</button>
                <button className="btn btn-info newButton" onClick={() => this.addValue("/")}>÷</button><br/>
              </div>
              <div className="btn-group" role="group" aria-label="First group">
                <button className="btn btn-light newButton" onClick={() => this.addValue("1")}>1</button>
                <button className="btn btn-light newButton" onClick={() => this.addValue("2")}>2</button>
                <button className="btn btn-light newButton" onClick={() => this.addValue("3")}>3</button>
                <button className="btn btn-info newButton" onClick={() => this.addValue("*")}>x</button>
              </div>
              <div className="btn-group" role="group" aria-label="First group">
                <button className="btn btn-light newButton" onClick={() => this.addValue("4")}>4</button>
                <button className="btn btn-light newButton" onClick={() => this.addValue("5")}>5</button>
                <button className="btn btn-light newButton" onClick={() => this.addValue("6")}>6</button>
                <button className="btn btn-info newButton" onClick={() => this.addValue("-")}>-</button>
              </div>
              <div className="btn-group" role="group" aria-label="First group">
                <div className="btn-group" role="group" aria-label="First group">
                  <button className="btn btn-light newButton" onClick={() => this.addValue("7")}>7</button>
                  <button className="btn btn-light newButton" onClick={() => this.addValue("8")}>8</button>
                  <button className="btn btn-light newButton" onClick={() => this.addValue("9")}>9</button> <br />
                  <button className="btn btn-light newButton" onClick={() => this.addValue(".")}>.</button>
                  <button className="btn btn-light newButton" onClick={() => this.addValue("0")}>0</button>
                  <button className="btn btn-info newButton" onClick={() => this.calculate()}>=</button>
                </div>
                <button className="btn btn-info newButton h-100px" style={{height: "100px !important"}} onClick={() => this.addValue("+")}>+</button>
              </div>
          </div>
      );
  }
}


export default Button;
