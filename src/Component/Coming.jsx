import { Component } from "react";
import ReactEcharts from "echarts-for-react";
import { comingOption } from "./Option.jsx";
import data from "../json/coming.json";
class Coming extends Component {
    render() {
        return (
            <div className="item-container" draggable="true">
                <div className="header">
                    이동현황
                    <div draggable="true" className="item-container" id="main6">
                        <ReactEcharts option={comingOption(false, data)} />
                    </div>
                </div>
            </div>
        );
    }
}
export default Coming;
