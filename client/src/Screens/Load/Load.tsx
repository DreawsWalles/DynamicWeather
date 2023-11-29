import {Button} from "../../Components/Buttons/Button/Button";
import styles from "./Load.module.css";
import {FileLoader} from "../../Components/Input/FileLoader/FileLoader";
export function Load(props: any){
    return(
        <div>
            <FileLoader />
        </div>
    )
}