export const getNewOption = (chartInstance, isCenter, type) => {
    //차트인스턴스,boolean,type
    switch (type) {
        case "main1":
            const sankeyInstanceOption = chartInstance.getOption();
            const data = {
                nodes: sankeyInstanceOption.series[0].data,
                links: sankeyInstanceOption.series[0].links,
            };
            return sankeyOption(isCenter, data);

        case "main2":
            const ctBarInstanceOption = chartInstance.getOption();
            const ctData = {
                time: ctBarInstanceOption.xAxis[0].data,
                ex: ctBarInstanceOption.series[0].data,
                reExamination: ctBarInstanceOption.series[1].data,
                newTestament: ctBarInstanceOption.series[2].data,
                hospitalRoom: ctBarInstanceOption.series[3].data,
                goal: ctBarInstanceOption.series[4].data,
            };
            return ctOption(isCenter, ctData);

        case "main3":
            const heatInstanceOption = chartInstance.getOption();
            const heatData = {
                time: heatInstanceOption.xAxis[0].data,
                floor: heatInstanceOption.yAxis[0].data,
                comingPerson: heatInstanceOption.series[0].data,
            };
            return heatOption(isCenter, heatData);

        case "main8":
            const bar2InstanceOption = chartInstance.getOption();
            const bar2Data = {
                avg: bar2InstanceOption.series[0].data,
                now: bar2InstanceOption.series[1].data,
                percent: bar2InstanceOption.series[2].data,
                time: bar2InstanceOption.xAxis[0].data,
            };
            return bar2Option(isCenter, bar2Data);

        case "main4":
            const skInstanceOption = chartInstance.getOption();
            const skData = {
                nodes: skInstanceOption.series[0].data,
                links: skInstanceOption.series[0].links,
            };
            return skOption(isCenter, skData);

        case "main5":
            const barGraphInstanceOption = chartInstance.getOption();
            const barGraphData = {
                operation: barGraphInstanceOption.series[1].data,
                inspection: barGraphInstanceOption.series[0].data,
                time: barGraphInstanceOption.xAxis[0].data,
            };
            return barGraphOption(isCenter, barGraphData);

        case "main6":
            const scatterInstanceOption = chartInstance.getOption();
            const scatterData = {
                time: scatterInstanceOption.xAxis[0].data,
                annex: scatterInstanceOption.series[1].data,
                mainBuilding: scatterInstanceOption.series[0].data,
                center: scatterInstanceOption.series[2].data,
                cancerHospital: scatterInstanceOption.series[3].data,
            };
            return scatterOption(isCenter, scatterData);

        case "main7":
            const comingInstanceOption = chartInstance.getOption();
            const comingData = {
                time: comingInstanceOption.xAxis[0].data,
                coming: comingInstanceOption.series[0].data,
                year: comingInstanceOption.series[2].data,
                month: comingInstanceOption.series[3].data,
                week: comingInstanceOption.series[4].data,
                day: comingInstanceOption.series[5].data,
            };
            return comingOption(isCenter, comingData);

        default:
            return null;
    }
};

export const sankeyOption = (isCenter, data) => {
    return isCenter
        ? {
              tooltip: {
                  trigger: "item",
                  triggerOn: "mousemove",

                  formatter(params) {
                      let res = `
                    <div>
                    ${params.dataType}<br/>
                    </div>
                    `;
                      if (params.dataType === "node") {
                          res = ` <div>
                    Node <br/>
                    노드 이름 : ${params.value}<br/>
                    </div>
                    `;
                      } else {
                          const source = params.data.source.split("-");
                          const sourcePop = source.pop();
                          const target = params.data.target.split("-");
                          const targetPop = target.pop();
                          res = ` <div>
                    Link <br/>
                    시작 노드 : ${source.join("-")}<br/>
                    목표 노드 : ${target.join("-")}<br/>
                    연결값 : ${params.data.value}<br/>
                    </div>
                    `;
                      }
                      return res;
                  },
              },
              series: {
                  type: "sankey",
                  layout: "none",
                  layoutIterations: 0,
                  emphasis: {
                      focus: "adjacency",
                  },

                  data: data.nodes,
                  links: data.links,

                  label: {
                      show: true,
                      position: "insideTopLeft",
                      color: "#FFFF",
                      formatter: "{c}",
                      fontSize: 13,
                      fontWeight: "bold",
                  },
                  lineStyle: {
                      color: "gradient",
                  },
                  nodeWidth: 65,
                  right: "1%",
                  height: "81%",
              },
          }
        : {
              tooltip: {
                  trigger: "item",
                  triggerOn: "mousemove",

                  formatter(params) {
                      let res = `
                    <div>
                    ${params.dataType}<br/>
                    </div>
                    `;
                      if (params.dataType === "node") {
                          res = ` <div>
                    Node <br/>
                    노드 이름 : ${params.value}<br/>
                    </div>
                    `;
                      } else {
                          const source = params.data.source.split("-");
                          const sourcePop = source.pop();
                          const target = params.data.target.split("-");
                          const targetPop = target.pop();
                          res = ` <div>
                    Link <br/>
                    시작 노드 : ${source.join("-")}<br/>
                    목표 노드 : ${target.join("-")}<br/>
                    연결값 : ${params.data.value}<br/>
                    </div>
                    `;
                      }
                      return res;
                  },
              },
              series: {
                  type: "sankey",
                  layout: "none",
                  layoutIterations: 0,
                  emphasis: {
                      focus: "adjacency",
                  },

                  data: data.nodes,
                  links: data.links,

                  label: {
                      show: false,
                      position: "insideTopLeft",
                      formatter: "{c}",
                      color: "#FFFF",
                      fontSize: 15,
                  },
                  lineStyle: {
                      color: "gradient",
                  },
                  nodeWidth: 20,
                  right: "1%",
                  height: "81%",
              },
          };
};

