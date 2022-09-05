export interface ISlide {
        key: any,
        image: string,
        title: string,
        desc?: string[],
        price?: string,
        href: string,
        date?: string
}
export interface ISlides extends Array<ISlide>{
}