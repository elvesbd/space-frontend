import { ResponsiveBar } from "@nivo/bar";
import { useBarChartStats } from "../../../app/hooks";


export function LaunchBarChart() {
  const { launches, yearKey } = useBarChartStats()
  if (!launches) return  

  return (
    <ResponsiveBar
      data={launches}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: "#ddd",
              strokeWidth: 1
            },
          },
          ticks: {
            text: {
              fontSize: 9,
              fill: "#DDD",
            },
          },
        },
        grid: {
          line: {
            stroke: "#DDD",
            strokeWidth: 1,
          },
        },
      }}
      colors={
        ["#000000", "#F57C00", "#1267FC", "#F47560"]
      }
      groupMode="grouped"
      keys={yearKey}
      defs={[
        {
          id: "year"
        }
      ]}
      indexBy="year"
      margin={{ top: 20, right: 50, bottom: 40, left: 50 }}
      padding={0.2}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      enableLabel={false}
      labelTextColor={{
        from: 'color',
        modifiers: [
          [
            'opacity',
            1.6
          ]
        ]
      }}
      axisBottom={
        {
          tickSize: 0,
          tickPadding: 2,
        }
      }
      isInteractive={false}
    />
  )
}