export const ctOption = (isCenter, ctData) => {
    return isCenter
        ? {
              tooltip: {
                  trigger: "axis",
                  show: true,
                  axisPointer: {
                      type: "shadow",
                  },
                  formatter(params) {
                      if (params.length === 5) {
                          return `
                      <div style =  "margin: -10px; padding: 18px; background-color: #05022d; width: 130px; height: 140px; font-size: 14.3px; color:#FFFFFF;">
                      ${params[0].name}<br/>
                      <p style = "margin : 6px;">병동 : ${params[3].data}명<br/></p>
                      <p style = "margin : 6px;">신환초진 : ${params[2].data}명<br/></p>
                      <p style = "margin : 6px;">재진 : ${params[1].data}명<br/></p>
                      <p style = "margin : 6px;">어제 대비 : -3.2%</p>
                      </div>
                      `;
                      } else {
                          return `
                        <div style =  "margin: -10px; padding: 18px; background-color: #05022d; width: 130px; height: 140px; font-size: 14.3px; color:#FFFFFF;">
                        ${params[0].name}<br/>
                        <p style = "margin : 6px;">병동 : -명<br/></p>
                        <p style = "margin : 6px;">신환초진 : -명<br/></p>
                        <p style = "margin : 6px;">재진 : -명<br/></p>
                        <p style = "margin : 6px;">어제 대비 : -%</p>
                        </div>
                        `;
                      }
                  },
              },
              legend: {
                  data: ["달성률", "병동", "신환", "재진"],
                  itemWidth: 22,
                  textStyle: {
                      color: "white",
                  },
              },
              grid: {
                  left: "4%",
                  right: "4%",
                  width: "90%",
                  height: "85%",
                  containLabel: true,
              },
              xAxis: [
                  {
                      type: "category",
                      data: ctData.time,
                      show: true,
                      axisLine: { show: false },
                      axisTick: {
                          show: false,
                      },
                      axisLabel: {
                          interval: 0,
                      },
                  },
              ],
              yAxis: [
                  {
                      type: "value",
                      min: 0,
                      max: 1000,
                      interval: 100,
                      splitLine: { show: false },
                  },
              ],
              dataZoom: {
                  type: "inside",
                  zoomLock: true,
                  startValue: ctData.reExamination.length > 23 ? ctData.time[ctData.reExamination.length - 23] : ctData.time[0],
                  endValue: ctData.reExamination.length > 23 ? ctData.time[ctData.reExamination.length - 1] : ctData.time[22],
              },
              series: [
                  {
                      name: "di",
                      type: "bar",
                      color: "#394452",
                      data: ctData.ex,
                      barGap: "-0%",
                      barWidth: 15,
                  },
                  {
                      name: "재진",
                      type: "bar",
                      stack: "Ad",
                      emphasis: {
                          focus: "series",
                          disabled: true,
                      },
                      color: "#5ECD9E",
                      data: ctData.reExamination,
                      barWidth: 16,
                  },
                  {
                      name: "신환",
                      type: "bar",
                      stack: "Ad",
                      emphasis: {
                          focus: "series",
                          disabled: true,
                      },
                      color: "#5E96E2",
                      data: ctData.newTestament,
                  },
                  {
                      name: "병동",
                      type: "bar",
                      stack: "Ad",
                      emphasis: {
                          focus: "series",
                          disabled: true,
                      },
                      color: "#FF8E90",
                      data: ctData.hospitalRoom,
                  },
                  {
                      name: "달성률",
                      type: "line",
                      symbol: "none",
                      data: ctData.goal,
                      color: "#38C0CD",
                  },
              ],
          }
        : {
              tooltip: {
                  trigger: "axis",
                  show: true,
                  axisPointer: {
                      type: "shadow",
                  },
                  formatter(params) {
                      if (params.length === 4) {
                          return `
                    <div style =  "margin: -10px; padding: 18px; background-color: #05022d; width: 130px; height: 140px; font-size: 14.3px; color:#FFFFFF;">
                    ${params[0].name}<br/>
                    <p style = "margin : 6px;">병동 : ${params[3].data}명<br/></p>
                    <p style = "margin : 6px;">신환초진 : ${params[2].data}명<br/></p>
                    <p style = "margin : 6px;">재진 : ${params[1].data}명<br/></p>
                    <p style = "margin : 6px;">어제 대비 : -3.2%</p>
                    </div>
                    `;
                      } else {
                          return `
                      <div style =  "margin: -10px; padding: 18px; background-color: #05022d; width: 130px; height: 140px; font-size: 14.3px; color:#FFFFFF;">
                      ${params[0].name}<br/>
                      <p style = "margin : 6px;">병동 : -명<br/></p>
                      <p style = "margin : 6px;">신환초진 : -명<br/></p>
                      <p style = "margin : 6px;">재진 : -명<br/></p>
                      <p style = "margin : 6px;">어제 대비 : -%</p>
                      </div>
                      `;
                      }
                  },
              },
              legend: {
                  data: ["달성률", "병동", "신환", "재진"],
                  itemWidth: 22,
                  textStyle: {
                      color: "white",
                  },
              },
              grid: {
                  left: "3%",
                  right: "4%",
                  width: "86%",
                  height: "70%",
                  containLabel: true,
              },
              xAxis: [
                  {
                      type: "category",
                      data: ctData.time,
                      show: true,
                      axisLine: { show: false },
                      axisTick: {
                          show: false,
                      },
                      axisLabel: {
                          interval: 4, //간격 넓혀주기
                      },
                  },
              ],
              yAxis: [
                  {
                      type: "value",
                      min: 0,
                      max: 1000,
                      interval: 250,
                      splitLine: { show: false }, //그래프 선 지워주기
                  },
              ],
              dataZoom: {
                  type: "inside",
                  zoomLock: true,
                  startValue: ctData.reExamination.length > 23 ? ctData.time[ctData.reExamination.length - 23] : ctData.time[0],
                  endValue: ctData.reExamination.length > 23 ? ctData.time[ctData.reExamination.length - 1] : ctData.time[22],
              },
              series: [
                  {
                      name: "di",
                      type: "bar",
                      color: "#394452",
                      data: "",
                      barGap: "-0%",
                      barWidth: 1,
                  },
                  {
                      name: "재진",
                      type: "bar",
                      stack: "Ad",
                      emphasis: {
                          focus: "series",
                      },
                      color: "#5ECD9E",
                      data: ctData.reExamination,
                      barWidth: 10,
                  },
                  {
                      name: "신환",
                      type: "bar",
                      stack: "Ad",
                      emphasis: {
                          focus: "series",
                          disabled: true,
                      },
                      color: "#5E96E2",
                      data: ctData.newTestament,
                  },
                  {
                      name: "병동",
                      type: "bar",
                      stack: "Ad",
                      emphasis: {
                          focus: "series",
                          disabled: true,
                      },
                      color: "#FF8E90",
                      data: ctData.hospitalRoom,
                  },
                  {
                      name: "달성률",
                      type: "line",
                      symbol: "none",
                      data: ctData.goal,
                      color: "#38C0CD",
                  },
              ],
          };
};

