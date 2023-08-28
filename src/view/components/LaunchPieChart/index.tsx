import { ResponsivePie } from '@nivo/pie'
import { usePieChartStats } from '../../../app/hooks/usePieChartStats'


export function LaunchPieChart() {
  const { launches } = usePieChartStats()
  if (!launches) return

  return ( 
   <>
      <ResponsivePie
        data={launches}
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
          ["#1971C2", "#2C3E50", "#E8590C"]
        }
        enableArcLinkLabels={false}
        isInteractive={false}
        legends={[
          {
            anchor: 'bottom',
            direction: 'column',
            justify: false,
            translateX: -210,
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
   </>
  )
}