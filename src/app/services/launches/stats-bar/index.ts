import { httpClient } from "../../http-client";


export async function getStatsBar() {
  const { data } = await httpClient.get('/stats/bar');
  return data;
}
