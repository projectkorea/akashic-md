import { bar2Option } from "../option.js";
const chartDom = document.querySelector("#main8");
const myChart2 = echarts.init(chartDom);

// fetch는 Promise 기반으로 구성 (.then .catch 사용 가능)
fetch("./src/json/blood.json")
    .then((res) => {
        return res.json();
    })
    .then((bar2Data) => {
        //자바스크립트 객체 형식으로 변환
        const sideOption = bar2Option(false, bar2Data);
        myChart2.setOption(sideOption);

        const bar1 = sideOption.series[1].data;
        const line = sideOption.series[2].data;

        const chartTimerId = setInterval(() => {
            const min = 100;
            const max = 250;
            const barRandom = Math.floor(Math.random() * (150 - 20) + 20);
            const lineRandom = Math.floor(Math.random() * (max - min) + min);

            bar1.push(barRandom);
            line.push(lineRandom);

            //새로운 객체 넣어줘야함 -> 최신화시켜주기위해
            //디스트럭처링해줘서 키에 맞는 값을 가져오는것이기 때문
            const isCenter = window.center.contains(myChart2?._dom); //주어진 인자가 true? false?
            const newOption = bar2Option(isCenter, { ...bar2Data, now: bar1, percent: line });
            myChart2.setOption(newOption);

            if (31 === bar1.length) clearInterval(chartTimerId);
        }, 1000);
    });

export { myChart2 };
