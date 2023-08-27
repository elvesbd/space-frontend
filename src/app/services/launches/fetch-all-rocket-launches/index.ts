import { httpClient } from "../../http-client";
import { baseApiPath } from "../constants";
import { Launches } from "./interfaces";


export async function fetchAllRocketLaunches(searchQuery?: string) {
  const { data } = await httpClient.get<Launches>(baseApiPath, {
    params: { search: searchQuery }
  });
  return data;
}
