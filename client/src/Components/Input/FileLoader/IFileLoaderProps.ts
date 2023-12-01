import {Document} from "../../../Business/Entities/DocumentEntity/Document";

export interface IFileLoaderProps
{
    color : "White" | "Darkgreen";
    size : "Large" | "Medium";
    onChange : (e : Document) => void;
    onError : (e : string) => void;
}