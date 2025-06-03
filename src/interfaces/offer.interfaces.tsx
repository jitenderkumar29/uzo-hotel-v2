export interface OfferInterface {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  bookingPeriod?: string;
  promoCode?: string;
  categories: string[];
}

export interface FilterCategoryInterface {
  value: string;
  label: string;
}