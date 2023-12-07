import * as XLSX from 'xlsx'
import {Node} from "./Node";
import {WildDirection} from "../WildDirection";

export class NodeConverter
{
    public GetDateFromXML(date : XLSX.WorkSheet, time : XLSX.WorkSheet) : Date{
        let result = Node.stringToDate(date.v, time.v);
        if(result <= new Date())
            new Error("DateTime");
        return result;
    }

    public GetTemperature(node: XLSX.WorkSheet) : number{
        let result = NaN;
        try {
            result = this.getFloatFromString(node.v);
        }
        catch (e) {
            new Error("Temperature");
        }
        return result;
    }

    public GetRelativeHumidity(node : XLSX.WorkSheet) : number{
        let result = NaN;
        try {
            result = this.getFloatFromString(node.v);
        }
        catch (e) {
            new Error("RelativeHumidity");
        }
        return result;
    }
    public GetDewPoint(node : XLSX.WorkSheet) : number{
        let result = NaN;
        try {
            result = this.getFloatFromString(node.v);
        }
        catch (e) {
            new Error("DewPoint");
        }
        return result;
    }
    public GetPressure(node : XLSX.WorkSheet) : number{
        let result = NaN;
        try {
            result = this.getIntFromString(node.v);
        }
        catch (e) {
            new Error("Pressure");
        }
        return result;
    }

    public GetWildDirections(node : XLSX.WorkSheet) : Array<WildDirection>{
    let result = new Array<WildDirection>();
    let data = node.v;
    if(!data || data.trim() === "")
        new Error("WildDirection");
    let tmpArray = data.split(',');
    for(let el of tmpArray)
        result.push(new WildDirection().Name = el.toLowerCase());
    return result;
    }

    public GetWildSpeed(node : XLSX.WorkSheet) : number{
        let result = NaN;
        try {
            result = this.getFloatFromString(node.v);
        }
        catch (e) {
            new Error("WildSpeed");
        }
        return result;
    }

    public GetLowerBoundCloudCover(node : XLSX.WorkSheet) : number{
        let result = NaN;
        try {
            result = this.getFloatFromString(node.v);
        }
        catch (e) {
            new Error("LowerBoundCloudCover");
        }
        return result;
    }

    public GetCloudCover(node : XLSX.WorkSheet) : number | null{
        try {
            return node === null || node === undefined ? null : this.getFloatFromString(node.v);
        }
        catch (e) {
            new Error("CloudCover");
        }
        return null;
    }

    public GetHorizontalVisibility(node : XLSX.WorkSheet) : number | null{
        try {
            return node === null || node === undefined ? null : this.getFloatFromString(node.v);
        }
        catch (e) {
            new Error("HorizontalVisibility");
        }
        return null;
    }
    public GetWeatherEffects(node : XLSX.WorkSheet) : string | null {
        return node === null || node === undefined ? null : node.v.toLowerCase();
    }
    private getFloatFromString(node : string) : number{
        let result = parseFloat(node);
        if(isNaN(result))
            new Error("incorrect data");
        return result;
    }
    private getIntFromString(node : string) : number{
        let result = parseInt(node);
        if(isNaN(result))
            new Error("incorrect data");
        return result;
    }
    private static stringToDate(date : string, time : string) : Date{
        const dateArray = date.split('.');
        const timeArray = time.split(':');

        const year = parseInt(dateArray[2]);
        const month = parseInt(dateArray[1]) - 1;
        const day = parseInt(dateArray[0]);
        if(isNaN(year) || isNaN(month) || isNaN(day))
            new Error("date");

        const hours = parseInt(timeArray[0]);
        const minutes = parseInt(timeArray[1]);
        if(isNaN(hours) || isNaN(minutes))
            new Error("time")
        return new Date(year, month, day, hours, minutes, 0);
    }

}