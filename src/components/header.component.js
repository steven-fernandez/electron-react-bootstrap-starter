import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron">
              <h1>{this.props.heading}</h1>
              <p>{this.props.desc}</p>
              <p><a className="btn btn-primary btn-lg" href="#" role="button">{this.props.btnTxt}</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
