import {IErrorsViewProps} from "./IErrorsViewProps";
import styles from "./ErrorsView.module.css"

export function ErrorView(props : IErrorsViewProps){
    const errors = props.errors;
    return(
        <div className={styles.content}>
            {errors.map((value) => (
                <div className={`${styles.row} row`}>{value}</div>
            ))}
        </div>
    )
}