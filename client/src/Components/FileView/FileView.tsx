import {IFileViewProps} from "./IFileViewProps";
import styles from "./FileView.module.css"
import {useState} from "react";
import {Button} from "../Buttons/Button/Button";
import {ExcelView} from "../ExcelView/ExcelView";

export function FileView(props : IFileViewProps){
    const ids = {
        buttons : {
            buttonSheets : "button-sheet"
        },
        view : {
            excelView : "ExcelView"
        }
    }
    const document = props.file;
    const sheets = document.Worksheets;
    const [selectIndex, setSelectIndex] = useState(0);

    const clickOnBtnSheet = (element : any) => {
        setSelectIndex(parseInt(element.currentTarget.attributes[0].nodeValue));
    }

    return(
        <div className={`${styles.content}`}>
            <div className={`${styles.title}`}>{document.Name}</div>
            <div className={`${styles.container}`}>
                <div>
                    <div className={`${styles.sheet}`}>
                        <ExcelView id={ids.view.excelView}
                                   data={sheets[selectIndex]} />
                    </div>
                    <div className={`${styles.buttonsSheet}`}>
                        {sheets.map((element, index) => (
                            <Button id={`${index}`}
                                    textButton={element.Name}
                                    color={index === selectIndex ? "White" : "DarkGreen"}
                                    size={"Small"}
                                    onClick={clickOnBtnSheet}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}