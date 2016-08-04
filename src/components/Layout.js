import React, { Component } from 'react';
import ToolBar from './ToolBar';
import Grid from './Grid';

class Layout extends Component {
  render() {
    return (
      <div>
        <ToolBar />
        <Grid />
      </div>
    )
  }
};

export default Layout;
