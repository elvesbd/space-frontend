import { httpClient } from "../../http-client";
import { baseApiPath } from "../constants";
import { Launches } from "./interfaces";


export async function fetchAllRocketLaunches(searchQuery?: string, page = 1, limit = 5) {
  console.log(page);
  const { data } = await httpClient.get<Launches>(baseApiPath, {
    params: {
      search: searchQuery,
      limit,
      page
    }
  });
  return data;
}

