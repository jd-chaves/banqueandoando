import React, { Component } from 'react';
import { Form,  Input, Button } from 'antd';
import 'antd/dist/antd.css';
import { Rate } from 'antd';
const { TextArea } = Input;
const FormItem = Form.Item;
class NuevaReferencia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      puntos: 0,
      m: ""
    };
  }
  estrellas = (event) => {
    this.setState({puntos: event});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values.puntos = this.state.puntos;
        values.usuario = this.props.usuario;
        values.banco = this.props.banco;
        values.nombre = this.props.nombre;
        return fetch('http://localhost:8080/api/insertarReferencia', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values)
        }).then((response) => response.json())
        .then((responseJson) => {
          this.setState({m:responseJson.message});
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
      <Form onSubmit={this.handleSubmit} className=" in-form" style={{height: "200px", width: "80%",  margin: "0 auto"}}>
        <FormItem style={{  marginBottom: "5px" }}>
          {getFieldDecorator('texto', {
            rules: [{ required: true, message: 'Ingrese su comentario' }],
          })(
            <TextArea onPressEnter = {this.comentario}  rows={4} style={{width :"100%", resize: "none"}} />
          )}
        </FormItem>
        <Rate onChange = {this.estrellas} defaultValue = {this.state.estrellas}/>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button" style={{  marginBottom: "-5px" }}>
            Ingresar
          </Button>
          <div style ={{  color: "green" }}>{this.state.m}</div>
        </FormItem>
      </Form>

    );
  }
}
const WrappedNuevaReferencia = Form.create()(NuevaReferencia);

export default WrappedNuevaReferencia;
