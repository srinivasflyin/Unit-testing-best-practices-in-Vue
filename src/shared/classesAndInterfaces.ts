export interface FilterClass {
    countries: Array<any>;
    cities: Array<any>;
}

export class City {
    name: string = ''
    country: string = ''
    id: number = 0

}

export class Country {
    name: string = ''
    id: number = 0

}
export class HotelObj {
    country: string = ''
    city: string = ''
    imgUrl: string = ''
    name: string = ''
  }