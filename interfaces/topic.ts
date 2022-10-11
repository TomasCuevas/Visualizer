export interface ITopic {
  cover_photo: CoverPhoto;
  current_user_contributions: any[];
  description: string;
  ends_at: null;
  featured: boolean;
  id: string;
  links: RootObjectLinks;
  only_submissions_after: null;
  owners: User[];
  preview_photos: PreviewPhoto[];
  published_at: Date;
  slug: string;
  starts_at: Date;
  status: string;
  title: string;
  top_contributors: User[];
  total_current_user_submissions: null;
  total_photos: number;
  updated_at: Date;
  visibility: string;
}

export interface CoverPhoto {
  alt_description: null;
  blur_hash: string;
  color: string;
  created_at: Date;
  current_user_collections: any[];
  description: string;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: CoverPhotoLinks;
  promoted_at: null;
  sponsorship: null;
  topic_submissions: TopicSubmissions;
  updated_at: Date;
  urls: Urls;
  user: User;
  width: number;
}

export interface CoverPhotoLinks {
  download: string;
  download_location: string;
  html: string;
  self: string;
}

export interface TopicSubmissions {
  athletics: Athletics;
  health: Athletics;
  people: People;
}

export interface Athletics {
  approved_on: Date;
  status: string;
}

export interface People {
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

export interface RootObjectLinks {
  html: string;
  photos: string;
  self: string;
}

export interface PreviewPhoto {
  blur_hash: string;
  created_at: Date;
  id: string;
  updated_at: Date;
  urls: Urls;
}
