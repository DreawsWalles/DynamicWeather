import {IFileLoaderProps} from "./IFileLoaderProps";
import styles from "./FileLoader.module.css"
import * as XLSX from 'xlsx';
import {Document} from "../../../Business/Entities/DocumentEntity/Document";
import {useEffect, useState} from "react";

const ids = {
    input: "file-upload-input"
}
export function FileLoader(props : IFileLoaderProps){
    const [color, setColor] = useState<string>("");
    const [size, setSize] = useState<string>("");
    useEffect(() => {
        switch (props.color)
        {
            case
                "White": setColor(styles.White);
                break;
        }
    }, [props.color]);
    useEffect(() => {
        switch (props.size)
        {
            case "Large":
                setSize(styles.large);
                break;
            case "Medium":
                setSize(styles.medium);
                break;
        }
    }, [props.size]);
    function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files) {
            const countFiles = event.target.files.length;
            let reader = new FileReader();
            for (let i = 0; i < countFiles; i++) {
                const file = event.target.files[i];
                const allowedExtensions = ['.xlsx', '.xls', '.xlsm', '.xlsb'];
                const fileExtension = file.name.slice(((file.name.lastIndexOf(".") - 1) >>> 0) + 2);
                if(allowedExtensions.includes(fileExtension)){
                    props.onError(`${file} имеет не правильное расширение`);
                    return;
                }
                reader.onload = (e) => {
                    try {
                        const data = e.target?.result as ArrayBuffer;
                        const workBook = XLSX.read(data, {type: 'buffer'});
                        let result : Document | null = new Document();
                        result = result.XMLToModel(workBook);
                        if(!result){
                            props.onError(`${file.name} пустой`);
                            return;
                        }
                        result.Name = file.name;
                        props.onChange(result);
                    }
                    catch (e : any) {
                        props.onError(`При считывании файла ${file.name} возникла ошибка в столбце ${e.message}`);
                    }

                }
                reader.readAsArrayBuffer(file);
                reader = new FileReader();
            }
        }
    }

    return(
        <div className={`${size}    ${color} ${styles.fileUpload}`}>
            <label className={`${styles.fileUploadLabel}`}
                   htmlFor="file-upload-input">
                Выберите файл
            </label>
            <input id={ids.input}
                    type="file"
                    style={{ display: 'none' }} onChange={handleFileUpload}
                   multiple
            />
        </div>
    );
}