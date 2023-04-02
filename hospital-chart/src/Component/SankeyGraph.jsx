import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";
import { sankeyOption } from "./Option";
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
                    <div draggable="true" id="main1">
                        <ReactEcharts option={sankeyOption(false, data)} />
                    </div>
                </div>
            </div>
        );
    }
}

export default SankeyGraph;
