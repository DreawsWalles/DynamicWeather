import styles from "./Load.module.css";
import {FileLoader} from "../../Components/Input/FileLoader/FileLoader";
import {useEffect, useState} from "react";
import {Document} from "../../Business/Entities/DocumentEntity/Document";
import {FileView} from "../../Components/FileView/FileView";
import {Button} from "../../Components/Buttons/Button/Button";
import {ErrorView} from "../../Components/ErrorsView/ErrorView";
import {Select} from "../../Components/Input/Select/Select";
import {Option} from "../../Components/Input/Select/ISelectProps";
export function Load(){
    const [errors, setErrors] = useState<string[]>([]);
    const [documents , setDocuments] = useState<Document[]>([]);
    const [options, setOptions] = useState<Option[]>([])
    const [selectDocument, setSelectDocument] = useState<Document>();

    const AddDocument = (newDocument: Document) => {
        setDocuments(prevDocuments => [...prevDocuments, newDocument]);
    };

    const [selectView, setSelectView] = useState<"Documents" | "Errors">("Documents");
    useEffect(() => {
        if(documents.length > 0) {
            let elements: Option[] = []
            documents.forEach((element, index) => {
                elements.push({id: index, name: element.Name});
            })
            setOptions(elements);
            if(selectDocument !== undefined) {
                setSelectDocument(documents[0]);
            }
        }

    }, [documents]);
    useEffect(() => {
        if (documents.length > 0 && !selectDocument) {
            setSelectDocument(documents[0]);
        }
    }, [documents, selectDocument]);
    const onError = (error : string) => {
        setErrors(prevErrors => [...prevErrors, error]);
        setSelectView("Errors");
    }
    const onSelect = (value : string) => {
        setSelectDocument(documents[parseInt(value)]);
    }
    const saveDocuments = () => {

    }
    return(
        <div>
            {documents.length === 0 ?
                (<div className={styles.singleObj}>
                    <FileLoader color={"White"}
                                size={"Large"}
                                onChange={AddDocument}
                                onError={onError}/>
                </div>)
                :
                (<div >
                    <div className={`${styles.container}`}>
                        <div className={`${styles.content}`}>
                            <div className={`${styles.buttons}`}>
                                <div>
                                    <Button textButton={`Документы(${documents.length})`}
                                            color={"White"}
                                            size={"Middle"}
                                            onClick={() => {setSelectView("Documents")}} />
                                </div>
                                <div style={{ minHeight: '20px' }}></div>
                                <div>
                                    {errors.length > 0 ?
                                        <Button textButton={`Ошибки(${errors.length})`}
                                                color={"Red"}
                                                size={"Middle"}
                                                onClick={() => {setSelectView("Errors")}} />
                                        :
                                        <Button textButton={`Ошибки(${errors.length})`}
                                                color={"White"}
                                                size={"Middle"}
                                                onClick={() => {}} />}

                                </div>
                                <div className={styles.loader}>
                                    <FileLoader color={"White"}
                                                size={"Medium"}
                                                onChange={AddDocument}
                                                onError={onError} />
                                </div>
                            </div>
                            <div>
                                {selectView === "Documents" && selectDocument ?
                                    <FileView file={selectDocument!} />
                                    :
                                    <ErrorView errors={errors}/> }
                            </div>
                            <div className={styles.select}>
                                <Select options={options} onSelect={onSelect}/>
                            </div>
                        </div>
                        <div className={`${styles.btnSave}`}>
                            <Button textButton={"Сохранить"}
                                    color={"DarkGreen"}
                                    size={"Large"}
                                    onClick={saveDocuments} />
                        </div>
                    </div>

                </div>)}
        </div>
    )
}