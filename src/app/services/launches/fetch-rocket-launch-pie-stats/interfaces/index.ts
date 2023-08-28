export interface RocketLaunchStats {
  rocketLaunchCounts: RocketLaunchCount[]
  successCount: number
  failureCount: number
}

interface RocketLaunchCount {
  rocketId: string;
  rocketName: string;
  successCount: number
  failureCount: number
}
