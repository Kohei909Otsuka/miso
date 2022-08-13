import React, { useState } from "react"
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

type FilterNumberProps = {
  min: number
  max: number
  unit: string | null
  onChange: (min: number, max: number) => void
}

// https://mui.com/material-ui/react-slider/#range-slider
const FilterNumber: React.FC<FilterNumberProps> = (props) => {
  const {
    min,
    max,
    unit,
    onChange
  } = props

  const [value, setValue] = useState<number[]>([min, max])

  const handleChange = (event: Event, newValue: number | number[]) => {
    const newValues = newValue as number[]
    setValue(newValues);
    onChange(newValues[0], newValues[1])
  };

  const valuetext = (value: number) => {
    if (unit) {
      return `${value} ${unit}`
    } else {
      return `${value}`
    }
  }
  return (
    <>
      <Slider
        size="small"
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={min}
        max={max}
        valueLabelFormat={valuetext}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
        <Typography variant="caption" display="block">
          {valuetext(value[0])}
        </Typography>
        <Typography variant="caption" display="block">
          {valuetext(value[1])}
        </Typography>
      </Box>
    </>
  )
}

export default FilterNumber
