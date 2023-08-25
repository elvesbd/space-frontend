export interface RocketLaunches {
  rocketLaunchCounts: RocketLaunchCount[]
  successRocketLaunches: number
  failureRocketLaunches: number
}

interface RocketLaunchCount {
  rocket: string
  name: string
  successCount: number
  failureCount: number
}
