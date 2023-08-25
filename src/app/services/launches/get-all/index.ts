import { httpClient } from "../../http-client";
import { Launches } from "./interfaces";


export async function getAll() {
  const { data } = await httpClient.get<Launches>('/launches');
  return data;
}
