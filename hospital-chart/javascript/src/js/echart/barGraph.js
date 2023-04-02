import { barGraphOption } from "../option.js";
const chartDom = document.querySelector("#main5");
const myChart5 = echarts.init(chartDom);

fetch("./src/json/barChart.json")
    .then((res) => {
        return res.json();
    })
    .then((barGraphData) => {
        const sideOption = barGraphOption(false, barGraphData);
        myChart5.setOption(sideOption);

        const bar1 = sideOption.series[1].data;
        const line = sideOption.series[1].data;
        let a = 5;

        const chartTimerId = setInterval(() => {
            a += 5;
            const random = 10 + a;
            bar1.push(random);
            const isCenter = window.center.contains(myChart5?._dom);
            const newOption = barGraphOption(isCenter, { ...barGraphData, operation: bar1, operation: line });
            myChart5.setOption(newOption);

            if (bar1.length === 16) clearInterval(chartTimerId);
        }, 2000);
    });

export { myChart5 };
