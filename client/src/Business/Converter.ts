import * as XLSX from 'xlsx'
import {Document} from "./Entities/Document";
import {Worksheet} from "./Entities/Worksheet";
import {Node} from "./Entities/Node";
import {WildDirection} from "./Entities/WildDirection";

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
export class Converter
{
    static startRow = 5;
    public static XMLToModel(book: XLSX.WorkBook) : Document | null{
        if(book.SheetNames.length <= 0)
            return null;
        let result = new Document();
        for(let sheetName of book.SheetNames) {
            let sheet = new Worksheet();
            const worksheet = book.Sheets[sheetName];
            sheet.Name = sheetName;
            let border = this.getBorders(worksheet['!ref']!);
            sheet.Description = worksheet[`${border.chars[0]}${border.numStart}`].v;
            for(let i = border.numStart + Converter.startRow - 1; i < border.numEnd; i++){
                let node = new Node()
                let charIndex = 0;
                let date = worksheet[`${border.chars[charIndex++]}${i}`].h;
                let time = worksheet[`${border.chars[charIndex++]}${i}`].h;
                node.Date = this.stringToDate(date, time);
                node.Temperature = parseFloat(worksheet[`${border.chars[charIndex++]}${i}`].v);
                node.RelativeHumidity = parseFloat(worksheet[`${border.chars[charIndex++]}${i}`].v);
                node.DewPoint = parseFloat(worksheet[`${border.chars[charIndex++]}${i}`].v);
                node.Pressure = parseInt(worksheet[`${border.chars[charIndex++]}${i}`].v);
                let tmp = worksheet[`${border.chars[charIndex++]}${i}`].v;
                let tmpArray = tmp.split(',');
                node.Directions = new Array<WildDirection>();
                for(let tmp of tmpArray){
                    node.Directions.push(new WildDirection().Name = tmp.toLowerCase());
                }
                node.WildSpeed = parseFloat(worksheet[`${border.chars[charIndex++]}${i}`].v);
                tmp = worksheet[`${border.chars[charIndex++]}${i}`];
                node.CloudCover = tmp === null ? null : parseFloat(tmp.v);
                node.LowerBoundCloudCover = parseFloat(worksheet[`${border.chars[charIndex++]}${i}`].v);
                tmp = worksheet[`${border.chars[charIndex++]}${i}`];
                node.HorizontalVisibility = tmp === null ? null : parseFloat(tmp.v);
                tmp = worksheet[`${border.chars[charIndex++]}${i}`];
                if(tmp) {
                   node.WeatherEffects = tmp;
                }
                sheet.Nodes.push(node);
            }
            result.Worksheets.push(sheet);
        }
        return result;
    }
    private static getBorders(str : string) : Border {
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
    private static stringToDate(date : string, time : string) : Date{
        const dateArray = date.split('.');
        const timeArray = time.split(':');

        const year = parseInt(dateArray[2]);
        const month = parseInt(dateArray[1]) - 1;
        const day = parseInt(dateArray[0]);

        const hours = parseInt(timeArray[0]);
        const minutes = parseInt(timeArray[1]);
        return new Date(year, month, day, hours, minutes, 0);
    }
}