import React from 'react';
import 'antd/dist/antd.css';
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: true,
      mU: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if(this.state.account)
        this.doSignIn(values)
        else
        this.doSignUp(values);
      }
    });
  }

  doSignIn = (data) => {
    fetch('https://banqueando.herokuapp.com/api/authenticate', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then((response) => response.json())
    .then((responseJson) => {
      if(!responseJson.success)
      this.setState({mU:responseJson.message});
      else
      {
        fetch('https://banqueando.herokuapp.com/api/me', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        }).then((response2) => response2.json())
        .then((responseJson2) => {
          if(responseJson2.success){
            this.setState({mU:''});
            this.props.setToken(responseJson.token, responseJson2.usuario);
          }
          else {
            console.log(responseJson2);
          }
        })
        .catch((error) => {
          console.error(error);
        });

      }
    })
    .catch((error) => {
      console.error(error);
    });
  }
  doSignUp = (data) => {
    return fetch('https://banqueando.herokuapp.com/api/usuario', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then((response) => response.json())
    .then((responseJson) => {
      if(!responseJson.success)
      this.setState({mU:responseJson.message});
      else
      {
        this.setState({mU:''});
        this.doSignIn(data);
      }
    })
    .catch((error) => {
      console.error(error);
    });



  }
  rerender = () =>{
    if(this.state.account){
      this.setState({account:false});
    } else{
      this.setState({account:true});
    }
  }

  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Claves inconsistentes!');
    } else {
      callback();
    }
  }

  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  render() {
    if(!this.props.usuario)
    if(this.state.account){
      const { getFieldDecorator } = this.props.form;
      return (
        <Form onSubmit={this.handleSubmit} className=" in-form" style={{height: "200px", width: "30%",  margin: "0 auto"}}>
          <FormItem style={{  marginBottom: "5px" }}>
            {getFieldDecorator('usuario', {
              rules: [{ required: true, message: 'Ingrese su nombre de usuario' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Nombre de usuario" />
            )}
          </FormItem>

          <FormItem style={{  marginBottom: "5px" }}>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Ingrese su clave!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Clave" />
            )}
          </FormItem>
          <FormItem>
            <div style ={{  color: "red" }}>{this.state.mU}</div>

            <Button type="primary" htmlType="submit" className="login-form-button" style={{  marginBottom: "-5px" }}>
              Ingresar
            </Button>
            <br></br>
            <a onClick={this.rerender}>No tengo una cuenta</a>
          </FormItem>
        </Form>
      );
    } else {
      const { getFieldDecorator } = this.props.form;
      return (
        <Form onSubmit={this.handleSubmit} style={{height: "200px", width: "30%",  margin: "0 auto"}}>
          <FormItem style={{  marginBottom: "5px" }}>
            {getFieldDecorator('usuario', {
              rules: [ {
                required: true, message: 'Ingrese su nombre de usuario',
              }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Nombre de usuario" />
            )}
          </FormItem>

          <FormItem style={{  marginBottom: "5px" }}>
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: 'Ingrese su clave!',
              }, {
                validator: this.checkConfirm,
              }],
            })(
              <Input  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password"  placeholder="Clave"/>
            )}
          </FormItem>

          <FormItem style={{  marginBottom: "5px" }}>
            {getFieldDecorator('confirm', {
              rules: [{
                required: true, message: 'Confirme su clave!',
              }, {
                validator: this.checkPassword,
              }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" onBlur={this.handleConfirmBlur} placeholder="Clave"/>
            )}

          </FormItem>
          <FormItem style={{  marginBottom: "5px" }}>
            {getFieldDecorator('nombre', {
              rules: [{ required: true, message: 'Ingrese su nombre!', whitespace: true }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} type="text" placeholder="Nombre" />
            )}
          </FormItem>

          <FormItem style={{  marginBottom: "5px" }}>
            <div style ={{  color: "red" }}>{this.state.mU}</div>
            <Button type="primary" htmlType="submit">Registrarme</Button>
            <br></br>
            <a onClick={this.rerender}>Tengo una cuenta</a>
          </FormItem>
        </Form>
      );
    }
    else return(
      <div> Bienvenido {this.props.nombre}</div>
    )
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default WrappedNormalLoginForm;
