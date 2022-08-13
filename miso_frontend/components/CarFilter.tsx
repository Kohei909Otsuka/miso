import React from "react"
import Typography from '@mui/material/Typography';
// - 寸法
//     t.decimal "height", precision: 10, scale: 2
//     t.decimal "width", precision: 10, scale: 2
//     t.decimal "length", precision: 10, scale: 2
//     t.integer "luggage_size"
// - エンジン
//     t.decimal "zero_to_hundred", precision: 10, scale: 2
//     t.integer "max_speed"
//     t.integer "max_torque"
    // t.decimal "fuel_consumption", precision: 10, scale: 2

type CardFilterProps = {
  heightMin: number
  heightMax: number
  widthMin: number
  widthMax: number
  lengthMin: number
  lengthMax: number
  luggageSizeMin: number
  luggageSizeMax: number
  zeroToHundredMin: number
  zeroToHundredMax: number
  maxSpeedMin: number
  maxSpeedMax: number
  maxTorqueMin: number
  maxTorqueMax: number
  fuelConsumptionMin: number
  fuelConsumptionMax: number
}

const CardFilter: React.FC<CardFilterProps> = (props) => {
  const {
    heightMin,
    heightMax,
    widthMin,
    widthMax,
    lengthMin,
    lengthMax,
    luggageSizeMin,
    luggageSizeMax,
    zeroToHundredMin,
    zeroToHundredMax,
    maxSpeedMin,
    maxSpeedMax,
    maxTorqueMin,
    maxTorqueMax,
    fuelConsumptionMin,
    fuelConsumptionMax,
  } = props

  return (
    <div>
      <Typography>
        寸法
      </Typography>
      <Typography>
        エンジン
      </Typography>
    </div>
  )
}

export default CardFilter
