export class Reservation {
    public reservationID: number;
    public customerID: number;
    public customer: object;
    public roomID: number;
    public room: object;
    public date: Date;
    public periodID: number;
    public period: object;
    public price: number;
    public reservationInvoices: object;

    constructor(reservationID?: number, customerID?: number, customer?: object, roomID?: number, room?: object, date?: Date, periodID?: number, period?: object, price?: number, reservationInvoices?: object){
        this.reservationID = reservationID;
        this.customerID = customerID;
        this.customer = customer;
        this.roomID = roomID;
        this.room = room;
        this.date = date;
        this.periodID = periodID;
        this.period = period;
        this.price = price;
        this.reservationInvoices = reservationInvoices;
    }
}
