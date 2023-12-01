import {Worksheet} from "../../Business/Entities/WorkSheet/Worksheet";

export interface IExcelViewProps
{
    id? : number | string;
    data : Worksheet;
}