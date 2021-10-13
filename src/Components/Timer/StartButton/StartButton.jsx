import next from '../../../Assets/icons/Next.svg'; 
import './StartButton.css'; 



export const StartButton = ({onClick, theme, title, status, reset, nextBtnFunc}) => { 
    return(
        <>
         <div className="startdiv">
            <button onClick={onClick}  className={`startbutton ${theme} `}>{title}</button> 
            {status === "stop" && <img src={next} onClick={nextBtnFunc} className="iconnext" alt="icon" />}
        </div>
    
        {/* {(props.btnStatus === 1) ? <div>
             <button onClick={()=>{props.stop()}} className={`startbutton ${props.theme}`}>STOP</button>
             <img src={next} onClick={()=>{props.reset()}} className="iconnext" alt="icon" /> 
        </div> : ""}
        {(props.btnStatus === 2) ? <div>
             <button onClick={()=>{props.play()}} className={`startbutton ${props.theme}`}>PLAY</button>
             <img src={next} onClick={()=>{props.reset()}}  className="iconnext" alt="icon" /> 
        </div> : ""} */}
        </>
    )
}