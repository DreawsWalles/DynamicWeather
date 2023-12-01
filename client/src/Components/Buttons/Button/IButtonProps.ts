export interface IButtonProps{
    id?: number | string;
    textButton: string;
    color: "White" | "LightGreen" | "DarkGreen" | "Red";
    size: "Large" | "Small" | "Middle";
    onClick: (e? : any) => void
}