export const bar2Option = (isCenter, bar2Data) => {
    return isCenter
        ? {
              tooltip: {
                  trigger: "axis",
                  show: true,
                  axisPointer: {
                      type: "shadow",
                  },
              },
              grid: {
                  top: "8%",
                  bottom: "0%",
                  left: "6%",
                  width: "80%",
                  height: "66%",
              },
              legend: {
                  icon: "roundRect",
                  orient: "vertical",
                  top: "25%",
                  left: "90%",
                  data: ["평균 환자수", "현재 환자수", "달성률"],
                  textStyle: {
                      color: "white",
                  },
                  itemGap: 28,
              },
              xAxis: [
                  {
                      type: "category",
                      data: bar2Data.time,
                      axisPointer: {
                          type: "shadow",
                      },
                  },
              ],
              yAxis: [
                  {
                      type: "value",
                      min: 0,
                      max: 250,
                      interval: 50,
                      axisLabel: {
                          formatter: "{value} %",
                      },
                      splitLine: { show: true },
                  },
              ],
              dataZoom: {
                  type: "inside",
                  zoomLock: true,
                  startValue: bar2Data.now.length > 23 ? bar2Data.time[bar2Data.now.length - 23] : bar2Data.time[0],
                  endValue: bar2Data.now.length > 23 ? bar2Data.time[bar2Data.now.length - 1] : bar2Data.time[22],
              },
              series: [
                  {
                      name: "평균 환자수",
                      type: "bar",
                      data: bar2Data.avg,
                      itemStyle: {
                          color: "#163b88",
                      },
                  },
                  {
                      name: "현재 환자수",
                      type: "bar",
                      data: bar2Data.now,
                      itemStyle: {
                          color: "#516ee6",
                      },
                  },
                  {
                      name: "달성률",
                      type: "line",
                      data: bar2Data.percent,
                      symbol: "circle",
                      symbolSize: 6,
                      itemStyle: {
                          color: "#99E8B6",
                      },
                  },
              ],
          }
        : {
              tooltip: {
                  trigger: "axis",
                  show: true,
                  axisPointer: {
                      type: "shadow",
                  },
              },
              grid: {
                  top: "10%",
                  bottom: "0%",
                  left: "18%",
                  width: "68%",
                  height: "60%",
              },
              legend: {
                  icon: "roundRect",
                  orient: "vertical",
                  left: "89.5%",
                  top: "10%",
                  data: ["평균 환자수", "현재 환자수", "달성률"],
                  textStyle: {
                      color: "white",
                  },
                  itemGap: 9,
              },
              xAxis: [
                  {
                      type: "category",
                      data: bar2Data.time,
                      axisPointer: {
                          type: "shadow",
                      },
                      axisTick: {
                          show: false,
                      },
                  },
              ],
              yAxis: [
                  {
                      type: "value",
                      min: 0,
                      max: 250,
                      interval: 50,
                      axisLabel: {
                          formatter: "{value} %",
                      },
                      splitLine: { show: false },
                  },
              ],
              dataZoom: {
                  type: "inside",
                  zoomLock: true,
                  startValue: bar2Data.now.length > 23 ? bar2Data.time[bar2Data.now.length - 23] : bar2Data.time[0],
                  endValue: bar2Data.now.length > 23 ? bar2Data.time[bar2Data.now.length - 1] : bar2Data.time[22],
              },
              series: [
                  {
                      name: "평균 환자수",
                      type: "bar",
                      data: bar2Data.avg,
                      itemStyle: {
                          color: "#163b88",
                      },
                  },
                  {
                      name: "현재 환자수",
                      type: "bar",
                      data: bar2Data.now,
                      itemStyle: {
                          color: "#516ee6",
                      },
                  },
                  {
                      name: "달성률",
                      type: "line",
                      symbol: "none",
                      data: bar2Data.percent,
                      itemStyle: {
                          color: "#99E8B6",
                      },
                  },
              ],
          };
};

