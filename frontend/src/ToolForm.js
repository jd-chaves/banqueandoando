import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Select, Icon, Button, Card, InputNumber, Popover } from 'antd';
const { Meta } = Card;
const FormItem = Form.Item;
const Option = Select.Option;
const cont = (
  <div>
  <p>UVR: Unidades de valor real</p>
  <p>VIS: Vivienda de interés social</p>
  </div>
);

class ToolForm extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      tipo : "",  //Tipo Crédito
      pp : "",    //Periodo en el que se piensa pagar
      tipoCreditoViv: ""  //Tipo crédito vivienda
    };
  }

  showInfo = () =>{
    ReactDOM.render(<div style={{ height: '100vh', width: "90vw",  margin: "0 auto"}}>
    <br></br>
    <div className = "row">
    <div  className = "col-sm-3"><Results /></div>
    <div  className = "col-sm-3"><Results /></div>
    <div  className = "col-sm-3"><Results /></div>
    <div  className = "col-sm-3"><Results /></div>
    </div>
    <br></br>
    <div className = "row">
    <div  className = "col-sm-3"><Results /></div>
    <div  className = "col-sm-3"><Results /></div>
    <div  className = "col-sm-3"><Results /></div>
    <div  className = "col-sm-3"><Results /></div>
    </div>
    <br></br>
    <div className = "row">
    <div  className = "col-sm-3"><Results /></div>
    <div  className = "col-sm-3"><Results /></div>
    <div  className = "col-sm-3"><Results /></div>
    <div  className = "col-sm-3"><Results /></div>
    </div>
    <br></br>
    </div>, document.getElementById('resultadosBusqueda'));
    document.getElementById( 'resultadosBusqueda' ).scrollIntoView();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      values = {
        tipo : this.state.tipo,  //Tipo Crédito
        pp : this.state.pp, //Periodo en el que se piensa pagar
        tipoCreditoViv: this.state.tipoCreditoViv  //Tipo crédito vivienda
      }
      console.log('Received values of form: ', values);
    });
    this.showInfo();
  }

  handleCreditChange = (e) => {
    this.setState({tipo : e});
  }

  handleTempChange = (e) => {
    this.setState({pp : e});
    this.setState({tipoCreditoViv : ""});
  }

  handleVivChange = (e) => {
    this.setState({tipoCreditoViv : e});
    this.setState({pp : ""});
  }

  render(){
    return(
      <Form onSubmit={this.handleSubmit} style={{height: "200px", width: "35%",  margin: "0 auto"}}>
      <FormItem>

        <Select placeholder="Tipo de crédito" onChange={this.handleCreditChange} >
        <Option value="consumo">Crédito de consumo</Option>
        <Option value="ordinario">Crédito comercial ordinario</Option>
        <Option value="preferencial">Crédito comercial preferencial</Option>
        <Option value="tesoreria">Crédito comercial de tesoreria</Option>
        <Option value="vivienda">Crédito de vivienda</Option>
        <Option value="microcredito">Microcrédito</Option>
        </Select>

      </FormItem>
      {
        (this.state.tipo === "consumo" || this.state.tipo === "preferencial" || this.state.tipo === "microcredito") && (
          <FormItem>
            <Select placeholder="Temporalidad" onChange={this.handleTempChange} >
            <Option value="tipo1">Entre 31 y 365 días</Option>
            <Option value="tipo2">Entre 366 y 1095 días</Option>
            <Option value="tipo3">Entre 1096 y 1825 días</Option>
            <Option value="tipo4">A más de 1825 días</Option>
            </Select>

          <div>
          <InputNumber style={{ width: "27vw", marginTop: "5vh"}}
          defaultValue={20000000}
          formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value => value.replace(/\$\s?|(,*)/g, '')}
          />
          </div>
          </FormItem>)
        } {
          (this.state.tipo === "ordinario") && (
            <FormItem>
              <Select placeholder="Temporalidad" onChange={this.handleTempChange} >
              <Option value="tipo1">Entre 1 y 30 días</Option>
              <Option value="tipo2">Entre 31 y 365 días</Option>
              <Option value="tipo3">Entre 366 y 1095 días</Option>
              <Option value="tipo4">Entre 1096 y 1825 días</Option>
              <Option value="tipo5">A más de 1825 días</Option>
              </Select>

            <div>
            <InputNumber style={{ width: "27vw", marginTop: "5vh"}}
            defaultValue={20000000}
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')}
            />
            </div>
            </FormItem>)
          } {
            (this.state.tipo === "tesoreria") && (
              <FormItem>
                <Select placeholder="Temporalidad" onChange={this.handleTempChange} >
                <Option value="tipo1">Entre 1 y 5 días</Option>
                <Option value="tipo2">Entre 6 y 14 días</Option>
                <Option value="tipo3">Entre 15 y 30 días</Option>
                </Select>

              <div>
              <InputNumber style={{ width: "27vw", marginTop: "5vh"}}
              defaultValue={20000000}
              formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value.replace(/\$\s?|(,*)/g, '')}
              />
              </div>
              </FormItem>)
            } {
              (this.state.tipo === "vivienda") && (
                <FormItem>

                <Popover content={cont} trigger="hover" placement="bottomLeft" title="*">
                <Select placeholder="Modalidad*" onChange={this.handleVivChange}>
                <Option value="tipo1">Construir - UVR - VIS</Option>
                <Option value="tipo2">Construir - UVR - No VIS</Option>
                <Option value="tipo3">Construir - Pesos - VIS</Option>
                <Option value="tipo4">Construir - Pesos - No VIS</Option>
                <Option value="tipo5">Adquirir - UVR - VIS</Option>
                <Option value="tipo6">Adquirir - UVR - No VIS</Option>
                <Option value="tipo7">Adquirir - Pesos - VIS</Option>
                <Option value="tipo8">Adquirir - Pesos - No VIS</Option>
                </Select>
                </Popover>

                <div>
                <InputNumber style={{ width: "27vw", marginTop: "5vh"}}
                defaultValue={20000000}
                formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                />
                </div>
                </FormItem>)
              } {
                (this.state.tipo === "vivienda" && this.state.tipoCreditoViv !== "") && (
                  <FormItem>
                  <Button type="primary" htmlType="submit" className="login-form-button">
                  Calcular
                  </Button>
                  </FormItem>)
                } {
                  (this.state.tipo !== "vivienda" && this.state.pp !== "") && (
                    <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                    Calcular
                    </Button>
                    </FormItem>)
                  }
                  </Form>
                );
              }
            }

            class Results extends React.Component {
              render(){
                return(
                  <Card
                  style={{ width: "20vw" }}
                  cover={<img alt="logo banco" src="http://www.olivia-la.com/wp-content/uploads/2014/11/Banco-Falabella.png" />}
                  actions={[<Icon type="idcard" />, <Icon type="edit" />]}
                  >
                  <Meta
                  title="Card title"
                  description="This is the description"
                  />
                  </Card>
                );
              }
            }
            const WrappedNormalToolForm = Form.create()(ToolForm);
            export default WrappedNormalToolForm;
