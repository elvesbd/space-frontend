import { httpClient } from "../../http-client";
import StatsPierMapper from "./StatsPierMapper";
import { RocketLaunches } from "./interfaces";



export async function getStatsPie() {
  const { data } = await httpClient.get<RocketLaunches>('launches/stats/pie');
  return StatsPierMapper.toPersistence(data)
}
