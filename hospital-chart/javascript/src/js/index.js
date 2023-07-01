//script 파일 import 하여 사용
import "./dnd.js";
import "./full.js";
import "./image.js";
import { myChart1 } from "./echart/sankeyGraph.js";
import { myChart2 } from "./echart/barChart2.js";
import { myChart3 } from "./echart/ctBar.js";
import { myChart4 } from "./echart/sankey.js";
import { myChart5 } from "./echart/barGraph.js";
import { myChart6 } from "./echart/scatter.js";
import { myChart7 } from "./echart/coming.js";
import { myChart8 } from "./echart/heatMap.js";

let time = null;
const handleResize = () => {
    time && clearTimeout(time);
    time = setTimeout(() => {
        myChart1.resize();
        myChart2.resize();
        myChart3.resize();
        myChart4.resize();
        myChart5.resize();
        myChart6.resize();
        myChart7.resize();
        myChart8.resize();
    }, 200);
};

window.addEventListener("resize", handleResize);
//페이지 -> 다른페이지로 넘어가거나
//탭이 종료될때까지 돌아감
// window.removeEventListener("resize", handleResize)
