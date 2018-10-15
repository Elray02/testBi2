export class BankDataModel {
    logos;
    name: string;
    id: number;
    color: string;
    mainImg: string;
    thumbImg: string;

    constructor(
        name: string,
        logos = [],
        id: number
    ) {
        this.id = id;
        this.name  = name ;
        this.logos = logos ;
        this.mainImg =  `https://demo.biapi.pro/2.0/banks/${id}/logos/main`;
        this.thumbImg =  `https://demo.biapi.pro/2.0/banks/${id}/logos/thumbnail`;
    }
}
