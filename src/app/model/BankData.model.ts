export class BankDataModel {
    logos: [];
    name: string;
    id: number;
    color: string;
    mainImg: string;

    constructor(
        name: string,
        logos: [],
        id: number
    ) {
        this.id = id;
        this.name  = name ;
        this.logos = logos ;
        this.mainImg =  `banks/${id}/logos/main`;
    }
}
