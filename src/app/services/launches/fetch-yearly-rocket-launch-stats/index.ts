import { httpClient } from "../../http-client";
import { basePath } from "../constants";
import YearlyRocketLaunchStatsMapper from "./YearlyRocketLaunchStatsMapper";
import { YearlyRocketLaunchStats } from "./interfaces";


export async function fetchYearlyRocketLaunchStats() {
  const { data } = await httpClient.get<YearlyRocketLaunchStats>(`${basePath}/stats/bar`);
  return YearlyRocketLaunchStatsMapper.toPersistence(data);
}
