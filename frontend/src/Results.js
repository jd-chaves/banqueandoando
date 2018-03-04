import React from 'react';
import { Icon, Card } from 'antd';
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
      description={[<Icon type="calculator" />, this.props.interes]}
      />
      </Card>
    );
  }
}

export default Results;
