import { Box, Paper, Stack, Typography, useTheme, IconButton } from "@mui/material"
import Line from "../lineChart/Line"
import { DownloadOutlined } from "@mui/icons-material";
import { Transactions } from "./data";

const Row2 = () => {
  const theme = useTheme();
  return (
    <Stack direction={{xs : "column" , lg : "row"}} flexWrap={"wrap"} gap={1.5} mt={1}>
      <Paper sx={{ maxWidth: {xs : "100%" , lg : 900}, flexGrow: 1 , minWidth : "400px" }}>

<Stack sx={{flexDirection : "row" , flexWrap : "wrap" , justifyContent : "space-between" , alignItems : "center"}}>
<Box>
<Typography variant="h6" mb={1} mt={2} ml={4} color={theme.palette.secondary.main}>Revenue Generated</Typography>
<Typography variant="body1"  ml={4}  >$59,342.32</Typography>
</Box>
<Box>

  <IconButton sx={{mr :3 }} >
    <DownloadOutlined/>
  </IconButton>
</Box>

</Stack>

      
        <Line isDashboard />
      </Paper>
      <Box
        sx={{
          overflow: "auto",
          borderRadius: "4px",
          minWidth: "280px",
          maxHeight: 355,
          flexGrow: 1,
        }}
      >
      <Paper>
          <Typography
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            p={1.2}
            variant="h6"
          >
            Recent Transactions
          </Typography>
        </Paper>


        {Transactions.map(item => 

          <Paper
          key={item.txId}
              sx={{
                mt: 0.4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box p={1.2}>
                <Typography variant="body1">
                
                {item.txId}
                </Typography>
                <Typography variant="body2">
                
                {item.user} 
                </Typography>
              </Box>
              <Typography variant="body1">
              {item.date} 
              </Typography>

              <Typography
                borderRadius={1.4}
                p={1}
                bgcolor={theme.palette.error.main}
                color={theme.palette.getContrastText(theme.palette.error.main)}
                variant="body2"
              >
                ${item.cost}
              </Typography>
            </Paper>
)}



      </Box>
    </Stack>
  )
}

export default Row2;