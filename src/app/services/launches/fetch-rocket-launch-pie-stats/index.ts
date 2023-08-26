import { httpClient } from "../../http-client";
import { basePath } from "../constants";
import { RocketLaunchStats } from "./interfaces";
import RocketLaunchPieStatsMapper from "./RocketLaunchPieStatsMapper";


export async function fetchRocketLaunchPieStats() {
  const { data } = await httpClient.get<RocketLaunchStats>(`${basePath}/stats/pie`);
  return RocketLaunchPieStatsMapper.toPersistence(data)
}
