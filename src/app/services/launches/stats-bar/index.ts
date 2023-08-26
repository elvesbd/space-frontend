import { httpClient } from "../../http-client";
import StatsBarMapper from "./StatsBarMapper";
import { YearlyRocketLaunches } from "./interfaces";


export async function getStatsBar() {
  const { data } = await httpClient.get<YearlyRocketLaunches>('launches/stats/bar');
  return StatsBarMapper.toPersistence(data);
 
}