export const heatOption = (isCenter, heatData) => {
    return isCenter
        ? {
              tooltip: {
                  position: "right",
                  backgroundColor: "transparent",
                  formatter(params) {
                      setTimeout(() => {
                          const chartDom = document.querySelector("#tooltip");
                          const myChart = echarts.init(chartDom);
                          const option = {
                              xAxis: {
                                  type: "category",
                                  splitLine: { show: false },
                                  axisTick: {
                                      alignWithLabel: false,
                                      show: false,
                                  },
                                  axisLabel: {
                                      show: false,
                                  },
                                  axisLine: {
                                      lineStyle: {
                                          color: "#FFF",
                                      },
                                  },
                              },
                              yAxis: {
                                  type: "value",
                                  splitLine: { show: false },
                                  axisLabel: {
                                      show: false,
                                  },
                              },
                              series: {
                                  data: heatData.miniChart,
                                  type: "line",
                                  symbol: "none",
                                  itemStyle: {
                                      color: "#FFF",
                                  },
                              },
                          };
                          myChart.setOption(option);
                      });

                      return ` 
                    <div style = "width: 210px; height: 260px; margin:-10px; padding: 20px; color:${params.color};">
                      <div style ="margin: -10px; padding: 23px; width: 170px; height: 240px; background-color:${params.color}; color:white;>
                      <p style = "font-size : 15px;">${heatData.floor[params.value[1]]}</p>
                          🧑‍⚕️ 의료진 수 : 8 명 <br/>
                          😃 접수 인원 : ${params.value[2]} 명 <br/>
                          어제 대비 : 2.1% | 평균 대비 : 3% <br/>
                          🕰 평균 대기 시간 : 0 분<br/>
                          어제 대비 : 2.1% | 평균 대비 : 3% <br/>
                          <div id="tooltip" style="margin-left: 16px; margin-top:10px; width: 130px; height: 80px;"></div>
                          <div style="text-align: center;  margin : 0px;">${params.name} </div>
                      </div>
                  </div>
               
                `;
                  },

                  triggerOn: "click",
              },
              animation: true,
              grid: {
                  top: "0%",
                  left: "15%",
                  right: "6%",
                  width: "80%",
                  height: "92%",
              },
              xAxis: {
                  type: "category",
                  data: heatData.time,
                  axisTick: {
                      show: false,
                  },
                  axisLine: {
                      lineStyle: {
                          color: "#FFFF",
                      },
                  },
              },
              yAxis: {
                  type: "category",
                  data: heatData.floor,
                  axisTick: {
                      show: false,
                  },
                  axisLine: {
                      lineStyle: {
                          color: "#FFFF",
                      },
                  },
              },
              visualMap: {
                  type: "piecewise",
                  itemSymbol: "rect",
                  min: 0,
                  max: 10,
                  splitNumber: 10,
                  itemGap: 0,
                  formatter: (value) => `${value * 10 + 10}%`,
                  textStyle: {
                      color: "white",
                  },
                  orient: "vertical",
                  showLabel: true,
                  left: "1%",
                  top: "10%",
                  itemHeight: 33,
                  itemWidth: 24,
                  align: "right",
                  inRange: {
                      color: ["#0E132F", "#0D1741", "#0D1A4F", "#0D1D63", "#111F78", "#172A92", "#1739A6", "#345EF7", "#345EF7", "#e85a53"],
                  },
              },
              dataZoom: {
                  type: "inside",
                  zoomLock: true,
                  startValue: heatData.comingPerson.length > 92 ? heatData.time[heatData.comingPerson.length / 4 - 23] : heatData.time[0], // (heatData.co.length  / 4) -23
                  endValue: heatData.comingPerson.length > 92 ? heatData.time[heatData.comingPerson.length / 4 - 1] : heatData.time[22],
              },
              series: [
                  {
                      type: "heatmap",
                      data: heatData.comingPerson,
                      label: {
                          show: false,
                      },
                  },
              ],
          }
        : {
              tooltip: {
                  position: "right",
                  backgroundColor: "transparent",
                  formatter(params) {
                      setTimeout(() => {
                          const chartDom = document.querySelector("#tooltip");
                          const myChart = echarts.init(chartDom);
                          const option = {
                              xAxis: {
                                  type: "category",
                                  splitLine: { show: false },
                                  axisTick: {
                                      alignWithLabel: false,
                                      show: false,
                                  },
                                  axisLabel: {
                                      show: false,
                                  },
                                  axisLine: {
                                      lineStyle: {
                                          color: "#FFF",
                                      },
                                  },
                              },
                              yAxis: {
                                  type: "value",
                                  splitLine: { show: false },
                                  axisLabel: {
                                      show: false,
                                  },
                              },
                              series: {
                                  data: heatData.miniChart,
                                  type: "line",
                                  symbol: "none",
                                  itemStyle: {
                                      color: "#FFF",
                                  },
                              },
                          };
                          myChart.setOption(option);
                      });

                      return ` 
                      <div style = "width: 210px; height: 260px; margin:-10px; padding: 20px; color:${params.color};">
                        <div style ="margin: -10px; padding: 23px; width: 170px; height: 240px; background-color:${params.color}; color:white;>
                        <p style = "font-size : 15px;">${heatData.floor[params.value[1]]}</p>
                            🧑‍⚕️ 의료진 수 : 8 명 <br/>
                            😃 접수 인원 : ${params.value[2]} 명 <br/>
                            어제 대비 : 2.1% | 평균 대비 : 3% <br/>
                            🕰 평균 대기 시간 : 0 분<br/>
                            어제 대비 : 2.1% | 평균 대비 : 3% <br/>
                            <div id="tooltip" style="margin-left: 16px; margin-top:10px; width: 130px; height: 80px;"></div>
                            <div style="text-align: center;  margin : 0px;">${params.name} </div>
                        </div>
                    </div>
                 
                  `;
                  },

                  triggerOn: "click",
              },
              animation: true,
              grid: {
                  top: "0%",
                  left: "25%",
                  right: "10%",
                  width: "71%",
                  height: "80%",
              },
              xAxis: {
                  type: "category",
                  data: heatData.time,
                  axisTick: {
                      show: false,
                  },
                  axisLine: {
                      lineStyle: {
                          color: "#FFFF",
                      },
                  },
              },
              yAxis: {
                  type: "category",
                  data: heatData.floor,
                  axisTick: {
                      show: false,
                  },
                  axisLine: {
                      lineStyle: {
                          color: "#FFFF",
                      },
                  },
              },
              visualMap: {
                  type: "piecewise",
                  itemSymbol: "rect",
                  min: 0,
                  max: 10,
                  splitNumber: 10,
                  itemGap: 0,
                  itemWidth: 15,
                  itemHeight: 12,
                  orient: "vertical",
                  left: "0%",
                  top: "0%",
                  orient: "vertical",
                  showLabel: false,
                  align: "left",
                  inRange: {
                      color: ["#0E132F", "#0D1741", "#0D1A4F", "#0D1D63", "#111F78", "#172A92", "#1739A6", "#345EF7", "#345EF7", "#e85a53"],
                  },
              },
              dataZoom: {
                  type: "inside",
                  zoomLock: true,
                  startValue: heatData.comingPerson.length > 92 ? heatData.time[heatData.comingPerson.length / 4 - 23] : heatData.time[0], // (heatData.co.length  / 4) -23
                  endValue: heatData.comingPerson.length > 92 ? heatData.time[heatData.comingPerson.length / 4 - 1] : heatData.time[22],
              },
              series: [
                  {
                      type: "heatmap",
                      data: heatData.comingPerson,
                      label: {
                          show: false,
                      },
                      emphasis: {
                          itemStyle: {
                              width: "10%",
                              shadowBlur: 10,
                              Color: "#000000",
                          },
                      },
                  },
              ],
          };
};

