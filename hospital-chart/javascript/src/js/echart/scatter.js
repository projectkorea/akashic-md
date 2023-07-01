import { scatterOption } from "../option.js";
const chartDom = document.querySelector("#main6");
const myChart6 = echarts.init(chartDom);

fetch("./src/json/scatter.json")
    .then((res) => {
        return res.json();
    })
    .then((scatterData) => {
        const sideOption = scatterOption(false, scatterData);
        myChart6.setOption(sideOption);

        const blue = sideOption.series[0].data;
        const green = sideOption.series[1].data;
        const yellow = sideOption.series[2].data;
        const red = sideOption.series[3].data;

        let today = new Date();
        const startHour = today.setHours(6, 0, 0);

        const chartTimerId = setInterval(() => {
            const min = 60;
            const max = 500;

            const x = blue.length * 900000 + startHour;
            const b = Math.floor(Math.random() * (max - min) + min);
            const g = Math.floor(Math.random() * (max - min) + min);
            const y = Math.floor(Math.random() * (max - min) + min);
            const r = Math.floor(Math.random() * (max - min) + min);

            blue.push([x, b]);
            green.push([x, g]);
            yellow.push([x, y]);
            red.push([x, r]);

            const isCenter = window.center.contains(myChart6?._dom);
            const newOption = scatterOption(isCenter, { ...scatterData, mainBuilding: blue, annex: green, cancerHospital: yellow, center: red });
            myChart6.setOption(newOption);

            if (62 === blue.length) clearInterval(chartTimerId);
        }, 500);
    });

export { myChart6 };
