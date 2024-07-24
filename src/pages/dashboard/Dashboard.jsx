import { Box } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Button from '@mui/material/Button'
import { FileDownloadOutlined } from "@mui/icons-material";


const Dashboard = () => {
  return (
    <Box>
      <Box textAlign={"right"}>
        <Button sx={{p : "6px" , fontSize : {sx : "12px" , md : "15px"} , 
        textTransform : "capitalize"}} variant="contained" color="primary">
          <FileDownloadOutlined />
          Download Reports
        </Button>
      </Box>

      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  )
}

export default Dashboard;