export const skOption = (isCenter, skData) => {
    return isCenter
        ? {
              tooltip: {
                  trigger: "item",
                  triggerOn: "mousemove",

                  formatter(params) {
                      let res = `
                      <div>
                      ${params.dataType}<br/>
                      </div>
                      `;
                      if (params.dataType === "node") {
                          res = ` <div>
                      Node <br/>
                      노드 이름 : ${params.value}<br/>
                      </div>
                      `;
                      } else {
                          const source = params.data.source.split("-");
                          const sourcePop = source.pop();
                          const target = params.data.target.split("-");
                          const targetPop = target.pop();
                          res = ` <div>
                      Link <br/>
                      시작 노드 : ${source.join("-")}<br/>
                      목표 노드 : ${target.join("-")}<br/>
                      연결값 : ${params.data.value}<br/>
                      </div>
                      `;
                      }
                      return res;
                  },
              },
              series: {
                  type: "sankey",
                  layout: "none",
                  layoutIterations: 0,
                  emphasis: {
                      itemStyle: {
                          color: skData.nodes.itemStyle,
                          opacity: 1,
                      },
                      focus: "adjacency", //series
                  },

                  data: skData.nodes,
                  links: skData.links,

                  label: {
                      show: true,
                      position: "insideTopLeft",
                      color: "#FFFF",
                      formatter: "{c}",
                      fontSize: 13,
                      fontWeight: "bold",
                  },
                  emphasis: {
                      lineStyle: {
                          color: skData.nodes.itemStyle,
                          opacity: 1,
                      },
                  },
                  lineStyle: {
                      color: "gradient",
                      opacity: 0.3,
                  },

                  nodeWidth: 65,
                  right: "1%",
                  height: "81%",
              },
          }
        : {
              tooltip: {
                  trigger: "item",
                  triggerOn: "mousemove",

                  formatter(params) {
                      let res = `
                    <div>
                    ${params.dataType}<br/>
                    </div>
                    `;
                      if (params.dataType === "node") {
                          res = ` <div>
                    Node <br/>
                    노드 이름 : ${params.value}<br/>
                    </div>
                    `;
                      } else {
                          const source = params.data.source.split("-");
                          const sourcePop = source.pop();
                          const target = params.data.target.split("-");
                          const targetPop = target.pop();
                          res = ` <div>
                    Link <br/>
                    시작 노드 : ${source.join("-")}<br/>
                    목표 노드 : ${target.join("-")}<br/>
                    연결값 : ${params.data.value}<br/>
                    </div>
                    `;
                      }
                      return res;
                  },
              },
              series: {
                  type: "sankey",
                  layout: "none",
                  layoutIterations: 0,
                  emphasis: {
                      focus: "adjacency",
                  },

                  data: skData.nodes,
                  links: skData.links,

                  label: {
                      show: false,
                      position: "insideTopLeft",
                      color: "#FFFF",
                      formatter: "{c}",
                      fontSize: 15,
                  },
                  lineStyle: {
                      color: "gradient",
                  },
                  nodeWidth: 20,
                  right: "1%",
                  height: "81%",
              },
          };
};

