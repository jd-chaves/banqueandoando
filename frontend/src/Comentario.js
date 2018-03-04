import React, { Component } from 'react'
import { Rate } from 'antd';
class Comentario extends Component{

  render(){
    return(
      <div>
        <span style={{ height: "22vh", paddingRight:"10px"}}>
          <b>{this.props.nombre}</b>
        </span>
        <span>
          <Rate disabled defaultValue={this.props.puntos} />
        </span>
        <div>
          {this.props.texto}
        </div>
      </div>
    );
  }

}
export default Comentario;
