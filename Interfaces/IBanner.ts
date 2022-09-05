export interface IBanner {
    banner: {
        title: string,
        text: string,
        src: string,
        href: string,
        key: any
    }
}
export interface IBanners {
    banners: Array<IBanner>
}
