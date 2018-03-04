import React, {Component} from 'react';
import Encabezado from "./Encabezado"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      usuario: "",
      nombre: "",
      token: ""
    };
  }
  componentDidMount ()
  {
    let user = localStorage.getItem("banqInfo");
    if(user)
    {
      let json = JSON.parse(user)
      this.setState({usuario:json.usuario, nombre: json.nombre, token: json.token})
    }
  }
  setToken= (tok, user) =>{
    this.setState({
      usuario: user.usuario,
      nombre: user.nombre,
      token:tok
    });
    user.token = tok;
    localStorage.setItem("banqInfo",JSON.stringify(user));
    localStorage.setItem("token",tok);
  }

  log = () =>{
    if( this.state.token)
    return (<a className="navbar-right" id ="log" href="homepage.html " onClick={this.salir}>Salir</a>
  )
}
salir = () =>{
  this.setState({usuario: "", token: ""});
  localStorage.clear();
}
render() {
  return (
    <header id="nino-header" style={{height: '100vh'}}>
      <div id="nino-headerInner">

        <nav id="nino-navbar" className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" >Banqueando</a>
            </div>
            {this.log()}
          </div>
        </nav>
        <Encabezado setToken ={this.setToken} usuario = {this.state.usuario} nombre = {this.state.nombre}/>
      </div>
    </header>
  );
}
}
export default App;
