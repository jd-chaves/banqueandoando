import React from 'react';
import { Icon, Card } from 'antd';
import ModalReferencias from './ModalReferencias';
import { Rate } from 'antd';
const { Meta } = Card;

class Results extends React.Component {
  idSin = this.props.bankName.replace(/\s+/g, '').split('.').join("");
  id = "#"+this.idSin;

  render(){
    return(
      <div>
        <Card
          style={{ width: "20vw" }}
          cover={<img alt="logo banco" src={this.props.imgUrl} style={{ height: "22vh", padding:"5px"}} />}
          actions={[<button type="button" className="btn btn-info " data-toggle="modal"  data-target={this.id}><span className="glyphicon glyphicon-plus"></span></button>, <button type="button" className="btn btn-info " data-toggle="modal" data-target={this.id}><span className="glyphicon glyphicon-pencil"></span></button>]}
          >

            <Meta
              title={this.props.bankName}
              description={[<Icon type="calculator" style={{ marginRight: "4px"}}/>, this.props.interes, <Rate disabled defaultValue={this.props.rate} style={{ float: "right", marginTop:"-5px", paddingRight:"-40px" }}/>]}            />
            </Card>
            <ModalReferencias banco ={this.props.bankName} id ={this.idSin} />
          </div>
        );
      }
    }

    export default Results;
