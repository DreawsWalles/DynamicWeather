import {WildDirection} from "./WildDirection";

export class Node
{
    public Date : Date = new Date();
    public Temperature : number = 0;
    public RelativeHumidity : number = 0;
    public DewPoint : number = 0;
    public Pressure : number = 0;
    public Directions : Array<WildDirection> = new Array<WildDirection>();
    public WildSpeed : number = 0;
    public CloudCover : number | null = 0;
    public LowerBoundCloudCover : number = 0;
    public HorizontalVisibility : number | null = 0;
    public WeatherEffects : string | null = "";
}