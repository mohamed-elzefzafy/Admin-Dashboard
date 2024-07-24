import { Alert, Box, Button, MenuItem, Snackbar, Stack, TextField } from "@mui/material"
import { useState } from "react";
import { useForm } from "react-hook-form";
import Heading from "../../component/Heading";


const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manger",
    label: "Manger",
  },
  {
    value: "User",
    label: "User",
  },
];

const Form = () => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  const { register, handleSubmit, watch, formState: { errors } } = useForm();


  const regExpEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const regExpPhone =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const onSubmit = () => {
    console.log("hiiiiiiiii");
    handleClick();
  };
  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: 'flex', flexDirection: 'column', gap: 3
      }}
      noValidate
      autoComplete="off"
    >

<Heading title={"CREATE USER"} subTitle={"Create a New User Profile"}/>

      <Stack direction={{ xs: "column", md: "row" }} gap={2}>
        <TextField error={errors.firstName ? true : false}
         helperText={errors.firstName && "this field is required && minimum length 3"}
        {...register("firstName" , {required: true , minLength : 3})}
         label="First Name" variant="filled" sx={{ flex: 1 }} />
  
      <TextField label="Last Name" variant="filled" sx={{ flex: 1 }}  error={errors.lastName ? true : false}
         helperText={errors.lastName && "this field is required && minimum length 3"}
        {...register("lastName" , {required: true , minLength : 3})}
        />
      </Stack>

      <TextField label="email" variant="filled" 
        error={errors.email ? true : false}
         helperText={errors.email && "insert valid email"}
        {...register("email" , {required: true , pattern : regExpEmail})}
      />
      <TextField label="Contact Number" variant="filled"
          error={errors.phone ? true : false}
         helperText={errors.phone && "insert valid phone number"}
        {...register("phone" , {required: true , pattern : regExpPhone})}
       />
      <TextField label="Adress 1" variant="filled" />
      <TextField label="Adress 2" variant="filled" />


      <TextField
        id="outlined-select-currency"
        variant="filled"
        select
        label="Role"
        defaultValue="User"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ textAlign: "right" }}>
        <Button type="submit" variant="contained" sx={{ textTransform: "capitalize" }}>Create New User</Button>

      </Box>


      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          aut
          variant="filled"
                sx={{ width: '100%' }}
        >
          account created succefully
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default Form;


