import React, {useEffect, useRef, useState} from 'react';
import * as echarts from 'echarts';
import Popup from 'reactjs-popup';
import AddSleepData from '../../pages/Sleep/sleepData';

//var dataWeek = [8.8, 11.0, 9.5, 8.9, 7.6, 7.9, 10.3];
var dataMonth = [8.5, 8.2, 8.2, 7.9, 7.8, 8.5, 8.6, 7.9, 8.0, 8.4, 8.1, 8.0];
function SleepBar() {
    const domRef = useRef()
    const [dataWeek, setDataWeek] = useState([8.8, 11.0, 9.5, 8.9, 7.6, 7.9, 10.3]);
    const getData = (data) => {
      setDataWeek(dataWeek.push(Number(data)));
      setDataWeek(dataWeek.slice(1));
      console.log(dataWeek);

    };
    
    function chartInit(){
        const myChart = echarts.init(domRef.current)
        myChart.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
            xAxis: {
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
              },
              yAxis: {
                show: true,
                axisLabel: {
                  formatter: '{value} h'
                }
              },
              series: [
                {
                  type: 'bar',
                  data: dataWeek,
                    itemStyle: {
                        barBorderRadius: 5,
                        borderWidth: 1,
                        borderType: 'solid',
                        color: '#18B283',
                        shadowColor: '#18B283',
                        shadowBlur: 3,
                        opacity: 0.5
                  },
                }
              ],
            toolbox: {
              left: '90%',
                feature: {
                    myTool1:{
                        show: true,
                        title: "Month",
                        icon: 'path://"M11.709,7.438H8.292c-0.234,0-0.427,0.192-0.427,0.427v8.542c0,0.234,0.192,0.427,0.427,0.427h3.417c0.233,0,0.426-0.192,0.426-0.427V7.865C12.135,7.63,11.942,7.438,11.709,7.438 M11.282,15.979H8.719V8.292h2.563V15.979zM6.156,11.709H2.74c-0.235,0-0.427,0.191-0.427,0.426v4.271c0,0.234,0.192,0.427,0.427,0.427h3.417c0.235,0,0.427-0.192,0.427-0.427v-4.271C6.583,11.9,6.391,11.709,6.156,11.709 M5.729,15.979H3.167v-3.416h2.562V15.979zM17.261,3.167h-3.417c-0.235,0-0.427,0.192-0.427,0.427v12.812c0,0.234,0.191,0.427,0.427,0.427h3.417c0.234,0,0.427-0.192,0.427-0.427V3.594C17.688,3.359,17.495,3.167,17.261,3.167 M16.833,15.979h-2.562V4.021h2.562V15.979z"',
                        onclick: function (){
                            myChart.setOption({
                                xAxis: {
                                    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Oct', 'Nov', 'Dec']
                                  },
                                  yAxis: {
                                    show: true
                                  },
                                  series: [
                                    {
                                      type: 'bar',
                                      data: dataMonth,
                                        itemStyle: {
                                            barBorderRadius: 5,
                                            borderWidth: 1,
                                            borderType: 'solid',
                                            color: '#18B283',
                                            shadowColor: '#18B283',
                                            shadowBlur: 3,
                                            opacity: 0.5
                                      },
                                    },
                                  ]
                              });
                        }
                    },
                    myTool2:{
                        show: true,
                        title: "Week",
                        icon: 'path://"M11.709,7.438H8.292c-0.234,0-0.427,0.192-0.427,0.427v8.542c0,0.234,0.192,0.427,0.427,0.427h3.417c0.233,0,0.426-0.192,0.426-0.427V7.865C12.135,7.63,11.942,7.438,11.709,7.438 M11.282,15.979H8.719V8.292h2.563V15.979zM6.156,11.709H2.74c-0.235,0-0.427,0.191-0.427,0.426v4.271c0,0.234,0.192,0.427,0.427,0.427h3.417c0.235,0,0.427-0.192,0.427-0.427v-4.271C6.583,11.9,6.391,11.709,6.156,11.709 M5.729,15.979H3.167v-3.416h2.562V15.979zM17.261,3.167h-3.417c-0.235,0-0.427,0.192-0.427,0.427v12.812c0,0.234,0.191,0.427,0.427,0.427h3.417c0.234,0,0.427-0.192,0.427-0.427V3.594C17.688,3.359,17.495,3.167,17.261,3.167 M16.833,15.979h-2.562V4.021h2.562V15.979z"',
                        onclick: function (){
                            myChart.setOption({
                                xAxis: {
                                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                                  },
                                  yAxis: {
                                    show: true,
                                    axisLabel: {
                                      formatter: '{value} h'
                                    }
                                  },
                                  series: [
                                    {
                                      type: 'bar',
                                      data: dataWeek,
                                        itemStyle: {
                                            barBorderRadius: 5,
                                            borderWidth: 1,
                                            borderType: 'solid',
                                            color: '#18B283',
                                            shadowColor: '#18B283',
                                            shadowBlur: 3,
                                            opacity: 0.5
                                      },
                                    }
                                  ]
                              });
                        }
                    }
                }
            },
            grid:{
              left:'0%',
              right:'0%',
              bottom:'0%',
              containLabel: true
            }
          });
    }
    useEffect( () => {
        chartInit()
    }, [])

    const clickHandler = (event) => {
      getData(event);
      chartInit();
    }
    
    return (
        <div>
          <addSleep>
            <Popup trigger={<button> Click to add sleep time </button>} position="right center">
              <AddSleepData onSubmit={clickHandler} />
            </Popup>
          </addSleep>
          <div className="Bar" ref={domRef} style={{width:'100%',height:'250px'}}></div>
        </div>
    )
}


export default SleepBar