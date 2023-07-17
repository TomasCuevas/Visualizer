import { RootObjectLinks, Status, Urls, User } from "../";

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

export interface TopicSubmissions {
  "food-drink": FoodDrink;
}

export interface FoodDrink {
  approved_on: Date;
  status: Status;
}
