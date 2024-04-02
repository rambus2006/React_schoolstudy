import {useEffect, useState} from 'react';


export default function QuestionTimer({timeout,onTimeout}){
    //12-5.초깃값은 timeout이어야 남은 시간이 된다. 
    const [remainingTime,setRemainingTime] = useState(timeout);
    
    //12-5.타이머 리셋
    useEffect(()=>{
        //12-6. 왜 시간이 지나가고 나서 넘어가는지 해결하기 위한 콘솔 
        console.log('setting timeout');
        setTimeout(onTimeout,timeout);
    },[timeout,onTimeout])
    //12-5.값이 적어지면서 시간이 줄어든다. 
    //12-6.다시 실행되지 않는다.  
    useEffect(()=>{
        console.log('setting interval');
        setInterval(()=>{
            setRemainingTime((prevRemainingTime)=>prevRemainingTime - 100)
        },100);
    },[]);

    
    return <progress id="question-time" max={timeout} value={remainingTime}/>
}