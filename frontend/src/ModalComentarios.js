import React, { Component } from 'react';

import './App.css';

class ModalComentarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      referencias: []
    };
  }
componentDidMount ()
{
  fetch('http://localhost:8080/api/referencias'+ this.props.banco)
  .then((response) => response.json())
  .then((responseJson) => {
    if(responseJson.success){
      this.setState({referencias:responseJson.referencias});
    }
    else{
      console.log(response.Json);
    }
  })
  .catch((error) => {
    console.error(error);
  });
}
  render() {
    return (
      <div className="container">
        <h2>Modal Example</h2>
        <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">×</button>
                <h4 className="modal-title">Modal Header</h4>
              </div>
              <div className="modal-body">
                <p>Some text in the modal.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalComentarios;
