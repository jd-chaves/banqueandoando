import React from 'react';
import { Icon, Card } from 'antd';
import ModalReferencias from './ModalReferencias';
import ModalNuevaReferencia from './ModalNuevaReferencia';

import { Rate } from 'antd';
const { Meta } = Card;

class Results extends React.Component {
  idSin = this.props.bankName.replace(/\s+/g, '').split('.').join("");
  id = "#"+this.idSin;
  idSinr = this.props.bankName.replace(/\s+/g, '').split('.').join("")+"r";
  idr = "#"+this.idSinr;
  render(){
    return(
      <div>
        <Card
          style={{ width: "20vw" }}
          cover={<img alt="logo banco" src={this.props.imgUrl} style={{ height: "22vh", padding:"5px"}} />}
          actions={[<button type="button" className="btn btn-info " data-toggle="modal"  data-target={this.id}><Icon type="bars" /></button>, <button type="button" className="btn btn-info " data-toggle="modal" data-target={this.idr}><Icon type="edit" /></button>]}
          >

            <Meta
              title={this.props.bankName}
              description={[<Icon type="calculator" style={{ marginRight: "4px"}}/>, this.props.interes, <Rate disabled defaultValue={this.props.rate} style={{ float: "right", marginTop:"-5px", paddingRight:"-40px"}}/>]}            />
            </Card>
            <ModalReferencias banco ={this.props.bankName} id ={this.idSin} usuario = {this.props.usuario} nombre = {this.props.nombre} />
            <ModalNuevaReferencia banco ={this.props.bankName} id ={this.idSinr} usuario = {this.props.usuario} nombre = {this.props.nombre} />

          </div>
        );
      }
    }

    export default Results;