export const barGraphOption = (isCenter, barGraphData) => {
    return isCenter
        ? {
              tooltip: {
                  trigger: "axis",
                  show: true,
                  axisPointer: {
                      type: "shadow",
                  },
                  formatter(params) {
                      if (params.length === 4) {
                          return `
      <div style =  "margin: -9px; padding: 10px; background-color: #05022D; width: 140px; height: 210px; font-size: 14px; color:#FFFFFF;">
      ${params[0].name}-현시각 <br/>
      - 진행 검사수 : ${params[0].data}<br/>
      - 진행 수술수 : ${params[0].data}<br/><br/>
      - 달성률 : ${params[0].data}%<br/><br/>
      - 누적 진행 검사 수: ${params[1].data}건<br/>
      어제 대비: ${params[2].data}%<br/>
      - 누적 진행 수술수: ${params[1].data}건<br/>
      어제 대비: ${params[2].data}%<br/>
      </div>
      `;
                      } else {
                          return `
                      <div style =  "margin: -9px; padding: 10px; background-color: #05022D; width: 140px; height: 210px; font-size: 14px; color:#FFFFFF;">
                      ${params[0].name}-현시각 <br/>
                      - 진행 검사수 : -<br/>
                      - 진행 수술수 : -<br/><br/>
                      - 달성률 : -%<br/><br/>
                      - 누적 진행 검사 수: -건<br/>
                      어제 대비: -%<br/>
                      - 누적 진행 수술수: -건<br/>
                      어제 대비: -%<br/>
                      </div>
                      `;
                      }
                  },
              },

              legend: {
                  icon: "circle", //legend 아이콘 동그라미 -> 기본값은 square
                  data: ["예상 검사/ 수술 수", "실행 검사/ 수술 수", "달성 률"],
                  textStyle: {
                      color: "white",
                  },
              },
              grid: {
                  left: "3%",
                  right: "10%",
                  bottom: "7%",
                  height: "85%",
                  containLabel: true,
              },
              xAxis: [
                  {
                      type: "category",
                      data: barGraphData.time,
                      axisTick: {
                          show: false,
                      },
                      axisLabel: {
                          interval: 0, //간격 넓혀주기
                      },
                  },
              ],
              yAxis: [
                  {
                      type: "value",
                      min: 0,
                      max: 100,
                      interval: 10,
                      axisLabel: {
                          formatter: "{value} %",
                      },
                  },
              ],
              dataZoom: {
                  type: "inside",
                  zoomLock: true,
                  startValue: barGraphData.operation.length > 13 ? barGraphData.time[barGraphData.operation.length - 13] : barGraphData.time[0],
                  endValue: barGraphData.operation.length > 13 ? barGraphData.time[barGraphData.operation.length - 1] : barGraphData.time[12],
              },
              series: [
                  {
                      name: "예상 검사/ 수술 수",
                      type: "bar",
                      data: barGraphData.inspection,
                      barGap: "-50%",
                      barWidth: 30,
                      itemStyle: {
                          color: "#2F3457",
                          borderRadius: [13, 13, 0, 0], //막대바 동글댕글
                      },
                  },
                  {
                      name: "실행 검사/ 수술 수",
                      type: "bar",
                      data: barGraphData.operation, // data: data.map(item => item.inspection),
                      barWidth: 30,
                      itemStyle: {
                          borderRadius: [13, 13, 0, 0],
                          color: "#63a3d9",
                      },
                  },
                  {
                      name: "달성 률",
                      type: "line",
                      data: barGraphData.operation,
                      itemStyle: {
                          color: "#FFFF5B",
                      },
                  },
                  {
                      type: "effectScatter",
                      data: barGraphData.operation,
                      rippleEffect: {
                          scale: 2, //깜빡이는 횟수
                      },
                      itemStyle: {
                          color: "white",
                      },
                  },
              ],
          }
        : {
              tooltip: {
                  trigger: "axis",
                  show: true,
                  axisPointer: {
                      type: "shadow",
                  },
                  formatter(params) {
                      if (params.length === 4) {
                          return `
        <div style =  "margin: -9px; padding: 10px; background-color: #05022D; width: 140px; height: 210px; font-size: 14px; color:#FFFFFF;">
        ${params[0].name}-현시각 <br/>
        - 진행 검사수 : ${params[0].data}<br/>
        - 진행 수술수 : ${params[0].data}<br/><br/>
        - 달성률 : ${params[0].data}%<br/><br/>
        - 누적 진행 검사 수: ${params[1].data}건<br/>
        어제 대비: ${params[2].data}%<br/>
        - 누적 진행 수술수: ${params[1].data}건<br/>
        어제 대비: ${params[2].data}%<br/>
        </div>
        `;
                      } else {
                          return `
                        <div style =  "margin: -9px; padding: 10px; background-color: #05022D; width: 140px; height: 210px; font-size: 14px; color:#FFFFFF;">
                        ${params[0].name}-현시각 <br/>
                        - 진행 검사수 : -<br/>
                        - 진행 수술수 : -<br/><br/>
                        - 달성률 : -%<br/><br/>
                        - 누적 진행 검사 수: -건<br/>
                        어제 대비: -%<br/>
                        - 누적 진행 수술수: -건<br/>
                        어제 대비: -%<br/>
                        </div>
                        `;
                      }
                  },
              },

              legend: {
                  icon: "circle", //legend 아이콘 동그라미 -> 기본값은 square
                  data: ["예상 검사/ 수술 수", "실행 검사/ 수술 수", "달성 률"],
                  textStyle: {
                      color: "white",
                  },
              },
              grid: {
                  left: "3%",
                  right: "10%",
                  height: "65%",
                  containLabel: true,
              },
              xAxis: [
                  {
                      type: "category",
                      data: barGraphData.time,
                      axisTick: {
                          show: false,
                      },
                      axisLabel: {
                          interval: 2, //간격 넓혀주기
                      },
                  },
              ],
              yAxis: [
                  {
                      type: "value",
                      min: 0,
                      max: 100,
                      interval: 25,
                      axisLabel: {
                          formatter: "{value} %",
                      },
                  },
              ],
              dataZoom: {
                  type: "inside",
                  zoomLock: true,
                  startValue: barGraphData.operation.length > 13 ? barGraphData.time[barGraphData.operation.length - 13] : barGraphData.time[0],
                  endValue: barGraphData.operation.length > 13 ? barGraphData.time[barGraphData.operation.length - 1] : barGraphData.time[12],
              },
              series: [
                  {
                      name: "예상 검사/ 수술 수",
                      type: "bar",
                      data: barGraphData.inspection,
                      barGap: "-50%",
                      barWidth: 14,
                      itemStyle: {
                          color: "#2F3457",
                          borderRadius: [13, 13, 0, 0], //막대바 동글댕글
                      },
                  },
                  {
                      name: "실행 검사/ 수술 수",
                      type: "bar",
                      data: barGraphData.operation, // data: data.map(item => item.inspection),
                      barWidth: 14,
                      itemStyle: {
                          borderRadius: [13, 13, 0, 0],
                          color: "#63a3d9",
                      },
                  },
                  {
                      name: "달성 률",
                      type: "line",
                      data: barGraphData.operation,
                      itemStyle: {
                          color: "#FFFF5B",
                      },
                  },
                  {
                      type: "effectScatter",
                      data: barGraphData.operation,
                      rippleEffect: {
                          scale: 2, //깜빡이는 횟수
                      },
                      itemStyle: {
                          color: "white",
                      },
                  },
              ],
          };
};

