import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";
import { skOption } from "./Option";
import data from "../json/sankeyData.json";
import "./dnd.jsx";

class SankeyGraph extends Component {
    state = {
        isCenter: false,
        data: data,
    };

    render() {
        console.log(this.state);
        return (
            <div className="item-container" draggable="true">
                <div className="header">
                    이동현황
                    <div draggable="true" className="item-container" id="main4">
                        <ReactEcharts option={skOption(true, data)} />
                    </div>
                </div>
            </div>
        );
    }
}

export default SankeyGraph;
