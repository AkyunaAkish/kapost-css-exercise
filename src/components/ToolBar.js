import React, { Component } from 'react';

class ToolBar extends Component {
  render() {
    return (
      <nav id='toolBar'>
        <button id='addNewButton'>Add New</button>

        <select id='bulkActionsSelect'>
          <option value='Bulk Actions'>Bulk Actions</option>
        </select>

        <div id='toolBarSearch'>
          <p>Count per page: <span>10 items</span></p>
          <input type='text' placeholder='Search'/>
        </div>

        <button id='expandToolBarButton'></button>

        <button id='funnelButton'></button>
      </nav>
    )
  }
};

export default ToolBar;
