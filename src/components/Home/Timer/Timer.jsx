import { useState } from 'react';
import s from './Timer.module.css'; 

export const Timer = () => { 
    
    const [minute , setMinute] = useState(25); 
    let [second, setSecond] = useState("00"); 
    let interval ; 

    const timeFunc = () => { 

        clearInterval(interval); 
        interval = setInterval(startTimer ,1000); 
        console.log('func is work');
        
    };

    const startTimer = () => {
        console.log("startTimer func work"); 
        if(second === "00") {
            setSecond(59); 
            setMinute(24); 
        }
         else if (second < 1) { 
            setSecond(second = second - 1); 

        }

    }; 
    

    
    return(
        <div className ={s.container}>
            <div className={s.box}>
                <button className={s.btn}>Pomodoro</button>
                <button className={s.btn}>Short Break</button>
                <button className={s.btn}>Long Break</button>
            </div>
            <div>
                <p className={s.timetext}>{minute}:{second}</p>
            </div>
            <div>
                <button className={s.btn2} onClick={()=>{timeFunc()}} >START</button>
                <p>#1</p>
                <p>Time to focus!</p>
            </div>
        </div>
    )
}