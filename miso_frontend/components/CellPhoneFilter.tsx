import React, { useState } from "react"
import { useRouter } from "next/router";
import {CellPhoneStatFieldFragment} from "graphql/generated"

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';

import FilterNumber from "components/FilterNumber"
import FilterBoolean from "components/FilterBoolean"
import FilterMultiSelect, { Option } from "components/FilterMultiSelect"
import FilterListItem from "components/FilterListItem"

export type CellPhoneFilterParams = {
    weightMin: number | null
    weightMax: number | null
    thicknessMin: number | null
    thicknessMax: number | null
    widthMin: number | null
    widthMax: number | null
    heightMin: number | null
    heightMax: number | null
    screenSizeMin: number | null
    screenSizeMax: number | null
    refreshRateMin: number | null
    refreshRateMax: number | null
    memoryMin: number | null
    memoryMax: number | null
    diskMin: number | null
    diskMax: number | null
    screenKinds: string[]
    isMultiSim: boolean | null
}

type CellPhoneFilterProps = {
  stat: CellPhoneStatFieldFragment
  params: CellPhoneFilterParams
}

type OpenConfig = {
  weight: boolean
  thickness: boolean
  width: boolean
  height: boolean
  screenSize: boolean
  refreshRate: boolean
  memory: boolean
  disk: boolean
  screenKinds: boolean
  isMultiSim: boolean
}

