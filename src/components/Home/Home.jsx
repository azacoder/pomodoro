import { Tasks } from "../Tasks/Tasks"
import { Timer } from "./Timer/Timer"
import s from './Home.module.css'; 
import { Nav } from "./Nav/Nav";

export const Home = () => { 
    return(
        <div className={s.container}>
            <Nav/>
            <Timer/>
            <Tasks/>
           <div className={s.text}>текст home</div>
        </div>
    )
}