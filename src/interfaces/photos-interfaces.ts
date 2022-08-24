export interface RootObject {
  alt_description: null | string;
  blur_hash: string;
  categories: any[];
  color: string;
  created_at: string;
  current_user_collections: any[];
  description: null | string;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: RootObjectLinks;
  promoted_at: string | null;
  sponsorship: Sponsorship | null;
  topic_submissions: TopicSubmissions;
  updated_at: string;
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

export interface Sponsorship {
  impression_urls: string[];
  sponsor: User;
  tagline: string;
  tagline_url: string;
}

export interface User {
  accepted_tos: boolean;
  bio: null | string;
  first_name: string;
  for_hire: boolean;
  id: string;
  instagram_username: string;
  last_name: null | string;
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
  updated_at: string;
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
  instagram_username: string;
  paypal_email: null;
  portfolio_url: null | string;
  twitter_username: null | string;
}

export interface TopicSubmissions {
  "business-work"?: BusinessWork;
  interiors?: BusinessWork;
  nature?: Nature;
  people?: Nature;
  travel?: Nature;
}

export interface BusinessWork {
  approved_on: string;
  status: string;
}

export interface Nature {
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
