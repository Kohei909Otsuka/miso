import React, { useState } from "react"
import Select from 'react-select';


export type Option = {
  label: string,
  value: string,
}
type FilterMultiSelectProps = {
  options: Option[]
  defaultValues: Option[]
  onChange: (selected: Option[]) => void
}

const FilterMultiSelect: React.FC<FilterMultiSelectProps> = (props) => {
  const { options, defaultValues, onChange} = props
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([])

  const handleChange = (selected: Option[]) => {
    setSelectedOptions(selected)
    onChange(selected)
  }

  return (
    <Select
      isMulti
      defaultValue={defaultValues}
      onChange={handleChange}
      options={options}
    />
  )
}

export default FilterMultiSelect
