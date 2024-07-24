import { Box } from '@mui/material';
import Pie from './Pie';
import Heading from '../../component/Heading';



const PieChart = () => {


  return (
<Box>
<Heading title={"Pie Chart"} subTitle={"Simple Pie Chart"}/>
  <Pie/>
</Box>
  )
}

export default PieChart