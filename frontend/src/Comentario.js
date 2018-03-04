import React, { Component } from 'react'
import { Rate } from 'antd';
class Comentario extends Component{
  construtor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <span>
          {this.props.usuario}
        </span>
        <span>
          <Rate disabled defaultValue={this.props.puntos}} />
        </span>
        <div>
          Puntuación
        </div>
      </div>
    );
  }

}
