import { ctOption } from "../option.js";
const chartDom = document.querySelector("#main2");
const myChart3 = echarts.init(chartDom);
fetch("./src/json/ctChart.json")
    .then((res) => {
        return res.json();
    })
    .then((ctData) => {
        const sideOption = ctOption(false, ctData);
        myChart3.setOption(sideOption);

        const bar1 = sideOption.series[1].data;
        const bar2 = sideOption.series[2].data;
        const bar3 = sideOption.series[3].data;
        const line = sideOption.series[4].data;

        const chartTimerId = setInterval(() => {
            const min = 100;
            const max = 250;
            const barRandom = Math.floor(Math.random() * (max - min) + min);
            const lineRandom = Math.floor(Math.random() * (850 - 500) + 500);

            bar1.push(barRandom);
            bar2.push(barRandom);
            bar3.push(barRandom);
            line.push(lineRandom);

            //새로운 객체 넣어줘야함 -> 최신화시켜주기위해
            // 1:bar1  -> 알맞은 이름으로 바꿔줘야함
            //디스트럭처링해줘서 키에 맞는 값을 가져오는것이기 때문

            const isCenter = window.center.contains(myChart3?._dom); // id
            const newOption = ctOption(isCenter, { ...ctData, reExamination: bar1, newTestament: bar2, hospitalRoom: bar3, goal: line });
            myChart3.setOption(newOption);

            if (bar1.length === 31) clearInterval(chartTimerId);
        }, 1000);
    });

export { myChart3 };
