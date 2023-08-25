export type YearlyRocketLaunches = YearlyRocketCount[]

export interface YearlyRocketCount {
  year: number
  rocketCounts: RocketCount[]
}

export interface RocketCount {
  rocket: string
  launchTotal: number
}
