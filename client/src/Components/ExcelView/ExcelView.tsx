import {IExcelViewProps} from "./IExcelViewProps";
import styles from "./ExcelView.module.css"

export function ExcelView(props : IExcelViewProps){

    return(
        <div>
            <div>
            <div className={`row ${styles.table}`}>
                <div>
                    {props.data.Description}
                </div>
                <div className={`row ${styles.title}`}>
                    <div className={`col-1 ${styles.cell}`}>
                        Дата
                    </div>
                    <div className={`col-1 ${styles.cell}`}>
                        Время московское
                    </div>
                    <div className={`col-1 ${styles.cell}`}>
                        T
                    </div>
                    <div className={`col-1 ${styles.cell}`}>
                        Отн. влажность воздуха, %
                    </div>
                    <div className={`col-1 ${styles.cell}`}>
                        Td
                    </div>
                    <div className={`col-1 ${styles.cell}`}>
                        Атм. давление, мм рт.ст.
                    </div>
                    <div className={`col-1 ${styles.cell}`}>
                        Напрвление ветра
                    </div>
                    <div className={`col-1 ${styles.cell}`}>
                        Скорость ветра, м/с
                    </div>
                    <div className={`col-1 ${styles.cell}`}>
                        Облачность, %
                    </div>
                    <div className={`col-1 ${styles.cell}`}>
                        h
                    </div>
                    <div className={`col-1 ${styles.cell}`}>
                        VV
                    </div>
                    <div className={`col-1 ${styles.cell}`}>
                        Погодные явления
                    </div>
                </div>
                <div className={`${styles.cells}`}>
                    {props.data.Nodes.map((element, index) => (
                        <div className={`row ${styles.row}`}>
                            <div className={`col-1 ${styles.cell}`}>
                                {String(element.Date.getDate()).padStart(2, '0')}.
                                {String(element.Date.getMonth() + 1).padStart(2, '0')}.
                                {element.Date.getUTCFullYear()}
                            </div>
                            <div className={`col-1 ${styles.cell}`}>
                                {String(element.Date.getHours()).padStart(2, '0')}:
                                {String(element.Date.getMinutes()).padStart(2, '0')}
                            </div>
                            <div className={`col-1 ${styles.cell}`}>
                                {element.Temperature}
                            </div>
                            <div className={`col-1 ${styles.cell}`}>
                                {element.RelativeHumidity}
                            </div>
                            <div className={`col-1 ${styles.cell}`}>
                                {element.DewPoint}
                            </div>
                            <div className={`col-1 ${styles.cell}`}>
                                {element.Pressure}
                            </div>
                            <div className={`col-1 ${styles.cell}`}>
                                {element.Directions.map((dir, dirIndex) => (
                                    <span>{dir + (dirIndex !== element.Directions.length - 1 ? ',' : '')}</span>
                                ))}
                            </div>
                            <div className={`col-1 ${styles.cell}`}>
                                {element.WildSpeed}
                            </div>
                            <div className={`col-1 ${styles.cell}`}>
                                {isNaN(element.CloudCover!) ? "" : element.CloudCover}
                            </div>
                            <div className={`col-1 ${styles.cell}`}>
                                {element.LowerBoundCloudCover}
                            </div>
                            <div className={`col-1 ${styles.cell}`}>
                                {isNaN(element.HorizontalVisibility!) ? "" : element.HorizontalVisibility}
                            </div>
                            <div className={`col-1 ${styles.cell}`}>
                                {element.WeatherEffects}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </div>
    )
}