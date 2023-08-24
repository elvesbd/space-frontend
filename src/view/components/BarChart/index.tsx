import { ResponsiveBar } from "@nivo/bar";


const data = [
  {
    "year": "2001",
    "used falcon 9": 10,
    "new falcon 9": 20,
    "falcon 1": 150,
    "falcon heavy": 4,
  },
  {
    "year": "2002",
    "used falcon 9": 10,
    "new falcon 9": 20,
    "falcon 1": 188,
    "falcon heavy": 4,
  },
  {
    "year": "2003",
    "used falcon 9": 10,
    "new falcon 9": 20,
    "falcon 1": 188,
    "falcon heavy": 4,
  },
  {
    "year": "2004",
    "used falcon 9": 1000,
    "new falcon 9": 20,
    "falcon 1": 188,
    "falcon heavy": 4,
  },
  {
    "year": "2005",
    "used falcon 9": 1000,
    "new falcon 9": 20,
    "falcon 1": 188,
    "falcon heavy": 4,
  },
]

export function BarChart() {
  return (
    <ResponsiveBar
      data={data}
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
      keys={[
        "used falcon 9",
        "new falcon 9",
        "falcon 1",
        "falcon heavy",
      ]}
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