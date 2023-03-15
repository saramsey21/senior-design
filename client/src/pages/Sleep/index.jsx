import React from 'react';
import { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import SleepBarChart from '../../components/Charts/SleepBarChart';
import SleepLineChart from '../../components/Charts/SleepLineChart';
import Popup from 'reactjs-popup';
import AddSleepData from './sleepData';
import SleepGoal from './sleepGoal';
import RightPanel from '../../components/RightPanel';

import './sleep.css';
const Sleep = () => {

    const [sleepTime, setTime] = useState([8.5, 8.2, 8.2, 7.9, 7.8, 8.5, 8.6, 7.9, 8.0, 8.4, 8.1, 8.0, 8.9, 7.6, 7.9, 10.0, 8.8, 11.0, 9.5]);
    const [sleepWeek, setWeek] = useState(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);
    const [displayTime, setDisplay] = useState();
    const [sleepGoal, setGoal] = useState();
    const [aveSleep, setAve] = useState();

    const updateSleepTime  = (sleepTime) => {
        const totalTime = Number(sleepTime[sleepTime.length - 1]);
        const hours = Math.floor(totalTime);
        const mins = Math.floor(totalTime % Math.floor(totalTime) * 60);
        setDisplay(hours + ' hrs '+ mins + ' mins');
    }

    const updateSleepGoal = (newGoal) => {
        const time = Number(newGoal);
        const hours = Math.floor(time);
        const mins = Math.floor(time % Math.floor(time) * 60);
        setGoal(hours + ' hrs '+ mins + ' mins');
    }

    const updateAveSleep = (sleepTime) => {
        const weekly = parseFloat((sleepTime.slice(-7).reduce((sum, time) => sum + time, 0) / 7).toFixed(2));
        const hours = Math.floor(weekly);
        const mins = Math.floor(weekly % Math.floor(weekly) * 60);
        setAve(hours + ' hrs '+ mins + ' mins');
    }

    const addSleepTime = (newTime) => {
        setTime([
            ...sleepTime,
            newTime
        ])
        setWeek(prevState => [...prevState.slice(1),prevState[0]]);
        //console.log(sleepTime)
    }

    useEffect( () => {
        updateSleepTime(sleepTime);
        updateAveSleep(sleepTime);
    },[sleepTime])
    
    return(
        <section>
            <NavBar />
            <content>
                    <titleContainer>
                        <div>Sleep</div>
                    </titleContainer>
                    <sleepLogContainer>
                        <statusContainer>
                            <statusContent>
                                <sleepLogSection>
                                    <sleepLabel><div> Sleep Score </div></sleepLabel>
                                    <sleepScore><div> 87 </div></sleepScore>
                                </sleepLogSection>
                                <sleepLogSection>
                                    <sleepLabel><div> Sleep Time </div></sleepLabel>
                                    <sleepTime><div> {displayTime} </div></sleepTime>
                                </sleepLogSection>
                                <sleepLogSection>
                                    <sleepLabel><div> Sleep Goal </div></sleepLabel>
                                    <sleepTime><div> {sleepGoal} </div></sleepTime>
                                        <Popup trigger={<button> Edit </button>} position="right center">
                                            <SleepGoal onEditGoal={updateSleepGoal} />
                                        </Popup>
                                </sleepLogSection>
                            </statusContent>
                            <addSleep>
                                <Popup trigger={<button> Click to add sleep time N </button>} position="right center">
                                    <AddSleepData onAddSleepTime={addSleepTime}/>
                                </Popup>
                            </addSleep>
                            <sleepBarChart>
                                <SleepBarChart sleepTime={sleepTime} sleepWeek={sleepWeek}/>
                            </sleepBarChart>
                        </statusContainer>
                    </sleepLogContainer>
                    <sleepAveContainer>
                    <sleepLineChart>
                        <cardTitle>
                            7 days average sleep time: {aveSleep}
                        </cardTitle>
                        <SleepLineChart />
                    </sleepLineChart>
                    </sleepAveContainer>    
            </content>
            <RightPanel />
        </section>
    )
}

export default Sleep;