import {Document} from "../../../Business/Entities/DocumentEntity/Document";

export interface IFileLoader
{
    color : "White" | "Darkgreen";
    size : "Large";
    onChange : (e : Document) => void;
    onError : (e : string) => void;
}