import React from "react";
import { Box, FormControl, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  error: {
    color: "red",
  },
  select: {
    borderRadius: "5px",
    height: "50px",
  },
  formControl: {
    width: "220px",
    marginLeft: "250px"
  },
  boxSelect: {
    margin: "30px 0"
  }
});

const SelectValidate = ({
  setTotal,
  errors,
  handleBlur,
  touched,
  handleChange,
}) => {
  const classes = useStyles();

  const handleUpdate = (event) => {
    setTotal(Number(event.target.value));
  };
  return (
    <>
      <Box className={classes.boxSelect}>
        <Typography component="span" variant="h6">
          Product type
        </Typography>
        <FormControl
      className={classes.formControl}
          variant="outlined"
        >
          <select
            className={classes.select}
            name="color"
            onClick={handleUpdate}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="" label="Select product type" />
            <option value={100}>Product 100$</option>
            <option value={200}>Product 200$</option>
            <option value={300}>Product 300$</option>
          </select>
          {touched.color && errors.color && (
            <Typography className={classes.error} component="h6">
              {errors.color}
            </Typography>
          )}
        </FormControl>
      </Box>
    </>
  );
};

export default SelectValidate;
