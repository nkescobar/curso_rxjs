
import { GithubUser } from './githut-user';

export interface GithubUsersResp {
  total_count:        number;
  incomplete_results: boolean;
  items:         GithubUser[];
}