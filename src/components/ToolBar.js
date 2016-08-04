import React, { Component } from 'react';

class ToolBar extends Component {

  getToolBarVersion(versionId) {
    switch (versionId) {
      case 1:
      return (
        <nav id='toolBar1'>
          <button id='addNewButton1'>Add New</button>

          <select id='bulkActionsSelect1'>
            <option value='Bulk Actions'>Bulk Actions</option>
          </select>

          <div id='toolBarSearch1'>
            <p>Count per page: <span>10 items</span></p>
            <input type='text' placeholder='Search'/>
          </div>

          <button id='expandToolBarButton1'></button>

          <button id='funnelButton1'></button>
        </nav>
      )
      break;
      case 2:
      return (
        <nav id='toolBar2'>
          <button id='addNewButton2'>Add New</button>

          <select id='bulkActionsSelect2'>
            <option value='Bulk Actions'>Bulk Actions</option>
          </select>

          <div id='toolBarSearch2'>
            <p>Count per page: <span>10 items</span></p>
            <input type='text' placeholder='Search'/>
          </div>

          <button id='expandToolBarButton2'></button>

          <button id='funnelButton2'></button>
        </nav>
      )
      break;
    }
  }

  render() {
    return (
      <span>
        {this.getToolBarVersion(this.props.version)}
      </span>
    )
  }
};

export default ToolBar;
