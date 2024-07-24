import { Stack, useTheme } from '@mui/material'
import DashboardCard from './DashboardCard'
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { data1, data2, data3, data4 } from './data';


const Row1 = () => {
  const theme  = useTheme();
  return (
  <Stack direction={"row"} sx={{gap : 1 , flexWrap : "wrap" , mt : 3 , justifyContent : {xs : "center" , md : "space-between"}}}>


<DashboardCard scheme={"nivo"} data={data1} icon={ <EmailIcon sx={{fontSize : "23px" , color : theme.palette.secondary.main}}/>} title={"12,361"} subtitle={"Emails Sent"}  increase={"+14%"}/>
<DashboardCard scheme={"category10"} data={data2} icon={ <PointOfSaleIcon sx={{fontSize : "23px" , color : theme.palette.secondary.main}}/>} title={"431,225"} subtitle={"Sales obtained"}  increase={"+21%"}/>
<DashboardCard scheme={"accent"} data={data3} icon={ <PersonAddIcon sx={{fontSize : "23px" , color : theme.palette.secondary.main}}/>} title={"32,441"} subtitle={"New Clients"}  increase={"+5%"}/>
<DashboardCard scheme={"dark2"} data={data4} icon={ <TrafficIcon sx={{fontSize : "23px" , color : theme.palette.secondary.main}}/>} title={"1,325,134"} subtitle={"Traffic Received"}  increase={"+43%"}/>





  </Stack>
  )
}

export default Row1