import { comingOption } from "../option.js";
const chartDom = document.querySelector("#main7");
const myChart7 = echarts.init(chartDom);

fetch("./src/json/coming.json")
    .then((res) => {
        return res.json();
    })
    .then((comingData) => {
        const sideOption = comingOption(false, comingData);
        myChart7.setOption(sideOption);

        const effectScatter = sideOption.series[0].data;
        const coming = sideOption.series[1].data;

        const chartTimerId = setInterval(() => {
            const random = Math.floor(Math.random() * (1500 - 600) + 600);

            coming.push(random);

            const isCenter = window.center.contains(myChart7?._dom);
            const newOption = comingOption(isCenter, { ...comingData, coming: coming, coming: effectScatter });

            myChart7.setOption(newOption);

            if (16 === coming.length) clearInterval(chartTimerId);
        }, 2000);
    });

export { myChart7 };
