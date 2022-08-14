import React from "react"
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';

type FilterListItemProps = {
  children: React.ReactNode
  open: boolean
  handleToggle: () => void
  label: string
}

const FilterListItem: React.FC<FilterListItemProps> = (props) => {
  const {
    children,
    open,
    handleToggle,
    label,
  } = props

  return (
    <>
      <ListItemButton onClick={handleToggle}>
        <ListItemText primary={label} primaryTypographyProps={{variant: "body2"}} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </>
  )
}
export default FilterListItem
