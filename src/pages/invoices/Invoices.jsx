import { Box } from "@mui/material"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { columns, rows } from "./data"


const Invoices = () => {
  return (
    <Box sx={{ height: 600, width: "95%", mx: "auto" }}>
    <DataGrid checkboxSelection rows={rows} columns={columns}  slots={{ toolbar: GridToolbar  }} />
  </Box>
  )
}

export default Invoices