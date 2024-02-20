import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";
import { scatterOption } from "./Option";
import data from "../json/scatter.json";
import "./dnd.jsx";

class Scatter extends Component {
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
                    <div draggable="true" className="item-container" id="main7">
                        <ReactEcharts option={scatterOption(false, data)} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Scatter;
