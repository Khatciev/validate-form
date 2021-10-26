import React from "react";
import {
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
  Typography,
} from "@material-ui/core";

const SwitchValidate = ({ setTotal }) => {
  const [checked, setChecked] = React.useState(false);
  const [subChecked, setSubChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked(!checked);
  };
  const subToggleChecked = () => {
    setSubChecked(!subChecked);
  };
  const handleSupToggleTotal = (ev) => {
    if (!checked) return setTotal((prev) => prev + Number(ev.target.value));
    if (checked) return setTotal((prev) => prev - Number(ev.target.value));
  };
  const handleSubToggleTotal = (ev) => {
    if (!subChecked) return setTotal((prev) => prev + Number(ev.target.value));
    if (subChecked) return setTotal((prev) => prev - Number(ev.target.value));
  };
  return (
    <div>
      <FormGroup>
        <Grid container spacing={10}>
          <Grid item={6}>
            <Typography component="span" variant="h6">
              Additional feature for $100
            </Typography>
          </Grid>
          <Grid item={6}>
            <FormControlLabel
              control={
                <Switch
                  value={100}
                  checked={checked}
                  color="primary"
                  onClick={handleSupToggleTotal}
                  onChange={toggleChecked}
                />
              }
            />
          </Grid>
        </Grid>
        <Grid container spacing={10}>
          <Grid item={6}>
            <Typography component="span" variant="h6">
              Additional feature for $200
            </Typography>
          </Grid>
          <Grid item={6}>
            <FormControlLabel
              control={
                <Switch
                  value={200}
                  checked={subChecked}
                  color="primary"
                  onClick={handleSubToggleTotal}
                  onChange={subToggleChecked}
                />
              }
            />
          </Grid>
        </Grid>
      </FormGroup>
    </div>
  );
};

export default SwitchValidate;
