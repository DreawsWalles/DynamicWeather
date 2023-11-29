import {Button} from "../../Components/Buttons/Button/Button";
import styles from "./MainPage.module.css"
import {useNavigate} from "react-router";
export function MainPage(props: any){
    const navigate = useNavigate();

    const goToViewPage = () => {
        navigate('/view');
    }
    const goToLoadPage = () => {
        navigate('/load');
    }
    return(
        <div className={styles.container}>
            <Button textButton={"Просмотр"}
                    color={"LightGreen"}
                    size={"Large"}
                    onClick={goToViewPage}/>
            <div className={styles.merge}></div>
            <Button textButton={"Загрузить"}
                    color={"DarkGreen"}
                    size={"Large"} onClick={goToLoadPage}/>
        </div>
    )
}