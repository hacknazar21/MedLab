export interface IInfo {
    buttons: {
        key: any,
        title: string
    }[],
    tabs: {
       key: any,
       title: string,
       text: string[],
       button: string,
       footer: string
    }[],
    image: string,

}