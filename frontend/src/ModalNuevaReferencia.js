import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import { Rate } from 'antd';
const { TextArea } = Input;
const FormItem = Form.Item;

class ModalNuevaReferencia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      referencias: []
    };
  }

  render() {
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
                  <Form onSubmit={this.handleSubmit} className=" in-form" style={{height: "200px", width: "80%",  margin: "0 auto"}}>
                    <textarea rows={4} style={{width :"100%", resize: "none"}} />

                    <FormItem style={{  marginBottom: "5px" }}>
                      <Rate />
                    </FormItem>
                    <FormItem>
                      <div style ={{  color: "red" }}>{this.state.mU}</div>
                      <Button type="primary" htmlType="submit" className="login-form-button" style={{  marginBottom: "-5px" }}>
                        Ingresar
                      </Button>
                      <br></br>
                    </FormItem>
                  </Form>
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
