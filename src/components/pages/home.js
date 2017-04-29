import React, { Component } from 'react';

import Header from '../header.component';
import Blog from "../blog.component";
import Footer from '../footer.component';

class Layout extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Header heading={'Header Component'} desc={'This is the Header Description'} btnTxt={'More Info'} />
          <h1>Title Here</h1>
          <Blog />
          <Footer text={'Electron Starter 2017'} />
        </div>

      </div>
    );
  }
}

export default Layout;

