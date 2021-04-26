import { RouterModule } from "@angular/router";

export class Location {
    public locationID: number;
    public name: string;
    public place: string;
    public adress: string;
    public nameAndPlace: string;
    public rooms: Object;

    constructor(locactionID?:number, name?: string, place?: string, adress?: string, nameAndPlace?:string, rooms?:Object){
        this.locationID = locactionID;
        this.name = name;
        this.place = place;
        this.adress = adress;
        this.nameAndPlace = nameAndPlace;
        this.rooms = rooms;
    }
}