export const scatterOption = (isCenter, scatterData) => {
    //timeline
    let today = new Date();
    const startHour = today.setHours(5, 0, 0); //6시로 설정
    const endHour = today.setHours(21, 0, 0); //21시에 끝
    const ArrayName = scatterData.mainBuilding.map((event) => event[0]);
    return isCenter
        ? {
              grid: {
                  height: "85%",
                  containLabel: true,
              },
              tooltip: {
                  trigger: "axis",
                  show: true,
                  axisPointer: {
                      type: "line",
                  },
              },

              legend: {
                  data: ["본관", "별관", "암병원", "양성자센터"],
                  left: "center",
                  top: 10,
                  textStyle: {
                      color: "white",
                  },
              },
              xAxis: [
                  {
                      //배열로 넣어서 만들어보기
                      type: "time",
                      min: startHour,
                      max: endHour,
                      interval: 1000 * 900, //15분
                      axisLabel: {
                          formatter: "{HH}:00",
                      },
                      axisTick: {
                          show: false,
                      },
                  },
              ],
              yAxis: [
                  {
                      min: 60,
                      max: 480,
                      interval: 60,
                      type: "value",
                      scale: true,
                      axisLine: { show: false },
                  },
              ],
              dataZoom: {
                  type: "inside",
                  zoomLock: true,
                  startValue: scatterData.mainBuilding.length > 41 ? ArrayName[scatterData.mainBuilding.length - 41] : startHour,
                  endValue: scatterData.mainBuilding.length > 41 ? ArrayName[scatterData.mainBuilding.length - 1] : 1656054900467,
              },

              series: [
                  {
                      name: "본관",
                      type: "scatter",
                      symbol: "circle",
                      symbolSize: 5,
                      itemStyle: {
                          color: "#4764a7",
                      },
                      data: scatterData.mainBuilding,
                  },
                  {
                      name: "별관",
                      type: "scatter",
                      symbol: "circle",
                      symbolSize: 5,
                      itemStyle: {
                          color: "#77b25a",
                      },
                      data: scatterData.annex,
                  },
                  {
                      name: "암병원",
                      type: "scatter",
                      symbol: "circle",
                      symbolSize: 5,
                      itemStyle: {
                          color: "#f3b668",
                      },
                      data: scatterData.cancerHospital,
                  },
                  {
                      name: "양성자센터",
                      type: "scatter",
                      symbol: "circle",
                      symbolSize: 5,
                      itemStyle: {
                          color: "#c85050",
                      },
                      data: scatterData.center,
                  },
              ],
          }
        : {
              grid: {
                  width: "95%",
                  left: "2%",
                  height: "68%",
                  containLabel: true,
              },
              tooltip: {
                  trigger: "axis",
                  show: true,
                  axisPointer: {
                      type: "line",
                  },
              },

              legend: {
                  data: ["본관", "별관", "암병원", "양성자센터"],
                  left: "center",
                  top: 10,
                  textStyle: {
                      color: "white",
                  },
              },
              xAxis: [
                  {
                      type: "time",
                      min: startHour,
                      max: endHour,
                      interval: 1000 * 900, //15분 증가
                      boundaryGap: false,
                      axisLabel: {
                          formatter: "{HH}",
                      },
                      axisTick: {
                          show: false,
                      },
                  },
              ],

              yAxis: [
                  {
                      min: 100,
                      max: 500,
                      interval: 100,
                      type: "value",
                      scale: true,
                      axisLine: { show: false },
                  },
              ],

              dataZoom: {
                  type: "inside",
                  zoomLock: true,
                  startValue: scatterData.mainBuilding.length > 41 ? ArrayName[scatterData.mainBuilding.length - 41] : startHour,
                  endValue: scatterData.mainBuilding.length > 41 ? ArrayName[scatterData.mainBuilding.length - 1] : 1656054900467,
              },
              series: [
                  {
                      name: "본관",
                      type: "scatter",
                      symbol: "circle",
                      symbolSize: 4,
                      itemStyle: {
                          color: "#4764a7",
                      },
                      data: scatterData.mainBuilding,
                  },
                  {
                      name: "별관",
                      type: "scatter",
                      symbol: "circle",
                      symbolSize: 4,
                      itemStyle: {
                          color: "#77b25a",
                      },
                      data: scatterData.annex,
                  },
                  {
                      name: "암병원",
                      type: "scatter",
                      symbol: "circle",
                      symbolSize: 4,
                      itemStyle: {
                          color: "#f3b668",
                      },
                      data: scatterData.cancerHospital,
                  },
                  {
                      name: "양성자센터",
                      type: "scatter",
                      symbol: "circle",
                      symbolSize: 4,
                      itemStyle: {
                          color: "#c85050",
                      },
                      data: scatterData.center,
                  },
              ],
          };
};

