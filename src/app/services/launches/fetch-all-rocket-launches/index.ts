import { httpClient } from "../../http-client";
import { basePath } from "../constants";
import { Launches } from "./interfaces";


export async function fetchAllRocketLaunches(searchQuery?: string) {
  const { data } = await httpClient.get<Launches>(basePath, {
    params: { search: searchQuery }
  });
  return data;
}
