import {Worksheet} from "../WorkSheet/Worksheet";
import {DocumentConverter} from "./DocumentConverter";

export class Document extends DocumentConverter
{
    public Name: string = "";
    public Description: string = "";
    public Worksheets : Array<Worksheet> = new Array<Worksheet>();
}