const CellPhoneFilter: React.FC<CellPhoneFilterProps> = (props) => {
  const router = useRouter()

  const {
    stat,
    params,
  } = props

  const [openConfig, setOpenConfig] = useState<OpenConfig>({
    weight: false,
    thickness: false,
    width: false,
    height: false,
    screenSize: false,
    refreshRate: false,
    memory: false,
    disk: false,
    screenKinds: false,
    isMultiSim: false,
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

  const genOnChangeBoolean = (key: string) => {
    return (checked: boolean) => {
      // trueのときだけ検索
      if (checked) {
        router.push({
          pathname: router.pathname,
          query: {...router.query, [key]: checked},
        })
      } else {
        delete router.query[key]
        router.push({
          pathname: router.pathname,
          query: {...router.query},
        })
      }
    }
  }

  const genOnChangeMultiSelect = (key: string) => {
    return (selectedOptions: Option[]) => {
      router.push({
        pathname: router.pathname,
        query: {...router.query, [key]: selectedOptions.map(op => op.value)},
      })
    }
  }

  const screenKindOptions = [
    {label: "有機EL", value: "el"},
    {label: "IPS", value: "ips"},
  ]

  return (
    <div style={{position: "sticky", top: 0}}>
      <List
      >
        <ListItemButton>
          <ListItemText primary="デザイン" />
        </ListItemButton>
        <List component="div" sx={{ pl: 2 }}>
          <FilterListItem
            label="重量"
            open={openConfig.weight}
            handleToggle={() => toggleOpen("weight")}
          >
            <Box sx={{pl: 3, pr: 3}}>
              <FilterNumber
                min={stat.weightMin}
                max={stat.weightMax}
                valueMin={params.weightMin}
                valueMax={params.weightMax}
                unit="g"
                onChange={genOnChangeNumber("weightMin", "weightMax")}
              />
            </Box>
          </FilterListItem>

          <FilterListItem
            label="厚さ"
            open={openConfig.thickness}
            handleToggle={() => toggleOpen("thickness")}
          >
            <Box sx={{pl: 3, pr: 3}}>
              <FilterNumber
                min={stat.thicknessMin}
                max={stat.thicknessMax}
                valueMin={params.thicknessMin}
                valueMax={params.thicknessMax}
                unit="mm"
                onChange={genOnChangeNumber("thicknessMin", "thicknessMax")}
              />
            </Box>
          </FilterListItem>

          <FilterListItem
            label="幅"
            open={openConfig.width}
            handleToggle={() => toggleOpen("width")}
          >
            <Box sx={{pl: 3, pr: 3}}>
              <FilterNumber
                min={stat.widthMin}
                max={stat.widthMax}
                valueMin={params.widthMin}
                valueMax={params.widthMax}
                unit="mm"
                onChange={genOnChangeNumber("widthMin", "widthMax")}
              />
            </Box>
          </FilterListItem>

          <FilterListItem
            label="高さ"
            open={openConfig.height}
            handleToggle={() => toggleOpen("height")}
          >
            <Box sx={{pl: 3, pr: 3}}>
              <FilterNumber
                min={stat.heightMin}
                max={stat.heightMax}
                valueMin={params.heightMin}
                valueMax={params.heightMax}
                unit="mm"
                onChange={genOnChangeNumber("heightMin", "heightMax")}
              />
            </Box>
          </FilterListItem>

        </List>

        <ListItemButton>
          <ListItemText primary="ディスプレイ" />
        </ListItemButton>
        <List component="div" sx={{ pl: 2 }}>
          <FilterListItem
            label="スクリーンサイズ"
            open={openConfig.screenSize}
            handleToggle={() => toggleOpen("screenSize")}
          >
            <Box sx={{pl: 3, pr: 3}}>
              <FilterNumber
                min={stat.screenSizeMin}
                max={stat.screenSizeMax}
                valueMin={params.screenSizeMin}
                valueMax={params.screenSizeMax}
                unit="inch"
                onChange={genOnChangeNumber("screenSizeMin", "screenSizeMax")}
              />
            </Box>
          </FilterListItem>

          <FilterListItem
            label="リフレッシュレート"
            open={openConfig.refreshRate}
            handleToggle={() => toggleOpen("refreshRate")}
          >
            <Box sx={{pl: 3, pr: 3}}>
              <FilterNumber
                min={stat.refreshRateMin}
                max={stat.refreshRateMax}
                valueMin={params.refreshRateMin}
                valueMax={params.refreshRateMax}
                unit="Hz/s"
                onChange={genOnChangeNumber("refreshRateMin", "refreshRateMax")}
              />
            </Box>
          </FilterListItem>

          <FilterListItem
            label="種類"
            open={openConfig.screenKinds}
            handleToggle={() => toggleOpen("screenKinds")}
          >
            <Box sx={{pl: 3, pr: 3}}>
              <FilterMultiSelect
                options={screenKindOptions}
                defaultValues={screenKindOptions.filter(op => params.screenKinds.includes(op.value))}
                onChange={genOnChangeMultiSelect("screenKinds")}
              />
            </Box>
          </FilterListItem>
        </List>

        <ListItemButton>
          <ListItemText primary="性能" />
        </ListItemButton>
        <List component="div" sx={{ pl: 2 }}>
          <FilterListItem
            label="メモリ"
            open={openConfig.memory}
            handleToggle={() => toggleOpen("memory")}
          >
            <Box sx={{pl: 3, pr: 3}}>
              <FilterNumber
                min={stat.memoryMin}
                max={stat.memoryMax}
                valueMin={params.memoryMin}
                valueMax={params.memoryMax}
                unit="GB"
                onChange={genOnChangeNumber("memoryMin", "memoryMax")}
              />
            </Box>
          </FilterListItem>

          <FilterListItem
            label="ディスク"
            open={openConfig.disk}
            handleToggle={() => toggleOpen("disk")}
          >
            <Box sx={{pl: 3, pr: 3}}>
              <FilterNumber
                min={stat.diskMin}
                max={stat.diskMax}
                valueMin={params.diskMin}
                valueMax={params.diskMax}
                unit="GB"
                onChange={genOnChangeNumber("diskMin", "diskMax")}
              />
            </Box>
          </FilterListItem>
        </List>

        <ListItemButton>
          <ListItemText primary="便利機能" />
        </ListItemButton>
        <List component="div" sx={{ pl: 2 }}>
          <FilterListItem
            label="マルチsim"
            open={openConfig.isMultiSim}
            handleToggle={() => toggleOpen("isMultiSim")}
          >
            <Box sx={{display: "flex", justifyContent: "flex-end"}}>
              <FilterBoolean
                defaultCheck={params.isMultiSim ? true : false}
                onChange={genOnChangeBoolean("isMultiSim")}
              />
            </Box>
          </FilterListItem>
        </List>
      </List>
    </div>
  )
}

export default CellPhoneFilter
