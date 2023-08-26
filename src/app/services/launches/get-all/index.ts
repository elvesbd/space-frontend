import { httpClient } from "../../http-client";
import { Launches } from "./interfaces";


export async function getAll(value?: string) {
  const { data } = await httpClient.get<Launches>('/launches', {
    params: { search: value }
  });
  return data;
}
