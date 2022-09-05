import { ISlides } from "./ISilde"
import {IAnalys} from "./IAnalys";

export interface ISlider {
        key: any,
        tab?: string,
        className: string,
        slides: IAnalys[],
        hidden?: boolean
}
