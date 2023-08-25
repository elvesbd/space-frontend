import { ResponsivePie } from '@nivo/pie'
import { usePieStats } from '../../../app/hooks/usePieStats'


export function PieChart() {
  const { launches } = usePieStats()
  if (!launches) return

  const data = launches.rocketLaunchCounts.map(launch => ({
    id: launch.rocket,
    label: launch.name,
    value: launch.totalCount
  }))
 
  return (   
    <ResponsivePie
      data={data}
      theme={{
        fontSize: 14,
        textColor: "#FFFFFF",
        legends: {
          text: {
            fontSize: 10.5,
            fontWeight: "normal"
          },
        },
      }}
      margin={{ top: 10, right: -50, bottom: 20, left: 80 }}
      colors={
        ["#000000", "#F57C00", "#1267FC", "#F47560"]
      }
      enableArcLinkLabels={false}
      isInteractive={false}
      legends={[
        {
          anchor: 'bottom',
          direction: 'column',
          justify: false,
          translateX: -205,
          translateY: -120,
          itemsSpacing: 16,
          itemWidth: 100,
          itemHeight: 10,
          itemTextColor: '#0d0e0f',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'square',
        }
      ]}
    />
  )
}