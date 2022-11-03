export interface ITopic {
  id: string;
  slug: string;
  title: string;
  description: string;
  published_at: string;
  updated_at: string;
  starts_at: string;
  ends_at?: any;
  only_submissions_after: string;
  visibility: string;
  featured: boolean;
  total_photos: number;
  current_user_contributions: any[];
  total_current_user_submissions?: any;
  links: Links;
  status: string;
  owners: Owner[];
  cover_photo: Coverphoto;
  preview_photos: Previewphoto[];
}

interface Previewphoto {
  id: string;
  created_at: string;
  updated_at: string;
  blur_hash: string;
  urls: Urls;
}

interface Coverphoto {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at?: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description?: string;
  alt_description?: any;
  urls: Urls;
  links: Links3;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship?: any;
  topic_submissions: Topicsubmissions;
  user: User;
}

interface User {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username?: string;
  portfolio_url?: string;
  bio?: string;
  location?: string;
  links: Links2;
  profile_image: Profileimage;
  instagram_username?: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social2;
}

interface Social2 {
  instagram_username?: string;
  portfolio_url?: string;
  twitter_username?: string;
  paypal_email?: any;
}

interface Topicsubmissions {
  "street-photography"?: Streetphotography;
  experimental?: Experimental;
  film?: Film;
  "current-events"?: Film;
  "architecture-interior"?: Experimental;
  "3d-renders"?: Film;
  "fashion-beauty"?: Experimental;
  nature?: Experimental;
  spirituality?: Streetphotography;
  "food-drink"?: Experimental;
  "arts-culture"?: Experimental;
  people?: Film;
  athletics?: Experimental;
}

interface Film {
  status: string;
  approved_on?: string;
}

interface Experimental {
  status: string;
  approved_on: string;
}

interface Streetphotography {
  status: string;
}

interface Links3 {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

interface Owner {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name?: any;
  twitter_username: string;
  portfolio_url: string;
  bio: string;
  location: string;
  links: Links2;
  profile_image: Profileimage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
}

interface Social {
  instagram_username: string;
  portfolio_url: string;
  twitter_username: string;
  paypal_email?: any;
}

interface Profileimage {
  small: string;
  medium: string;
  large: string;
}

interface Links2 {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

interface Links {
  self: string;
  html: string;
  photos: string;
}
