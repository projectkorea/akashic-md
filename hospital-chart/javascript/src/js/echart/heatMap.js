import { heatOption } from "../option.js";
const chartDom = document.querySelector("#main3");
const myChart8 = echarts.init(chartDom);

fetch("./src/json/heatMap.json")
    .then((res) => {
        return res.json();
    })
    .then((heatData) => {
        const sideOption = heatOption(false, heatData);
        myChart8.setOption(sideOption);

        const data = sideOption.series[0].data;

        const chartTimerId = setInterval(() => {
            const x = Math.floor(data.length / 4);
            const value1 = Math.floor(Math.random() * (11 - 1) + 1);
            const value2 = Math.floor(Math.random() * (11 - 1) + 1);
            const value3 = Math.floor(Math.random() * (11 - 1) + 1);
            const value4 = Math.floor(Math.random() * (11 - 1) + 1);

            const random = [
                [x, 0, value1],
                [x, 1, value2],
                [x, 2, value3],
                [x, 3, value4],
            ];

            data.push(...random);

            const isCenter = window.center.contains(myChart8?._dom);
            const newOption = heatOption(isCenter, { ...heatData, comingPerson: data });
            myChart8.setOption(newOption);

            if (data.length === 124) clearInterval(chartTimerId);
        }, 1000);
    });

export { myChart8 };
