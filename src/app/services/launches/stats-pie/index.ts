import { httpClient } from "../../http-client";


export async function getStatsPie() {
  const { data } = await httpClient.get('/stats/pie');
  return data;
}
