import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import { barGraphOption } from './Option';
import data from '../json/barChart.json';
import Dnd from './dnd.jsx';
class Bar extends Dnd {
  state = {
    isCenter: false,
    data: data,
  };

  render() {
    const { onDragStart, onDragOver, onDragLeave, onDrop } = this.props;
    console.log(this.props);

    return (
      <div
        className='item-container'
        draggable='true'
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className='header'>
          이동현황
          <div draggable='true' id='main5'>
            <ReactEcharts option={barGraphOption(false, data)} />
          </div>
        </div>
      </div>
    );
  }
}

export default Bar;
