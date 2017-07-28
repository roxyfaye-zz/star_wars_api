import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class BaseLayout extends Component {
  render() {
    let headerStyle = {
      "textAlign": "center",
      "height": "30vw",
      "color": "#fff",
      "backgroundImage": "url(../images/header2.jpg)",
      "backgroundPosition": "center",
      "backgroundSize": "cover",
      "backgroundRepeat": "none",
      "boxShadow": "rgba(0, 0, 0, 0.22) -2px 9px 5px 0px"
    }
    return (
      <div className="container-fluid nav">
        <nav className="row navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li>
                <NavLink activeClassName="selected" className="nav-link" exact to="/">home</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="selected" className="nav-link" exact to="/people">characters</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="selected" className="nav-link" exact to="/starships">starships</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="selected" className="nav-link" exact to="/films">films</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-12 header" style={headerStyle}></div>
        </nav>
        {/*
          PASS IN CHILD COMPONENTS <<<<<<<<<<<<<<<<<<<
          */}
        <footer className="col-lg-11">
          <span>
            SWAPI EXPLORER
          </span>
        </footer>
      </div>
    );
  }
}
