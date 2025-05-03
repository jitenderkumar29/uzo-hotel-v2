export interface HotelDataInterface {
  id: number;
  name: string;
  rating: string;
  category: string;
  location: string;
  tags: string[];
  moreTags: string[];
  commonFeature: string;
  features: string[];
  mainImg: string;
  thumbnails: string[];
  totalRatings: number;
  reviewScore: string;
  ratingCategory: string;
  breakdown: {
    stars: number;
    count: number;
  }[];
  leftRoom: number;
  oldPrice: string;
  newPrice: string;
  taxes: string;
}
