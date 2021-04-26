export class Room {
    public roomID: number;
    public locationID: number;
    public location: object;
    public description: string;
    public priceHour: number;
    public reservations: object;

    constructor(roomID?: number, locationID?: number, location?: object, description?: string, priceHour?: number, reservations?: object) {
        this.roomID = roomID;
        this.locationID = locationID;
        this.location = location;
        this.description = description;
        this.priceHour = priceHour;
        this.reservations = reservations;
    }
}
