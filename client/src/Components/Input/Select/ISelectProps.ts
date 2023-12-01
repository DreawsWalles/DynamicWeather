export interface Option
{
    id: number;
    name: string;
}
export interface ISelectProps
{
    options : Option[]
    onSelect: (e : string) => void
}