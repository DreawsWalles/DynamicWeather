import {Logo} from "../Logo/Logo";
import {useEffect, useState} from "react";
import styles from "./Header.module.css";


export function Header(){
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId); // Очистка интервала при размонтировании компонента
    }, []);
    return(
        <div className={styles.content}
             onClick={() => {window.location.href = '/'}}>
            <div className={styles.time}>{currentTime.toLocaleString()}</div>
            <Logo color={"Black"} currentTime={currentTime}/>
            <div className={styles.text}>.net</div>
        </div>
    )
}