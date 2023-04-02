import { skOption } from "../option.js";
const chartDom = document.querySelector("#main4");
const myChart4 = echarts.init(chartDom);

fetch("./src/json/sankeyData.json")
    .then((res) => {
        return res.json();
    })
    .then((skData) => {
        const mainOption = skOption(true, skData);
        myChart4.setOption(mainOption);

        const data = mainOption.series.data;

        let count = 0; //interval count
        const chartTimerId = setInterval(() => {
            const ArrayName = data.map((event) => event.name);

            const name = Math.floor(Math.random() * ArrayName.length);
            const clickNodeName = ArrayName[name];

            const _skData = skData;
            const chartOption = myChart4.getOption();

            const newArray = [];
            const allVisit = new Set(); //삽입 순서대로 요소를 순회
            let newLink = chartOption.series[0].links; //links 값

            const orderFunc = (directional) => {
                while (newArray.length > 0) {
                    const node = newArray.pop(); //배열의 마지막 요소를 제거하고 제거한 요소를 반환
                    const { nodeName, next } = node;

                    allVisit.add(nodeName);

                    const tempLink = newLink.map((value) => {
                        if (value[directional] === nodeName) {
                            if (!allVisit.has(value[next])) {
                                //중복 값 판별을 위해서,
                                newArray.push({ nodeName: value[next], next: next });
                            }
                            return { ...value, lineStyle: { color: skData.nodes.itemStyle, opacity: 1 } };
                        }
                        return value;
                    });
                    newLink = tempLink;
                }
            };

            // 값이 target 일때
            newArray.push({ nodeName: clickNodeName, next: "target" });
            const tempLink = newLink.map((value) => {
                return { ...value, lineStyle: { color: skData.nodes.itemStyle, opacity: 0.3 } };
            });
            newLink = tempLink;

            orderFunc("source");

            // 값이 source 일때
            newArray.push({ nodeName: clickNodeName, next: "source" });

            orderFunc("target");
            count++;

            const newData = { ..._skData, links: newLink };

            const isCenter = window.center.contains(myChart4?._dom);
            const newSkOption = skOption(isCenter, newData);
            myChart4.setOption(newSkOption);

            if (count === 10) {
                clearInterval(chartTimerId);
            }
        }, 2000);

        myChart4.on("click", (clickNode) => {
            const _skData = skData;
            const chartOption = myChart4.getOption();

            const clickNodeName = clickNode.data.name;
            const newArray = [];
            const allVisit = new Set(); //삽입 순서대로 요소를 순회하며 중복값 없게 사용
            let newLink = chartOption.series[0].links; //links 값

            const orderFunc = (directional) => {
                while (newArray.length > 0) {
                    const node = newArray.pop(); // 배열에서 마지막 요소를 제거하고 그 요소를 반환
                    const { nodeName, next } = node; //newArray에서의 값을 {nodeName, next} 구조분해 할당

                    allVisit.add(nodeName); //연결된 노드들을 하나씩 추가

                    const tempLink = newLink.map((value) => {
                        if (value[directional] === nodeName) {
                            if (!allVisit.has(value[next])) {
                                //allVisit에 주어진 요소가 존재하는지 => 중복값 배재 => true 일때만 출력가능!
                                newArray.push({ nodeName: value[next], next: next }); //모든 소스와 타겟을 돌도록 구조분해할당
                            }
                            return { ...value, lineStyle: { color: skData.nodes.itemStyle, opacity: 1 } };
                        }
                        return value;
                    });
                    newLink = tempLink;
                }
            };
            // 값이 target 일때
            newArray.push({ nodeName: clickNodeName, next: "target" });
            const tempLink = newLink.map((value) => {
                return { ...value, lineStyle: { color: skData.nodes.itemStyle, opacity: 0.3 } };
            });
            newLink = tempLink;
            orderFunc("source");

            // 값이 source 일때
            newArray.push({ nodeName: clickNodeName, next: "source" });
            orderFunc("target");

            const newData = { ..._skData, links: newLink };

            const newSkOption = skOption(true, newData);
            myChart4.setOption(newSkOption);
        });
    });

export { myChart4 };
