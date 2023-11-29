import {IFileLoader} from "./IFileLoader";
import styles from "./FileLoader.module.css"
import * as XLSX from 'xlsx';

export function FileLoader(e : IFileLoader){
    function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
        debugger
        const file = event.target.files && event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const data = e.target?.result as ArrayBuffer;
                const workbook = XLSX.read(data, { type: 'array' });

                // Проверка содержимого файла Excel
                if (workbook.SheetNames.length > 0) {
                    const sheetName = workbook.SheetNames[0];
                    const worksheet = workbook.Sheets[sheetName];
                    const parsedData = XLSX.utils.sheet_to_json(worksheet);

                    // Здесь можно проверять и обрабатывать данные из файла Excel
                    debugger
                    console.log(parsedData);
                }
            };
            reader.readAsArrayBuffer(file);
            console.log(file);
            console.log(reader);
        }
    }

    return(
        <div className={styles.fileUpload}>
            <label className={styles.fileUploadLabel} htmlFor="file-upload-input">
                Выберите файл
            </label>
            <input id="file-upload-input"
                    type="file"
                    style={{ display: 'none' }} onChange={handleFileUpload}
            />
        </div>
    );
}