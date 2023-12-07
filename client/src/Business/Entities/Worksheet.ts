import {Node} from "../Node/Node";
import {WorksheetConverter} from "./WorksheetConverter";

export class Worksheet extends WorksheetConverter
{
    public Name : string = "";
    public Description : string = "";
    public Nodes: Array<Node> = new Array<Node>();
}