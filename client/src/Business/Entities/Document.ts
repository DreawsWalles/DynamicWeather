import {Worksheet} from "./Worksheet";

export class Document
{
    public Name: string = "";
    public Description: string = "";
    public Worksheets : Array<Worksheet> = new Array<Worksheet>();
}