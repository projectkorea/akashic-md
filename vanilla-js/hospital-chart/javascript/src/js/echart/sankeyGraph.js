import { sankeyOption } from "../option.js";
const chartDom = document.querySelector("#main1");
const myChart1 = echarts.init(chartDom);

fetch("./src/json/sankeyData.json")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        const isCenter = window.center.contains(myChart1?._dom);
        const sideOption = sankeyOption(isCenter, data);
        myChart1.setOption(sideOption);
    });
export { myChart1 };
