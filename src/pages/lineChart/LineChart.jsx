import { Box } from "@mui/material"
import Line from "./Line"
import Heading from "../../component/Heading"


const LineChart = () => {
  return (
<Box>
<Heading title={"Line Chart"} subTitle={"Simple Line Chart"}/>
  <Line/>
</Box>
  )
}

export default LineChart