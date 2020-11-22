import React, {Component} from 'react';

class Display extends Component {
  render() {
      const { item, result } = this.props || 0;
      return (
          <div style={{margin: "auto"}}>
              <div className="row">
                <div className="col-md-12" style={{height: "100px", background: "white"}}>
                  <div className="col-md-12" style={{textAlign: "right", color: "#5bc0de", fontSize: "16px", fontWeight: "bold", paddingTop: "20px", paddingBottom: "20px"}}>
                    = {result}
                  </div>
                  <div className="col-md-12" style={{textAlign: "right", fontWeight: "bold",}}>
                    { item }
                  </div>
                </div>
              </div>
          </div>
      );
  }
}


export default Display;
