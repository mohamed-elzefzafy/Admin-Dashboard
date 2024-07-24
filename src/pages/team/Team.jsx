import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import {

  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Heading from './../../component/Heading';



const Team = () => {
  const theme = useTheme();
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "age",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              bgcolor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.secondary.dark
                  : theme.palette.error.dark,
              p: "5px",
              mx: "auto",
              width: "99px",
              textAlign: "center",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            {access === "Admin" ? (
              <AdminPanelSettingsOutlined
                fontSize="small"
                sx={{ color: "#fff" }}
              />
            ) : access === "Manager" ? (
              <SecurityOutlined fontSize="small" sx={{ color: "#fff" }} />
            ) : (
              <LockOpenOutlined fontSize="small" sx={{ color: "#fff" }} />
            )}
            <Typography variant="body1" color="#fff" fontSize={"13px"}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: 600, width: "95%", mx: "auto" }}>
<Heading title={"TEAM"} subTitle={"Managing the Team Members"}/>
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
};

export default Team;
