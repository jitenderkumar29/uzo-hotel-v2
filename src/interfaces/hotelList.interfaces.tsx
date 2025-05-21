export interface HotelInterface {
  name: string;
  address: string;
  rating: number;
}

// [city: string]: Hotel[];
export interface HotelsListInterface {
  cityId: string;
  cityName: string;
  hotels: HotelInterface[];
}