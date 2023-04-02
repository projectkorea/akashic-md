import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";
import { ctOption } from "./Option";
import data from "../json/ctChart.json";
import "./dnd.jsx";

class CtBart extends Component {
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
                    <div draggable="true" className="item-container" id="main2">
                        <ReactEcharts option={ctOption(false, data)} />
                    </div>
                </div>
            </div>
        );
    }
}

export default CtBart;
