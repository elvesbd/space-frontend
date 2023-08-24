import { ResponsivePie } from '@nivo/pie'


const data = [
  {
    "id": "usedFalco9",
    "label": "Used Falcon 9",
    "value": 60,
  },
  {
    "id": "newFalcon9",
    "label": "New Falcon 9",
    "value": 15,
  },
  {
    "id": "falcon1",
    "label": "Falcon 1",
    "value": 15,
  },
  {
    "id": "falconHeavy",
    "label": "Falcon Heavy",
    "value": 10,
  },
]

export function PieChart() {
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
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          size: 50,
          padding: 1,
          stagger: true
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          rotation: -45,
          lineWidth: 6,
          spacing: 10
        }
      ]}
      fill={[
        {
          match: {
            id: 'UsedFalcon9',
          },
          id: 'dots'
        },
        {
          match: {
            id: 'New Falcon 9'
          },
          id: 'dots'
        },
        {
          match: {
            id: 'go'
          },
          id: 'dots'
        },
        {
          match: {
            id: 'go'
          },
          id: 'dots'
        },
      ]}
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