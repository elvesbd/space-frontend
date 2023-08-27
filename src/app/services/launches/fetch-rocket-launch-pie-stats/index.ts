import { sleep } from "../../../utils/sleep";
import { httpClient } from "../../http-client";
import { baseApiPath } from "../constants";
import { RocketLaunchStats } from "./interfaces";
import RocketLaunchPieStatsMapper from "./RocketLaunchPieStatsMapper";


export async function fetchRocketLaunchPieStats() {
  const { data } = await httpClient.get<RocketLaunchStats>(`${baseApiPath}/stats/pie`);
  sleep(5000)
  return RocketLaunchPieStatsMapper.toPersistence(data)
}
