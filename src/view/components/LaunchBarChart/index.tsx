import { ResponsiveBar } from "@nivo/bar";
import { useBarChartStats } from "../../../app/hooks";


export function LaunchBarChart() {
  const { launches, yearKey } = useBarChartStats()
  console.log(yearKey)
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
        ["#3498DB", "#2C3E50", "#E74C3C"]
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
      isInteractive={false}
      borderWidth={4}
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
          tickSize: 2.5,
          tickPadding: 1,
          tickRotation: 63
        }
      }
    />
  )
}