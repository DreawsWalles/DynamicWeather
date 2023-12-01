import * as XLSX from 'xlsx'
import {Worksheet} from "./Worksheet";
import {Node} from "../Node/Node";

class Border {
    chars : string[]
    numStart : number;
    numEnd : number

    constructor(chars: string[], numStart: number, numEnd: number) {
        this.chars = chars;
        this.numStart = numStart;
        this.numEnd = numEnd;
    }
}
export class WorksheetConverter
{
    private startRow = 5;
    public XMLToModel(worksheet : XLSX.WorkSheet) : Worksheet{
        let sheet = new Worksheet();
        let border = this.getBorders(worksheet['!ref']!);
        sheet.Description = worksheet[`${border.chars[0]}${border.numStart}`].v + worksheet[`${border.chars[0]}${border.numStart + 1}`].v;
        for(let i = border.numStart + this.startRow - 1; i < border.numEnd; i++){
            let node = new Node()
            let charIndex = 0;
            node.Date = node.GetDateFromXML(worksheet[`${border.chars[charIndex++]}${i}`], worksheet[`${border.chars[charIndex++]}${i}`]);
            node.Temperature = node.GetTemperature(worksheet[`${border.chars[charIndex++]}${i}`]);
            node.RelativeHumidity = node.GetRelativeHumidity(worksheet[`${border.chars[charIndex++]}${i}`]);
            node.DewPoint = node.GetDewPoint(worksheet[`${border.chars[charIndex++]}${i}`]);
            node.Pressure = node.GetPressure(worksheet[`${border.chars[charIndex++]}${i}`]);
            node.Directions = node.GetWildDirections(worksheet[`${border.chars[charIndex++]}${i}`]);
            node.WildSpeed = node.GetWildSpeed(worksheet[`${border.chars[charIndex++]}${i}`]);
            node.CloudCover = node.GetCloudCover(worksheet[`${border.chars[charIndex++]}${i}`]);
            node.LowerBoundCloudCover = node.GetLowerBoundCloudCover(worksheet[`${border.chars[charIndex++]}${i}`]);
            node.HorizontalVisibility = node.GetHorizontalVisibility(worksheet[`${border.chars[charIndex++]}${i}`]);
            node.WeatherEffects = node.GetWeatherEffects(worksheet[`${border.chars[charIndex++]}${i}`]);
            sheet.Nodes.push(node);
        }
        return sheet;
    }
    private getBorders(str : string) : Border {
        let startChar = str[0];
        let i = 1;
        let tmp = "";
        while(!isNaN(parseInt(str[i]))){
            tmp += str[i];
            i++;
        }
        let startNum = parseInt(tmp);
        i++;
        let endChar = str[i];
        i++;
        tmp = "";
        while(!isNaN(parseInt(str[i]))){
            tmp += str[i];
            i++;
        }
        let endNum = parseInt(tmp);
        const letters = [];
        for (let i = startChar.charCodeAt(0); i <= endChar.charCodeAt(0); i++) {
            letters.push(String.fromCharCode(i));
        }
        return new Border(letters, startNum, endNum);
    }

}