export const comingOption = (isCenter, comingData) => {
    return isCenter
        ? {
              tooltip: {
                  trigger: "axis",
                  show: true,
                  axisPointer: {
                      type: "shadow",
                  },
                  formatter(params) {
                      return `
                      <div style =  "margin: -9.5px; padding: 17px; background-color: #05022D; width: 140px; height: 110px; font-size: 15px; color:#FFFFFF;">
                    ${params[0].name}<br/>
                    <p style = "margin : 4px;">방문 환자 수 : ${params[0].data}명<br/></p>
                    <p style = "margin : 4px;">평균 환자 수 : ${params[1].data}명<br/></p>
                    <p style = "margin : 4px;">어제 대비 : -3.23% <br/></p>
                    </div></div>
                    `;
                  },
              },
              legend: {
                  icon: "circle",
                  right: "60px",
                  data: ["year", "month", "week", "day"],
                  textStyle: {
                      color: "white",
                  },
              },
              xAxis: {
                  type: "category",
                  boundaryGap: false,
                  data: comingData.time,
                  axisTick: {
                      show: false,
                  },
              },
              yAxis: {
                  min: 50,
                  max: 1500,
                  interval: 150,
                  type: "value",
                  boundaryGap: [0, "30%"],
              },
              dataZoom: {
                  type: "inside",
                  zoomLock: true,
                  startValue: comingData.coming.length > 12 ? comingData.time[comingData.coming.length - 12] : comingData.time[0],
                  endValue: comingData.coming.length > 12 ? comingData.time[comingData.coming.length - 1] : comingData.time[11],
              },
              grid: {
                  left: "8%",
                  width: "85%",
                  height: "85%",
              },
              series: [
                  {
                      type: "effectScatter",
                      data: comingData.coming,
                      rippleEffect: {
                          scale: 2, //깜빡이는 횟수
                      },
                      itemStyle: {
                          color: "white",
                      },
                      z: 100,
                  },
                  {
                      type: "line",
                      smooth: 0.6,
                      symbol: "none",
                      lineStyle: {
                          color: "#4EACF9",
                          width: 5.8,
                      },
                      areaStyle: {
                          opacity: 0.6,
                          color: new echarts.graphic.LinearGradient(1, 0, 1, 1, [
                              {
                                  offset: 0,
                                  color: "#4177A7",
                              },
                          ]),
                      },
                      data: comingData.coming,
                      z: 5,
                  },
                  {
                      type: "line",
                      name: "year",
                      smooth: 0.6,
                      symbol: "none",
                      lineStyle: {
                          color: "#85D67C",
                          width: 2,
                      },
                      areaStyle: {
                          opacity: 0.3, //그래프 채워지는 불투명도 조정
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                              {
                                  offset: 0.2,
                                  color: "#85D67C",
                              },
                          ]),
                      },
                      itemStyle: {
                          color: "#85D67C",
                      },
                      data: comingData.year,
                  },
                  {
                      type: "line",
                      name: "month",
                      smooth: 0.6,
                      symbol: "none",
                      lineStyle: {
                          color: "#9595F9",
                          width: 2,
                      },
                      areaStyle: {
                          opacity: 0.2, //그래프 채워지는 불투명도 조정
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                              {
                                  offset: 0,
                                  color: "#9595F9",
                              },
                          ]),
                      },
                      itemStyle: {
                          color: "#9595F9",
                      },
                      data: comingData.month,
                  },
                  {
                      type: "line",
                      name: "week",
                      smooth: 0.6,
                      symbol: "none",
                      lineStyle: {
                          color: "#FF6D85",
                          width: 2,
                      },
                      areaStyle: {
                          opacity: 0.2,
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                              {
                                  offset: 0,
                                  color: "#FF6D85",
                              },
                          ]),
                      },
                      itemStyle: {
                          color: "#FF6D85",
                      },
                      data: comingData.week,
                  },
                  {
                      type: "line",
                      name: "day",
                      smooth: 0.6,
                      symbol: "none",
                      lineStyle: {
                          color: "#FFE581",
                          width: 2,
                      },
                      areaStyle: {
                          opacity: 0.1, //그래프 채워지는 불투명도 조정
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                              {
                                  offset: 0,
                                  color: "#FFE581",
                              },
                          ]),
                      },
                      itemStyle: {
                          color: "#FFE581",
                      },
                      data: comingData.day,
                  },
              ],
          }
        : {
              tooltip: {
                  trigger: "axis",
                  show: true,
                  axisPointer: {
                      type: "shadow",
                  },
                  formatter(params) {
                      return `
                <div style =  "margin: -9.5px; padding: 17px; background-color: #05022D; width: 140px; height: 110px; font-size: 15px; color:#FFFFFF;">
                ${params[0].name}<br/>
                <p style = "margin : 4px;">방문 환자 수 : ${params[0].data}명<br/></p>
                <p style = "margin : 4px;">평균 환자 수 : ${params[1].data}명<br/></p>
                <p style = "margin : 4px;">어제 대비 : -3.23% <br/></p>
                </div></div>
                `;
                  },
              },
              legend: {
                  icon: "circle",
                  data: ["year", "month", "week", "day"],
                  textStyle: {
                      color: "white",
                  },
              },
              xAxis: {
                  type: "category",
                  boundaryGap: false,
                  data: comingData.time,
                  axisTick: {
                      show: false,
                  },
              },
              yAxis: {
                  min: 0,
                  max: 1500,
                  interval: 500,
                  type: "value",
                  boundaryGap: [0, "30%"],
              },
              dataZoom: {
                  type: "inside",
                  zoomLock: true,
                  startValue: comingData.coming.length > 12 ? comingData.time[comingData.coming.length - 12] : comingData.time[0],
                  endValue: comingData.coming.length > 12 ? comingData.time[comingData.coming.length - 1] : comingData.time[11],
              },
              grid: {
                  left: "13%",
                  width: "78%",
                  height: "60%",
              },
              series: [
                  {
                      type: "effectScatter",
                      data: comingData.coming,
                      rippleEffect: {
                          scale: 2, //깜빡이는 횟수
                      },
                      itemStyle: {
                          color: "white",
                      },
                      z: 100,
                  },
                  {
                      type: "line",
                      smooth: 0.6,
                      symbol: "none",
                      lineStyle: {
                          color: "#4EACF9",
                          width: 5.8,
                      },
                      areaStyle: {
                          opacity: 0.6,
                          color: new echarts.graphic.LinearGradient(1, 0, 1, 1, [
                              {
                                  offset: 0,
                                  color: "#4177A7",
                              },
                          ]),
                      },
                      data: comingData.coming,
                      z: 5,
                  },
                  {
                      type: "line",
                      name: "year",
                      smooth: 0.6,
                      symbol: "none",
                      lineStyle: {
                          color: "#85D67C",
                          width: 2,
                      },
                      areaStyle: {
                          opacity: 0.3, //그래프 채워지는 불투명도 조정
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                              {
                                  offset: 0.2,
                                  color: "#85D67C",
                              },
                          ]),
                      },
                      itemStyle: {
                          color: "#85D67C",
                      },
                      data: comingData.year,
                  },
                  {
                      type: "line",
                      name: "month",
                      smooth: 0.6,
                      symbol: "none",
                      lineStyle: {
                          color: "#9595F9",
                          width: 2,
                      },
                      areaStyle: {
                          opacity: 0.2, //그래프 채워지는 불투명도 조정
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                              {
                                  offset: 0,
                                  color: "#9595F9",
                              },
                          ]),
                      },
                      itemStyle: {
                          color: "#9595F9",
                      },
                      data: comingData.month,
                  },
                  {
                      type: "line",
                      name: "week",
                      smooth: 0.6,
                      symbol: "none",
                      lineStyle: {
                          color: "#FF6D85",
                          width: 2,
                      },
                      areaStyle: {
                          opacity: 0.2,
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                              {
                                  offset: 0,
                                  color: "#FF6D85",
                              },
                          ]),
                      },
                      itemStyle: {
                          color: "#FF6D85",
                      },
                      data: comingData.week,
                  },
                  {
                      type: "line",
                      name: "day",
                      smooth: 0.6,
                      symbol: "none",
                      lineStyle: {
                          color: "#FFE581",
                          width: 2,
                      },
                      areaStyle: {
                          opacity: 0.1, //그래프 채워지는 불투명도 조정
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                              {
                                  offset: 0,
                                  color: "#FFE581",
                              },
                          ]),
                      },
                      itemStyle: {
                          color: "#FFE581",
                      },
                      data: comingData.day,
                  },
              ],
          };
};
