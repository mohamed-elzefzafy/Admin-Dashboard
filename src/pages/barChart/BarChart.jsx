import { Box } from "@mui/material"
import Bar from "./Bar"
import Heading from "../../component/Heading"



const BarChart = () => {
  return (
<Box>
<Heading title={"CONTACTS"} subTitle={"List of Contacts for Future Reference"}/>
  <Bar/>
</Box>
  )
}

export default BarChart