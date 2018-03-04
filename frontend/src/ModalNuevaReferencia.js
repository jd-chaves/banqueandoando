import React, { Component } from 'react';
import WrappedNuevaReferencia from "./NuevaReferencia"
class ModalNuevaReferencia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comentario: "",
      estrellas: 0
    };
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

                <div className="container" style = {{width: "100%"}}>
                <WrappedNuevaReferencia usuario = {this.props.usuario} nombre = {this.props.nombre} banco = {this.props.banco}/>
                </div>
              <span>{this.state.mensaje}</span>
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
                Inicia sesión para ingresar un comentario
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

export default ModalNuevaReferencia;
