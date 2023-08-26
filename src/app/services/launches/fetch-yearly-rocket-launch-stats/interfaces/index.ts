export type YearlyRocketLaunchStats = YearlyRocketLaunchCount[]

export interface YearlyRocketLaunchCount {
  year: number
  rocketCounts: RocketLaunchCount[]
}

export interface RocketLaunchCount {
  rocket: string
  launchTotal: number
}
