import s from './Nav.module.css'

export const Nav = () => { 
    return(
        <div className={s.container}>
            <div className={s.box}>
            <div className={s.logotext}>Pomofocus</div>
            <div>
                <button className={s.btn}>Report</button>
                <button className={s.btn}>Setting</button>
                <button className={s.btn}>Login</button>
            </div>
            </div>
            <hr className={s.hr} />
        </div>
    )
}