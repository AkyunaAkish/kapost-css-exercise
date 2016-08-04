import React, { Component } from 'react';

class Grid extends Component {

  renderGrid(rows) {
    let rowArr = [];
    for (let i = 0; i <= rows; i++) {
      rowArr.push(
        <div key={i} className='gridRow'>
          <div className='gridRowColumn'></div>
          <div className='gridRowColumn'></div>
          <div className='gridRowColumn'></div>
          <div className='gridRowColumn'></div>
          <div className='gridRowColumn'></div>
        </div>
      )
    }
    return rowArr;
  }

  render() {
    return (
      <div className='gridTable'>
        {this.renderGrid(19)}
      </div>
    )
  }
};

export default Grid;
