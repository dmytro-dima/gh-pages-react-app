import * as React from "react";
import { Typography } from "@material-ui/core";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const columns = [
  { field: "id", headerName: "№", width: "4rem" },
  { field: "name", headerName: "Параметр", width: "13rem" },
  { field: "value", headerName: "Значення", width: "13rem" },
];

export default function DataGridDDetails({
  brand,
  year,
  body,
  mileage,
  regions,
  fuel,
  color,
  driven,
}) {
  const rows = [
    { id: 1, name: "brand", value: brand },
    { id: 2, name: "year", value: year },
    { id: 3, name: "body", value: body },
    { id: 4, name: "mileage", value: `${mileage} тис.км.` },
    { id: 5, name: "regions", value: regions },
    { id: 8, name: "fuel", value: fuel },
    { id: 9, name: "color", value: color },
    { id: 11, name: "driven", value: driven },
  ];
  return (
    <div className="ml-5 w-50 h-auto">
      <Typography variant="h6" gutterBottom>
        {brand.toUpperCase()} {year} року.
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map(({ headerName, field }) => (
                <TableCell key={field} align="right">
                  {headerName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(({ id, name, value }) => (
              <TableRow key={id}>
                <TableCell align="right">{id}</TableCell>
                <TableCell align="right">{name}</TableCell>
                <TableCell align="right">{value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
