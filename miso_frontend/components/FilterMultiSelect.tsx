import React, { useState } from "react"
import Select, {SingleValueProps} from 'react-select';


// TODO: typescriptが落ちる
// https://react-select.com/typescript
export type Option = {
  label: string,
  value: string,
}
type FilterMultiSelectProps = {
  options: Option[]
  defaultValues: Option[]
  onChange: (selected: readonly Option[]) => void
}

const FilterMultiSelect: React.FC<FilterMultiSelectProps> = (props) => {
  const { options, defaultValues, onChange} = props
  const [selectedOptions, setSelectedOptions] = useState< readonly Option[]>([])

  const handleChange = (selected: readonly Option[]) => {
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
