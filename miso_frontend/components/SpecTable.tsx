import React from "react"
import { CarFieldFragment } from "graphql/generated"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {
  grey,
} from "@mui/material/colors"

type SpecTableProps = {
  cars: CarFieldFragment[]
}


const SpecTable: React.FC<SpecTableProps> = (props) => {
  const { cars } = props

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{background: grey[200]}}>
            <TableCell>Name</TableCell>
            <TableCell align="right">高さ</TableCell>
            <TableCell align="right">幅</TableCell>
            <TableCell align="right">長さ</TableCell>
            <TableCell align="right">積載量</TableCell>
            <TableCell align="right">0-100加速</TableCell>
            <TableCell align="right">最高時速</TableCell>
            <TableCell align="right">最大トルク</TableCell>
            <TableCell align="right">燃費</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cars.map((car) => (
            <TableRow
              key={car.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {car.name}
              </TableCell>
              <TableCell align="right">{car.height + "mm"}</TableCell>
              <TableCell align="right">{car.width + "mm"}</TableCell>
              <TableCell align="right">{car.length + "mm"}</TableCell>
              <TableCell align="right">{car.luggageSize + "L"}</TableCell>
              <TableCell align="right">{car.zeroToHundred + "s"}</TableCell>
              <TableCell align="right">{car.maxSpeed + "km/h"}</TableCell>
              <TableCell align="right">{car.maxTorque + "Nm"}</TableCell>
              <TableCell align="right">{car.fuelConsumption + "km/L"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SpecTable
