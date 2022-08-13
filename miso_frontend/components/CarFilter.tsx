import React, { useState } from "react"
import { useRouter } from "next/router";
import {CarStatFieldFragment} from "graphql/generated"

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import FilterNumber from "components/FilterNumber"
import FilterListItem from "components/FilterListItem"

export type CarFilterParams = {
  heightMax: number | null;
  heightMin: number | null;
  widthMax: number | null;
  widthMin: number | null;
  lengthMax: number | null;
  lengthMin: number | null;
  zeroToHundredMax: number | null;
  zeroToHundredMin: number | null;
  luggageSizeMax: number | null;
  luggageSizeMin: number | null;
  maxSpeedMax: number | null;
  maxSpeedMin: number | null;
  maxTorqueMax: number | null;
  maxTorqueMin: number | null;
  fuelConsumptionMax: number | null;
  fuelConsumptionMin: number | null;
}

type CardFilterProps = {
  stat: CarStatFieldFragment
  params: CarFilterParams
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
  const router = useRouter()

  const {
    stat,
    params,
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

  const genOnChangeNumber = (minKey: string, maxKey: string) => {
    return (min: number, max: number) => {
      router.push({
        pathname: router.pathname,
        query: {...router.query, [minKey]: min, [maxKey]: max},
      })
    }
  }

  return (
    <div style={{position: "sticky", top: 0}}>
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
            <FilterNumber
              min={stat.heightMin}
              max={stat.heightMax}
              valueMin={params.heightMin}
              valueMax={params.heightMax}
              unit="mm"
              onChange={genOnChangeNumber("heightMin", "heightMax")}
            />
          </FilterListItem>

          <FilterListItem
            label="幅"
            open={openConfig.width}
            handleToggle={() => toggleOpen("width")}
          >
            <FilterNumber
              min={stat.widthMin}
              max={stat.widthMax}
              valueMin={params.widthMin}
              valueMax={params.widthMax}
              unit="mm"
              onChange={genOnChangeNumber("widthMin", "widthMax")}
            />
          </FilterListItem>

          <FilterListItem
            label="長さ"
            open={openConfig.length}
            handleToggle={() => toggleOpen("length")}
          >
            <FilterNumber
              min={stat.lengthMin}
              max={stat.lengthMax}
              valueMin={params.lengthMin}
              valueMax={params.lengthMax}
              unit="mm"
              onChange={genOnChangeNumber("lengthMin", "lengthMax")}
            />
          </FilterListItem>

          <FilterListItem
            label="積載量"
            open={openConfig.luggageSize}
            handleToggle={() => toggleOpen("luggageSize")}
          >
            <FilterNumber
              min={stat.luggageSizeMin}
              max={stat.luggageSizeMax}
              valueMin={params.luggageSizeMin}
              valueMax={params.luggageSizeMax}
              unit="L"
              onChange={genOnChangeNumber("luggageSizeMin", "luggageSizeMax")}
            />
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
            <FilterNumber
              min={stat.zeroToHundredMin}
              max={stat.zeroToHundredMax}
              valueMin={params.zeroToHundredMin}
              valueMax={params.zeroToHundredMax}
              unit="s"
              onChange={genOnChangeNumber("zeroToHundredMin", "zeroToHundredMax")}
            />
          </FilterListItem>

          <FilterListItem
            label="最高速度"
            open={openConfig.maxSpeed}
            handleToggle={() => toggleOpen("maxSpeed")}
          >
            <FilterNumber
              min={stat.maxSpeedMin}
              max={stat.maxSpeedMax}
              valueMin={params.maxSpeedMin}
              valueMax={params.maxSpeedMax}
              unit="km/h"
              onChange={genOnChangeNumber("maxSpeedMin", "maxSpeedMax")}
            />
          </FilterListItem>

          <FilterListItem
            label="最大トルク"
            open={openConfig.maxTorque}
            handleToggle={() => toggleOpen("maxTorque")}
          >
            <FilterNumber
              min={stat.maxTorqueMin}
              max={stat.maxTorqueMax}
              valueMin={params.maxTorqueMin}
              valueMax={params.maxTorqueMax}
              unit="Nm"
              onChange={genOnChangeNumber("maxTorqueMin", "maxTorqueMax")}
            />
          </FilterListItem>

          <FilterListItem
            label="燃費"
            open={openConfig.fuelConsumption}
            handleToggle={() => toggleOpen("fuelConsumption")}
          >
            <FilterNumber
              min={stat.fuelConsumptionMin}
              max={stat.fuelConsumptionMax}
              valueMin={params.fuelConsumptionMin}
              valueMax={params.fuelConsumptionMax}
              unit="km/L"
              onChange={genOnChangeNumber("fuelConsumptionMin", "fuelConsumptionMax")}
            />
          </FilterListItem>
        </List>
      </List>
    </div>
  )
}

export default CardFilter
