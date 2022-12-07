import { IPhoto } from "./photos";

export interface ISearch {
  total: number;
  total_pages: number;
  results: IPhoto[];
}
