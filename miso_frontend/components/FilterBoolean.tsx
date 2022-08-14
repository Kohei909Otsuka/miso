import React, { useState } from "react"
import Switch from '@mui/material/Switch';

type FilterBooleanProps = {
  defaultCheck: boolean
  onChange: (checked: boolean) => void
}

const FilterBoolean: React.FC<FilterBooleanProps> = (props) => {
  const { defaultCheck, onChange } = props
  const [checked, setChecked] = useState(defaultCheck)
  const handleChange = () => {
    const newValue = !checked
    setChecked(newValue)
    onChange(newValue)
  }

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
    />
  )
}

export default FilterBoolean
