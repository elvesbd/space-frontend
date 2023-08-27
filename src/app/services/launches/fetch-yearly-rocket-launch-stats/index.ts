import { httpClient } from "../../http-client";
import { baseApiPath } from "../constants";
import YearlyRocketLaunchStatsMapper from "./YearlyRocketLaunchStatsMapper";
import { YearlyRocketLaunchStats } from "./interfaces";


export async function fetchYearlyRocketLaunchStats() {
  const { data } = await httpClient.get<YearlyRocketLaunchStats>(`${baseApiPath}/stats/bar`);
  return YearlyRocketLaunchStatsMapper.toPersistence(data);
}
