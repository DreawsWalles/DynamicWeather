import * as XLSX from 'xlsx'
import {Document} from "./Document";
import {Worksheet} from "../WorkSheet/Worksheet";



export class DocumentConverter
{
    public XMLToModel(book: XLSX.WorkBook) : Document | null{
        if(book.SheetNames.length <= 0)
            return null;
        let result = new Document();
        for(let sheetName of book.SheetNames) {
            let sheet = new Worksheet();
            sheet = sheet.XMLToModel(book.Sheets[sheetName])
            sheet.Name = sheetName;
            result.Worksheets.push(sheet);
        }
        return result;
    }
}