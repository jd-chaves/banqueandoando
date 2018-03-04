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
  mostrarReferencias = () =>{
    if(this.state.referencias.length!==0){
      console.log(this.state.referencias.length);
      return this.state.referencias.map(this.mostrarReferencia)
    }
    else return (
      <div>
        Todavía no hay referencias sobre este banco.
      </div>
    )
  }
  mostrarReferencia = (ref, i) =>{
    return (
      <div>
        <Comentario nombre = {ref.nombre} texto = {ref.texto} puntos = {ref.puntos} key = {i}/>
        <hr/>

      </div>

    )
  }
  render() {
    if(this.props.usuario)
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

                {this.mostrarReferencias()}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>


            </div>
          </div>
        </div>
      </div>
    );
    else
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

                <div className="container" style = {{width: "100%"}}>
                  Inicia sesión para ver los comentarios
                </div>
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
