export interface IInfo {
  buttons: {
    key: any;
    title: string;
    active?: boolean;
  }[];
  tabs: {
    key: any;
    title: string;
    text: string[];
    button: string;
    footer: string;
  }[];
  image: string;
}
