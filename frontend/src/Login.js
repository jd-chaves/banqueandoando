import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mU: ''
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        fetch('http://localhost:8080/api/authenticate', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values)
        })
        .then((response) => response.json())
        .then((responseJson) => {
          if(!responseJson.success)
          this.setState({mU:responseJson.message});
          else
          this.setState({mU:''});
          return console.log(responseJson);;
        })
        .catch((error) => {
          console.error(error);
        });
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form" style={{"height": "200px", "width": "40%",  "margin": "0 auto"}}>

        <FormItem style={{  marginBottom: "5px" }}>
          {getFieldDecorator('usuario', {
            rules: [{ required: true, message: 'Ingresa tu nombre de usuario' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Usuario" />
          )}
        </FormItem>

        <FormItem style={{  marginBottom: "5px" }}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Ingresa tu contraseña' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Clave" />
          )}
        </FormItem>

        <FormItem>
          <span style ={{  color: "red" }}>{this.state.mU}</span>
          <div>
            <Button  type="primary" htmlType="submit" className="login-form-button" style={{  marginBottom: "-5px" }}>
              Ingresar
            </Button>
          </div>
          <br></br>
          <a href="">No tengo una cuenta</a>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default WrappedNormalLoginForm;
