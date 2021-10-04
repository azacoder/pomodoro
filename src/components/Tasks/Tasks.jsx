import s from './Tasks.module.css'

export const Tasks = () => { 
    return(
        <div>
            <div>
                <div className={s.minibox}>
                    <input className={s.task} type="text" placeholder="Write here your tasks..." />
                </div>
            </div>
            <hr className={s.hr}/>
        </div>
    )
}