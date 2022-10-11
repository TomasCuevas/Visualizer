export interface ITopicPhoto {
  alt_description: null;
  blur_hash: null | string;
  color: string;
  created_at: Date;
  current_user_collections: any[];
  description: null | string;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: RootObjectLinks;
  promoted_at: Date | null;
  sponsorship: null;
  topic_submissions: TopicSubmissions;
  updated_at: Date;
  urls: Urls;
  user: User;
  width: number;
}

export interface RootObjectLinks {
  download: string;
  download_location: string;
  html: string;
  self: string;
}

export interface TopicSubmissions {
  "food-drink": FoodDrink;
}

export interface FoodDrink {
  approved_on: Date;
  status: Status;
}

export enum Status {
  Approved = "approved",
}

export interface Urls {
  full: string;
  raw: string;
  regular: string;
  small: string;
  small_s3: string;
  thumb: string;
}

export interface User {
  accepted_tos: boolean;
  bio: string;
  first_name: string;
  for_hire: boolean;
  id: string;
  instagram_username: null | string;
  last_name: string;
  links: UserLinks;
  location: string;
  name: string;
  portfolio_url: null | string;
  profile_image: ProfileImage;
  social: Social;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  twitter_username: null | string;
  updated_at: Date;
  username: string;
}

export interface UserLinks {
  followers: string;
  following: string;
  html: string;
  likes: string;
  photos: string;
  portfolio: string;
  self: string;
}

export interface ProfileImage {
  large: string;
  medium: string;
  small: string;
}

export interface Social {
  instagram_username: null | string;
  paypal_email: null;
  portfolio_url: null | string;
  twitter_username: null | string;
}
