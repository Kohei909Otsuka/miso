import React, { useState } from "react"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import FilterNumber from "components/FilterNumber"
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
          <ListItemButton onClick={() => toggleOpen("height")}>
            <ListItemText primary="高さ" primaryTypographyProps={{variant: "body2"}} />
            {openConfig.height ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openConfig.height} timeout="auto" unmountOnExit>
            <Box sx={{pl: 3, pr: 3}}>
              <FilterNumber min={heightMin} max={heightMax} unit="mm"/>
            </Box>
          </Collapse>

          <ListItemButton onClick={() => toggleOpen("width")}>
            <ListItemText primary="幅" primaryTypographyProps={{variant: "body2"}} />
            {openConfig.width ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openConfig.width} timeout="auto" unmountOnExit>
            <Box sx={{pl: 3, pr: 3}}>
              <FilterNumber min={widthMin} max={widthMax} unit="mm"/>
            </Box>
          </Collapse>
        </List>

        <ListItemButton>
          <ListItemText primary="エンジン" />
        </ListItemButton>
      </List>
    </div>
  )
}

export default CardFilter
