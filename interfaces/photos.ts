export interface IPhoto {
  alt_description: null | string;
  blur_hash: string;
  categories: any[];
  color: string;
  created_at: Date;
  current_user_collections: any[];
  description: null;
  downloads: number;
  exif: Exif;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: RootObjectLinks;
  location: Location;
  meta: Meta;
  promoted_at: null;
  public_domain: boolean;
  related_collections: RelatedCollections;
  sponsorship: Sponsorship;
  tags: any[];
  tags_preview: any[];
  topic_submissions: RootObjectTopicSubmissions;
  topics: any[];
  updated_at: Date;
  urls: Urls;
  user: User;
  views: number;
  width: number;
}

export interface Exif {
  aperture: string;
  exposure_time: string;
  focal_length: string;
  iso: number;
  make: string;
  model: string;
  name: string;
}

export interface RootObjectLinks {
  download: string;
  download_location: string;
  html: string;
  self: string;
}

export interface Location {
  city: null;
  country: null;
  name: null;
  position: Position;
  title: null;
}

export interface Position {
  latitude: null;
  longitude: null;
}

export interface Meta {
  index: boolean;
}

export interface RelatedCollections {
  results: Result[];
  total: number;
  type: string;
}

export interface Result {
  cover_photo: ResultCoverPhoto;
  curated: boolean;
  description: null;
  featured: boolean;
  id: string;
  last_collected_at: Date;
  links: ResultLinks;
  preview_photos: PreviewPhoto[];
  private: boolean;
  published_at: Date;
  share_key: string;
  tags: Tag[];
  title: string;
  total_photos: number;
  updated_at: Date;
  user: User;
}

export interface ResultCoverPhoto {
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
  links: RootObjectLinks;
  promoted_at: Date | null;
  sponsorship: null;
  topic_submissions: PurpleTopicSubmissions;
  updated_at: Date;
  urls: Urls;
  user: User;
  width: number;
}

export interface PurpleTopicSubmissions {
  "business-work"?: BusinessWork;
  "digital-nomad"?: BusinessWork;
  entrepreneur?: BusinessWork;
  "textures-patterns"?: BusinessWork;
}

export interface BusinessWork {
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

export interface ResultLinks {
  html: string;
  photos: string;
  related: string;
  self: string;
}

export interface PreviewPhoto {
  blur_hash: string;
  created_at: Date;
  id: string;
  updated_at: Date;
  urls: Urls;
}

export interface Tag {
  source?: Source;
  title: string;
  type: Type;
}

export interface Source {
  ancestry: Ancestry;
  cover_photo: SourceCoverPhoto;
  description: string;
  meta_description: string;
  meta_title: string;
  subtitle: string;
  title: string;
}

export interface Ancestry {
  category?: Category;
  subcategory?: Category;
  type: Category;
}

export interface Category {
  pretty_slug: string;
  slug: string;
}

export interface SourceCoverPhoto {
  alt_description: null | string;
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
  links: RootObjectLinks;
  promoted_at: Date | null;
  sponsorship: null;
  topic_submissions: FluffyTopicSubmissions;
  updated_at: Date;
  urls: Urls;
  user: User;
  width: number;
}

export interface FluffyTopicSubmissions {
  architecture?: BusinessWork;
  "arts-culture"?: BusinessWork;
  "color-of-water"?: BusinessWork;
  experimental?: BusinessWork;
  fashion?: BusinessWork;
  nature?: BusinessWork;
  "textures-patterns"?: BusinessWork;
  wallpapers?: BusinessWork;
}

export enum Type {
  LandingPage = "landing_page",
  Search = "search",
}

export interface Sponsorship {
  impression_urls: any[];
  sponsor: User;
  tagline: string;
  tagline_url: string;
}

export interface RootObjectTopicSubmissions {}
