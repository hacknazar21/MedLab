export interface ISelect {
    key: any,
    className?: string,
    items: string[],
    name: string,
    title: string,
    callback: (event:any) => void
}