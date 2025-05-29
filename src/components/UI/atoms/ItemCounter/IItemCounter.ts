export interface IItemCounter {
    max: number;
    index: number;
    callback: (index: number) => void;
}