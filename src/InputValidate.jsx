import React from "react";
import { Box, makeStyles, TextField, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  error: {
    color: "red",
  },
  input: {
    width: "600px",
  },
  boxInput: {
    marginBottom: "15px",
  },
});

const InputValidate = ({
  handleBlur,
  handleChange,
  values,
  errors,
  touched,
}) => {
  const classes = useStyles();

  return (
    <>
      <Box>
        <Typography className={classes.boxInput} component="p">
          <TextField
            className={classes.input}
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            name={"name"}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          {touched.name && errors.name && (
            <Typography className={classes.error} component="h6">
              {errors.name}
            </Typography>
          )}
        </Typography>

        <Typography className={classes.boxInput} component="p">
          <TextField
            className={classes.input}
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            name={"lastName"}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
          />
          {touched.lastName && errors.lastName && (
            <Typography className={classes.error} component="h6">
              {errors.lastName}
            </Typography>
          )}
        </Typography>

        <Typography className={classes.boxInput} component="p">
          <TextField
            className={classes.input}
            id="outlined-basic"
            label="user@gmail.com"
            variant="outlined"
            name={"email"}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {touched.email && errors.email && (
            <Typography className={classes.error} component="h6">
              {errors.email}
            </Typography>
          )}
        </Typography>
      </Box>
    </>
  );
};

export default InputValidate;
