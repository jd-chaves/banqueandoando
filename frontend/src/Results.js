import React from 'react';
import { Icon, Card, Rate } from 'antd';
const { Meta } = Card;

class Results extends React.Component {
  render(){
    return(
      <Card
      style={{ width: "20vw"}}
      cover={<img alt="logo banco" src={this.props.imgUrl} style={{ height: "22vh", padding:"5px"}} />}
      actions={[<Icon type="idcard" />, <Icon type="edit" />]}
      >
      <Meta
      title={this.props.bankName}
      description={[<Icon type="calculator" style={{ marginRight: "4px"}}/>, this.props.interes, <Rate disabled defaultValue={this.props.rate} style={{ float: "right", marginTop:"-5px", paddingRight:"-40px" }}/>]}
      />
      </Card>
    );
  }
}

export default Results;
