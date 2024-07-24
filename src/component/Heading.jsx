import { Box, useTheme, Typography } from "@mui/material"


const Heading = ({title , subTitle}) => {
  const theme = useTheme();
  return (
    <Box mb={1} textAlign={"start"}>
      <Typography variant="h5" sx={{color : theme.palette.info.main}}>{title}</Typography>
      <Typography variant="body1" >{subTitle}</Typography>
    </Box>
  )
}

export default Heading;