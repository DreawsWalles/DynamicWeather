import {IButtonProps} from "./IButtonProps";
import styles from "./Button.module.css"
import {useEffect, useState} from "react";

export function Button(props: IButtonProps){
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    useEffect(() => {
        switch (props.color)
        {
            case "White":
                setColor(styles.white);
                break;
            case "LightGreen":
                setColor(styles.lightGreen);
                break;
            case "DarkGreen":
                setColor(styles.darkGreen);
                break;
        }
    }, [props.color]);
    useEffect(() => {
        switch (props.size)
        {
            case "Large":
                setSize(styles.large);
                break;
        }
    }, [props.size]);
    return(
        <div>
            <button className={`${size} ${color} ${styles.button}`}
                    onClick={props.onClick}>
                {props.textButton}
            </button>
        </div>
    )
}