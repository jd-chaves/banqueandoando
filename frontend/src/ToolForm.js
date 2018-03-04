import React from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import Results from './Results';
import { Form, Select, Button, InputNumber, Popover } from 'antd';
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
      tipoCreditoViv: "",
      bancos:[]
    };
  }

  showInfo = () =>{
    ReactDOM.render(
      <div className = "row" style={{ height: '100vh', width: "90vw",  margin: "0 auto"}}>
      <br></br>

      {(this.state.tipo === "consumo" && this.state.pp === "tipo1") &&
      this.state.bancos.map(
        (b) =>
        b.consumo.tipo1 !== -1 && (<div  key ={b._id} style={{ padding:"5px"}} className = "col-sm-3"><Results imgUrl={b.imagen} bankName={b.nombre} interes={b.consumo.tipo1} rate = {b.puntos}/></div>)
      )}

      {(this.state.tipo === "consumo" && this.state.pp === "tipo2") &&
      this.state.bancos.map(
        (b) =>
        b.consumo.tipo2 !== -1 && (<div  key ={b._id} style={{ padding:"5px"}} className = "col-sm-3"><Results imgUrl={b.imagen} bankName={b.nombre} interes={b.consumo.tipo2} rate = {b.puntos}/></div>)
      )}

      {(this.state.tipo === "consumo" && this.state.pp === "tipo3") &&
      this.state.bancos.map(
        (b) =>
        b.consumo.tipo3 !== -1 && (<div  key ={b._id} style={{ padding:"5px"}} className = "col-sm-3"><Results imgUrl={b.imagen} bankName={b.nombre} interes={b.consumo.tipo3} rate = {b.puntos} /></div>)
      )}

      {(this.state.tipo === "consumo" && this.state.pp === "tipo4") &&
      this.state.bancos.map(
        (b) =>
        b.consumo.tipo4 !== -1 && (<div  key ={b._id} style={{ padding:"5px"}} className = "col-sm-3"><Results imgUrl={b.imagen} bankName={b.nombre} interes={b.consumo.tipo4} rate = {b.puntos}/></div>)
      )}

      {(this.state.tipo === "preferencial" && this.state.pp === "tipo1") &&
      this.state.bancos.map(
        (b) =>
        (typeof b.preferencial !== 'undefined' && b.preferencial.tipo1 !== -1) && (<div  style={{ padding:"5px"}} key ={b._id} className = "col-sm-3"><Results imgUrl={b.imagen} bankName={b.nombre} interes={b.preferencial.tipo1} rate = {b.puntos}/></div>)
      )}

      {(this.state.tipo === "preferencial" && this.state.pp === "tipo2") &&
      this.state.bancos.map(
        (b) =>
        (typeof b.preferencial !== 'undefined' && b.preferencial.tipo2 !== -1) && (<div style={{ padding:"5px"}} key ={b._id} className = "col-sm-3"><Results imgUrl={b.imagen} bankName={b.nombre} interes={b.preferencial.tipo2} rate = {b.puntos}/></div>)
      )}

      {(this.state.tipo === "preferencial" && this.state.pp === "tipo3") &&
      this.state.bancos.map(
        (b) =>
        (typeof b.preferencial !== 'undefined' && b.preferencial.tipo3 !== -1) && (<div style={{ padding:"5px"}}  key ={b._id} className = "col-sm-3"><Results imgUrl={b.imagen} bankName={b.nombre} interes={b.preferencial.tipo3} rate = {b.puntos}/></div>)
      )}

      {(this.state.tipo === "preferencial" && this.state.pp === "tipo4") &&
      this.state.bancos.map(
        (b) =>
        (typeof b.preferencial !== 'undefined' && b.preferencial.tipo4 !== -1) && (<div style={{ padding:"5px"}}  key ={b._id} className = "col-sm-3"><Results imgUrl={b.imagen} bankName={b.nombre} interes={b.preferencial.tipo4} rate = {b.puntos}/></div>)
      )}

      {(this.state.tipo === "micro" && this.state.pp === "tipo1") &&
      this.state.bancos.map(
        (b) =>
        (typeof b.micro !== 'undefined' && b.micro.tipo1 !== -1) && (<div style={{ padding:"5px"}}  key ={b._id} className = "col-sm-3"><Results imgUrl={b.imagen} bankName={b.nombre} interes={b.micro.tipo1} rate = {b.puntos}/></div>)
      )}

      {(this.state.tipo === "micro" && this.state.pp === "tipo2") &&
      this.state.bancos.map(
        (b) =>
        (typeof b.micro !== 'undefined' && b.micro.tipo2 !== -1) && (<div style={{ padding:"5px"}}  key ={b._id} className = "col-sm-3"><Results imgUrl={b.imagen} bankName={b.nombre} interes={b.micro.tipo2} rate = {b.puntos}/></div>)
      )}

      {(this.state.tipo === "micro" && this.state.pp === "tipo3") &&
      this.state.bancos.map(
        (b) =>
        (typeof b.micro !== 'undefined' && b.micro.tipo3 !== -1) && (<div style={{ padding:"5px"}}  key ={b._id} className = "col-sm-3"><Results imgUrl={b.imagen} bankName={b.nombre} interes={b.micro.tipo3} rate = {b.puntos}/></div>)
      )}

      {(this.state.tipo === "micro" && this.state.pp === "tipo4") &&
      this.state.bancos.map(
        (b) =>
        (typeof b.micro !== 'undefined' && b.micro.tipo4 !== -1) && (<div style={{ padding:"5px"}}  key ={b._id} className = "col-sm-3"><Results imgUrl={b.imagen} bankName={b.nombre} interes={b.micro.tipo4} rate = {b.puntos}/></div>)
      )}

      {(this.state.tipo === "ordinario" && this.state.pp === "tipo1") &&
      this.state.bancos.map(
        (b) =>
        (typeof b.ordinario !== 'undefined' && b.ordinario.tipo1 !== -1) && (<div style={{ padding:"5px"}}  key ={b._id} className = "col-sm-3"><Results imgUrl={b.imagen} bankName={b.nombre} interes={b.ordinario.tipo1} rate = {b.puntos}/></div>)
      )}

      {(this.state.tipo === "ordinario" && this.state.pp === "tipo2") &&
      this.state.bancos.map(
        (b) =>
        (typeof b.ordinario !== 'undefined' && b.ordinario.tipo2 !== -1) && (<div style={{ padding:"5px"}}  key ={b._id} className = "col-sm-3"><Results imgUrl={b.imagen} bankName={b.nombre} interes={b.ordinario.tipo2} rate = {b.puntos}/></div>)
      )}

      {(this.state.tipo === "ordinario" && this.state.pp === "tipo3") &&
      this.state.bancos.map(
        (b) =>
        (typeof b.ordinario !== 'undefined' && b.ordinario.tipo3 !== -1) && (<div style={{ padding:"5px"}}  key ={b._id} className = "col-sm-3"><Results imgUrl={b.imagen} bankName={b.nombre} interes={b.ordinario.tipo3} rate = {b.puntos}/></div>)
      )}

      {(this.state.tipo === "ordinario" && this.state.pp === "tipo4") &&
      this.state.bancos.map(
        (b) =>
        (typeof b.ordinario !== 'undefined' && b.ordinario.tipo4 !== -1) && (<div style={{ padding:"5px"}}  key ={b._id} className = "col-sm-3"><Results imgUrl={b.imagen} bankName={b.nombre} interes={b.ordinario.tipo4} rate = {b.puntos}/></div>)
      )}

      {(this.state.tipo === "ordinario" && this.state.pp === "tipo5") &&
      this.state.bancos.map(
        (b) =>
        (typeof b.ordinario !== 'undefined' && b.ordinario.tipo5 !== -1) && (<div style={{ padding:"5px"}}  key ={b._id} className = "col-sm-3"><Results imgUrl={b.imagen} bankName={b.nombre} interes={b.ordinario.tipo5} rate = {b.puntos}/></div>)
      )}

      {(this.state.tipo === "tesoreria" && this.state.pp === "tipo1") &&
      this.state.bancos.map(
        (b) =>
        (typeof b.tesoreria !== 'undefined' && b.tesoreria.tipo1 !== -1) && (<div style={{ padding:"5px"}}  key ={b._id} className = "col-sm-3"><Results imgUrl={b.imagen} bankName={b.nombre} interes={b.tesoreria.tipo1} rate = {b.puntos}/></div>)
      )}

      {(this.state.tipo === "tesoreria" && this.state.pp === "tipo2") &&
      this.state.bancos.map(
        (b) =>
        (typeof b.tesoreria !== 'undefined' && b.tesoreria.tipo2 !== -1) && (<div style={{ padding:"5px"}}  key ={b._id} className = "col-sm-3"><Results imgUrl={b.imagen} bankName={b.nombre} interes={b.tesoreria.tipo2} rate = {b.puntos}/></div>)
      )}

      {(this.state.tipo === "tesoreria" && this.state.pp === "tipo3") &&
      this.state.bancos.map(
        (b) =>
        (typeof b.tesoreria !== 'undefined' && b.tesoreria.tipo3 !== -1) && (<div style={{ padding:"5px"}}  key ={b._id} className = "col-sm-3"><Results imgUrl={b.imagen} bankName={b.nombre} interes={b.tesoreria.tipo3} rate = {b.puntos}/></div>)
      )}

      {(this.state.tipo === "vivienda" && this.state.tipoCreditoViv === "tipo1") &&
      this.state.bancos.map(
        (b) =>
        (typeof b.vivienda !== 'undefined' && b.vivienda.tipo1 !== -1) && (<div style={{ padding:"5px"}}  key ={b._id} className = "col-sm-3"><Results imgUrl={b.imagen} bankName={b.nombre} interes={b.vivienda.tipo1} rate = {b.puntos}/></div>)
      )}

      {(this.state.tipo === "vivienda" && this.state.tipoCreditoViv === "tipo2") &&
      this.state.bancos.map(
        (b) =>
        (typeof b.vivienda !== 'undefined' && b.vivienda.tipo2 !== -1) && (<div style={{ padding:"5px"}}  key ={b._id} className = "col-sm-3"><Results imgUrl={b.imagen} bankName={b.nombre} interes={b.vivienda.tipo2} rate = {b.puntos}/></div>)
      )}

      {(this.state.tipo === "vivienda" && this.state.tipoCreditoViv === "tipo3") &&
      this.state.bancos.map(
        (b) =>
        (typeof b.vivienda !== 'undefined' && b.vivienda.tipo3 !== -1) && (<div style={{ padding:"5px"}}  key ={b._id} className = "col-sm-3"><Results imgUrl={b.imagen} bankName={b.nombre} interes={b.vivienda.tipo3} rate = {b.puntos}/></div>)
      )}

      {(this.state.tipo === "vivienda" && this.state.tipoCreditoViv === "tipo4") &&
      this.state.bancos.map(
        (b) =>
        (typeof b.vivienda !== 'undefined' && b.vivienda.tipo4 !== -1) && (<div style={{ padding:"5px"}}  key ={b._id} className = "col-sm-3"><Results imgUrl={b.imagen} bankName={b.nombre} interes={b.vivienda.tipo4} rate = {b.puntos}/></div>)
      )}

      {(this.state.tipo === "vivienda" && this.state.tipoCreditoViv === "tipo5") &&
      this.state.bancos.map(
        (b) =>
        (typeof b.vivienda !== 'undefined' && b.vivienda.tipo5 !== -1) && (<div style={{ padding:"5px"}}  key ={b._id} className = "col-sm-3"><Results imgUrl={b.imagen} bankName={b.nombre} interes={b.vivienda.tipo5} rate = {b.puntos}/></div>)
      )}

      {(this.state.tipo === "vivienda" && this.state.tipoCreditoViv === "tipo6") &&
      this.state.bancos.map(
        (b) =>
        (typeof b.vivienda !== 'undefined' && b.vivienda.tipo6 !== -1) && (<div style={{ padding:"5px"}}  key ={b._id} className = "col-sm-3"><Results imgUrl={b.imagen} bankName={b.nombre} interes={b.vivienda.tipo6} rate = {b.puntos}/></div>)
      )}

      {(this.state.tipo === "vivienda" && this.state.tipoCreditoViv === "tipo7") &&
      this.state.bancos.map(
        (b) =>
        (typeof b.vivienda !== 'undefined' && b.vivienda.tipo7 !== -1) && (<div style={{ padding:"5px"}}  key ={b._id} className = "col-sm-3"><Results imgUrl={b.imagen} bankName={b.nombre} interes={b.vivienda.tipo7} rate = {b.puntos}/></div>)
      )}

      {(this.state.tipo === "vivienda" && this.state.tipoCreditoViv === "tipo8") &&
      this.state.bancos.map(
        (b) =>
        (typeof b.vivienda !== 'undefined' && b.vivienda.tipo8 !== -1) && (<div style={{ padding:"5px"}}  key ={b._id} className = "col-sm-3"><Results imgUrl={b.imagen} bankName={b.nombre} interes={b.vivienda.tipo8} rate = {b.puntos}/></div>)
      )}
      <br></br>
      <br></br>
      <br></br>
      </div>, document.getElementById('resultadosBusqueda'),
      function(){
        $(document).ready(function(){
          $('html, body').animate({
          scrollTop: $("#resultadosBusqueda").offset().top
      }, 1000);
      })
      }
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if(!err){
        values = {
          tipo : this.state.tipo,  //Tipo Crédito
          pp : this.state.pp, //Periodo en el que se piensa pagar
          tipoCreditoViv: this.state.tipoCreditoViv,  //Tipo crédito vivienda
          monto: parseInt(values.monto, 0) //Monto crédito
        }
        fetch('http://localhost:8080/api/bancos')
        .then((response) => {
          if(response.status !== 200){
            console.log("Error sacando los datos");
          }
          return response.json();
        })
        .then((json) =>{
          console.log(this.state.pp);
          console.log(this.state.tipo);
          this.setState({bancos:json});
          this.showInfo();
        })
      }
    });
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
    const { getFieldDecorator } = this.props.form;
    return(
      <Form onSubmit={this.handleSubmit} style={{height: "200px", width: "35%",  margin: "0 auto"}}>
      <FormItem>
      <Select placeholder="Tipo de crédito" onChange={this.handleCreditChange} >
      <Option value="consumo">Crédito de consumo</Option>
      <Option value="vivienda">Crédito vivienda</Option>
      <Option value="preferencial">Crédito comercial preferencial</Option>
      <Option value="tesoreria">Crédito comercial de tesoreria</Option>
      <Option value="ordinario">Crédito comercial ordinario</Option>
      <Option value="micro">Microcrédito</Option>
      </Select>
      </FormItem>
      {
        (this.state.tipo === "consumo" || this.state.tipo === "preferencial" || this.state.tipo === "micro") && (
          <FormItem>
          <Select placeholder="Temporalidad" onChange={this.handleTempChange} >
          <Option value="tipo1">Entre 31 y 365 días</Option>
          <Option value="tipo2">Entre 366 y 1095 días</Option>
          <Option value="tipo3">Entre 1096 y 1825 días</Option>
          <Option value="tipo4">A más de 1825 días</Option>
          </Select>
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
            </FormItem>)
          } {
            (this.state.tipo === "tesoreria") && (
              <FormItem>
              <Select placeholder="Temporalidad" onChange={this.handleTempChange} >
              <Option value="tipo1">Entre 1 y 5 días</Option>
              <Option value="tipo2">Entre 6 y 14 días</Option>
              <Option value="tipo3">Entre 15 y 30 días</Option>
              </Select>
              </FormItem>)
            }{
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

                    {getFieldDecorator('monto', {
                      rules: [{ required: true, message: 'Ingrese un monto' }],
                    })(
                      <InputNumber style={{ width: "200px"}}
                      formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      parser={value => value.replace(/\$\s?|(,*)/g, '')}
                      />
                    )}
                    <br></br>
                    <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginTop: "3vh"}}>
                    Calcular
                    </Button>
                    </FormItem>)
                  }
                  </Form>
                );
              }
            }

            const WrappedNormalToolForm = Form.create()(ToolForm);
            export default WrappedNormalToolForm;
