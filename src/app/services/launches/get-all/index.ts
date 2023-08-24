import { httpClient } from "../../http-client";


export async function getAll() {
  const { data } = await httpClient.get('/launches');
  return data;
}
