export interface BookingItem {
    firstName: string,
    lastName: string,
    id: string,
    hospitalName: string,
    date: string
}

export interface Hospitals {
    success: boolean,
    count: number,
    pagination: {},
    data: {
        _id: string,
        name: string,
        address: string,
        district: string,
        province: string,
        postalcode: string,
        tel: string,
        picture: string,
        __v: number,
        id: string
    }[]
}