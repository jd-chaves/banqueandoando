import React from 'react';
import WrappedNormalLoginForm from './Login';


class Header extends React.Component {
  render() {
    return (
      <header id="nino-header" style={{height: '100vh'}}>
        <div id="nino-headerInner">
          <nav id="nino-navbar" className="navbar navbar-default" role="navigation">
            <div className="container">
              {/* Brand and toggle get grouped for better mobile display */}
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nino-navbar-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <a className="navbar-brand" href="homepage.html">Banqueando</a>
              </div>
              {/* Collect the nav links, forms, and other content for toggling */}
              <div className="nino-menuItem pull-right">
                <div className="collapse navbar-collapse pull-left" id="nino-navbar-collapse">
                  <ul className="nav navbar-nav">
                  </ul>
                </div>{/* /.navbar-collapse */}
              </div>
            </div>{/* /.container-fluid */}
          </nav>
          <section id="nino-slider" className="carousel slide container" data-ride="carousel" data-interval="false">
            {/* Indicators */}
            <ol className="carousel-indicators clearfix">
              <li data-target="#nino-slider" data-slide-to={0} className="active">
                <div className="inner">
                  <span className="number">01</span> Bienvenido
                </div>
              </li>
              <li data-target="#nino-slider" data-slide-to={1}>
                <div className="inner">
                  <span className="number">02</span> ¿Qué es esto?
                </div>
              </li>
              <li data-target="#nino-slider" data-slide-to={2}>
                <div className="inner">
                  <span className="number">03</span> Cuenta
                </div>
              </li>
              <li data-target="#nino-slider" data-slide-to={3}>
                <div className="inner">
                  <span className="number">04</span> Herramienta
                </div>
              </li>
            </ol>
            {/* Wrapper for slides */}
            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <h2 className="nino-sectionHeading" style={{fontSize: '7vw'}}>
                  <span className="nino-subHeading">Bienvenido a</span>
                  BANQUEANDO
                </h2>
                <a href="#" className="nino-btn">Empezar</a>
              </div>
              <div className="item">
                <h2 className="nino-sectionHeading" style={{fontSize: '2vw !important', lineHeight: '1.4 !important'}}>
                  <span className="nino-subHeading">¿Qué es Banqueando?</span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore <br /> et dolore magna aliqua. Ut enim ad minim veniam, <br /> quis nostrud exercitation ullamco laboris nisi.
                </h2>
                <a href="#" className="nino-btn">Empezar</a>
              </div>
              <div className="item">
                <h2 className="nino-sectionHeading">
                  <span className="nino-subHeading" style={{marginBottom: '-10px !important'}}>¡Ingresa!</span>
                </h2>
                <WrappedNormalLoginForm  />
              </div>
              <div className="item">
                <h2 className="nino-sectionHeading" style={{fontSize: '7vw'}}>
                  <span className="nino-subHeading">Herramienta</span>
                </h2>
              </div>

            </div>
          </section>
        </div>
      </header>
    );
  }
}
export default Header;
