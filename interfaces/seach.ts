import { IPhoto } from "./photos";

export interface ISearch {
  results: IPhoto[];
  total: number;
  total_pages: number;
}

export interface ResultLinks {
  download: string;
  download_location: string;
  html: string;
  self: string;
}

export interface Tag {
  source?: Source;
  title: string;
  type: Type;
}

export interface Source {
  ancestry: Ancestry;
  cover_photo: CoverPhoto;
  description: string;
  meta_description: string;
  meta_title: string;
  subtitle: string;
  title: string;
}

export interface Ancestry {
  category: Category;
  subcategory: Category;
  type: Category;
}

export interface Category {
  pretty_slug: string;
  slug: string;
}

export interface CoverPhoto {
  alt_description: string;
  blur_hash: string;
  categories: any[];
  color: string;
  created_at: Date;
  current_user_collections: any[];
  description: null | string;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: ResultLinks;
  promoted_at: Date;
  sponsorship: null;
  topic_submissions: CoverPhotoTopicSubmissions;
  updated_at: Date;
  urls: Urls;
  user: User;
  width: number;
}

export interface CoverPhotoTopicSubmissions {
  nature?: Nature;
  "textures-patterns"?: Nature;
}

export interface Nature {
  approved_on?: Date;
  status: string;
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
  bio: null | string;
  first_name: string;
  for_hire: boolean;
  id: string;
  instagram_username: null | string;
  last_name: string;
  links: UserLinks;
  location: null | string;
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

export enum Type {
  LandingPage = "landing_page",
  Search = "search",
}

export interface ResultTopicSubmissions {
  architecture?: Architecture;
  "color-of-water"?: Architecture;
  nature?: Nature;
  people?: Architecture;
  "textures-patterns"?: Architecture;
  travel?: Architecture;
  wallpapers?: Architecture;
}

export interface Architecture {
  status: string;
}
