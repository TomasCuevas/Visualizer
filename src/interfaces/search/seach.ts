import { IPhoto } from "../";

export interface ISearch {
  total: number;
  total_pages: number;
  results: IPhoto[];
}
