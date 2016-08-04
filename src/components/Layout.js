import React, { Component } from 'react';
import ToolBar from './ToolBar';
import Grid from './Grid';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toolbarVersion: 1
    }
  }

  handleToolBarSwitch() {
    switch (this.state.toolbarVersion) {
      case 1:
      this.setState({
        toolbarVersion: 2
      })
      break;
      case 2:
      this.setState({
        toolbarVersion: 1
      })
      break;
    }
  }

  render() {
    return (
      <div>
        <button id='toolBarSwitcher' onClick={this.handleToolBarSwitch.bind(this)}>
          Switch Tool Bar Version
        </button>

        {this.state.toolbarVersion === 1 ? <ToolBar version={1}/> : <ToolBar version={2}/>}
        <Grid />
      </div>
    )
  }
};

export default Layout;
