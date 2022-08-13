import React, { useState } from "react"
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import FilterNumber from "components/FilterNumber"
import FilterListItem from "components/FilterListItem"

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

type OpenConfig = {
    height: boolean
    width: boolean
    length: boolean
    luggageSize: boolean
    zeroToHundred: boolean
    maxSpeed: boolean
    maxTorque: boolean
    fuelConsumption: boolean
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

  const [openConfig, setOpenConfig] = useState<OpenConfig>({
    height: false,
    width: false,
    length: false,
    luggageSize: false,
    zeroToHundred: false,
    maxSpeed: false,
    maxTorque: false,
    fuelConsumption: false,
  })

  const toggleOpen = (k: keyof OpenConfig) => {
    setOpenConfig({...openConfig, [k]: !openConfig[k]})
  }

  return (
    <div>
      <List
      >
        <ListItemButton>
          <ListItemText primary="寸法" />
        </ListItemButton>
        <List component="div" sx={{ pl: 2 }}>
          <FilterListItem
            label="高さ"
            open={openConfig.height}
            handleToggle={() => toggleOpen("height")}
          >
            <FilterNumber min={heightMin} max={heightMax} unit="mm"/>
          </FilterListItem>

          <FilterListItem
            label="幅"
            open={openConfig.width}
            handleToggle={() => toggleOpen("width")}
          >
            <FilterNumber min={widthMin} max={widthMax} unit="mm"/>
          </FilterListItem>

          <FilterListItem
            label="長さ"
            open={openConfig.length}
            handleToggle={() => toggleOpen("length")}
          >
            <FilterNumber min={lengthMin} max={lengthMax} unit="mm"/>
          </FilterListItem>

          <FilterListItem
            label="積載量"
            open={openConfig.luggageSize}
            handleToggle={() => toggleOpen("luggageSize")}
          >
            <FilterNumber min={luggageSizeMin} max={luggageSizeMax} unit="L"/>
          </FilterListItem>
        </List>

        <ListItemButton>
          <ListItemText primary="エンジン" />
        </ListItemButton>
        <List component="div" sx={{ pl: 2 }}>
          <FilterListItem
            label="0-100km/h加速"
            open={openConfig.zeroToHundred}
            handleToggle={() => toggleOpen("zeroToHundred")}
          >
            <FilterNumber min={zeroToHundredMin} max={zeroToHundredMax} unit="s"/>
          </FilterListItem>

          <FilterListItem
            label="最高速度"
            open={openConfig.maxSpeed}
            handleToggle={() => toggleOpen("maxSpeed")}
          >
            <FilterNumber min={maxSpeedMin} max={maxSpeedMax} unit="km/h"/>
          </FilterListItem>

          <FilterListItem
            label="最大トルク"
            open={openConfig.maxTorque}
            handleToggle={() => toggleOpen("maxTorque")}
          >
            <FilterNumber min={maxTorqueMin} max={maxTorqueMax} unit="Nm"/>
          </FilterListItem>

          <FilterListItem
            label="燃費"
            open={openConfig.fuelConsumption}
            handleToggle={() => toggleOpen("fuelConsumption")}
          >
            <FilterNumber min={fuelConsumptionMin} max={fuelConsumptionMax} unit="km/L"/>
          </FilterListItem>
        </List>
      </List>
    </div>
  )
}

export default CardFilter
