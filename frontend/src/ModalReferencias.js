import React, { Component } from 'react';
import Comentario from './Comentario';

class ModalReferencias extends Component {
  constructor(props) {
    super(props);
    this.state = {
      referencias: []
    };
  }
componentDidMount ()
{
  fetch('http://localhost:8080/api/referencias/'+ this.props.banco)
  .then((response) => response.json())
  .then((responseJson) => {
    if(responseJson.success){
      this.setState({referencias:responseJson.referencias});
    }
    else{
      console.log(responseJson);
    }
  })
  .catch((error) => {
    console.error(error);
  });
}
mostrarReferencia = (ref, i) =>{
return (<Comentario nombre = {ref.nombre} texto = {ref.texto} puntos = {ref.puntos} key = {i}/>)
}
  render() {
    return (
      <div className="container">
        <div className="modal fade" id={this.props.id} role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">×</button>
                <h4 className="modal-title">{ this.props.banco}</h4>
              </div>
              <div className="modal-body">
                {this.state.referencias.map(this.mostrarReferencia)}
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

export default ModalReferencias;
