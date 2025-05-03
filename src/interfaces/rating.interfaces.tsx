// rating Card
export type RatingCardPropsInterFace = {
  reviewScore: string;
  totalRatings: number;
  breakdown: {
    stars: number;
    count: number;
  }[];
};
