import {IFileLoader} from "./IFileLoader";
import styles from "./FileLoader.module.css"
import * as XLSX from 'xlsx';
import {Converter} from "../../../Business/Converter";

const ids = {
    input: "file-upload-input"
}
export function FileLoader(e : IFileLoader){
    function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files) {
            const countFiles = event.target.files.length;
            let reader = new FileReader();
            for (let i = 0; i < countFiles; i++) {
                debugger
                const file = event.target.files[i];
                const allowedExtensions = ['.xlsx', '.xls', '.xlsm', '.xlsb'];
                const fileExtension = file.name.slice(((file.name.lastIndexOf(".") - 1) >>> 0) + 2);
                if(allowedExtensions.includes(fileExtension)){
                    return;
                }
                reader.onload = (e) => {
                    try {
                        const data = e.target?.result as ArrayBuffer;
                        const workBook = XLSX.read(data, {type: 'buffer'});
                        let result = Converter.XMLToModel(workBook);
                        if(!result){
                            return;
                        }
                        result.Name = file.name;
                    } catch (e) {
                        console.log(e);
                    }

                }
                reader.readAsArrayBuffer(file);
            }
        }
    }

    return(
        <div className={styles.fileUpload}>
            <label className={styles.fileUploadLabel} htmlFor="file-upload-input">
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