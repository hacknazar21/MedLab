export interface IAnalys {
    "id": string,
    "short_title": string,
    "long_title": string,
    "is_unique": boolean,
    "research_id": string,
    "research_time": string,
    "biomaterial": string,
    "price": string,
    "description_patient": string,
    "description_doctor": string,
    "banner_img": string[],
    "document_img": string,
    "main_img": string,
    "is_complex": false,
    "additional": string,
    "tags": string,
    hidden?: boolean
}
