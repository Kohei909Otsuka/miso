import React from "react"
import _ from "lodash"
import { CarFieldFragment } from "graphql/generated"
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Legend,
} from 'recharts';

import {
  red,
  pink,
  purple,
  indigo,
  blue,
  cyan,
  teal,
  green,
  lime,
  orange,
} from "@mui/material/colors"

const COLOR_STRENGTH = 300
const RadarColors = [
  red[COLOR_STRENGTH],
  indigo[COLOR_STRENGTH],
  orange[COLOR_STRENGTH],
  blue[COLOR_STRENGTH],
  teal[COLOR_STRENGTH],
  green[COLOR_STRENGTH],
  purple[COLOR_STRENGTH],
  lime[COLOR_STRENGTH],
  cyan[COLOR_STRENGTH],
  pink[COLOR_STRENGTH],
]
type SpecGraphProps = {
  cars: CarFieldFragment[]
}

const genDataFromCars = (cars: CarFieldFragment[]) => {
  const slugs = cars.map(c => c.slug)

  const design = _.zipObject(slugs, cars.map(c => c.designScore))
  const utility = _.zipObject(slugs, cars.map(c => c.utilityScore))
  const luxury = _.zipObject(slugs, cars.map(c => c.luxuryScore))
  const engine = _.zipObject(slugs, cars.map(c => c.engineScore))
  const cost = _.zipObject(slugs, cars.map(c => c.costScore))
  return [
    {
      ...design,
      subject: "Design",
    },
    {
      ...utility,
      subject: "Utility",
    },
    {
      ...luxury,
      subject: "Luxury",
    },
    {
      ...engine,
      subject: "Engine",
    },
    {
      ...cost,
      subject: "Cost",
    },
  ]
}

// https://recharts.org/en-US/examples/SimpleRadarChart
const SpecGraph: React.FC<SpecGraphProps> = (props) => {
  const { cars } = props
  const data = genDataFromCars(cars)
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        {cars.map((car, idx) => (
          <Radar
            name={car.name}
            dataKey={car.slug}
            fill={RadarColors[idx % RadarColors.length]}
            fillOpacity={0.5}
          />
        ))}
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default SpecGraph
