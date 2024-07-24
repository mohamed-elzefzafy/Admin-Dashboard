import { Box, Stack } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Button from '@mui/material/Button'
import { FileDownloadOutlined } from "@mui/icons-material";
import Heading from "../../component/Heading";


const Dashboard = () => {
  return (
    <Box>

      <Box textAlign={"right"}>
    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
    <Heading title={"DASHBOARD"} subTitle={"Welcome to your dashboard"}/>
    <Button sx={{p : "6px" , fontSize : {sx : "12px" , md : "15px"} , 
        textTransform : "capitalize"}} variant="contained" color="primary">
          <FileDownloadOutlined />
          Download Reports
        </Button>
    </Stack>
      </Box>

      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  )
}

export default Dashboard;