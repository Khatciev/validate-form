import React, {useEffect} from "react";
import {
    Button,
    Fade,
    makeStyles,
    Paper,
    Box,
    TextField,
    Typography,
    FormControl,
    InputLabel,
    Select, FormGroup, FormControlLabel, Switch, Grid, TextareaAutosize, Container
} from "@material-ui/core";
import Modal from '@material-ui/core/Modal';
import { Formik } from 'formik';
import * as yup from "yup";




const useStyles = makeStyles({
    paper: {
        margin: "0 auto",
        width: "650px",
        height: "725px"
    },
    error: {
        color: "red",
    },
    submit: {
        margin: "15px 0px 0px 225px"
    },
    input: {
        width: "600px"
    },
    boxInput: {
        marginBottom: "15px"
    }
});



function App() {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const [checked, setChecked] = React.useState(false);
    const [total, setTotal] = React.useState(0)
    const [number, setNumber] = React.useState({
        age: '',
        name: 'hai',
    })
    console.log(checked)
    const  validationSchema = yup.object().shape({
        name: yup.string().typeError("Должно быть строкой").required("Обязательно"),
        lastName: yup.string().typeError("Должно быть строкой").required("Обязательно"),
        email: yup.string().email("Введите верный email").required("Обязательно")
    })

    const toggleChecked = (ev) => {
        setChecked(!checked);

    };
    const toggleChecked1 = (ev) => {
        console.log(checked)
        if(!checked) return setTotal(prev => prev + Number(ev.target.value))
        if(checked) return setTotal(prev => prev - Number(ev.target.value))

    };
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    // const handleGet = (ev) => {
    //     setTotal(ev.target.value);
    // };
    const handleUpdate = (event) => {
        setTotal(Number(event.target.value))
        // const name = event.target.name;
        // setNumber({
        //     ...number,
        //     [name]: event.target.value,
        // });
    };
  return (
    <div className="App">
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <Fade in={open}>
                <Paper className={classes.paper} elevation={3}>

                    <Typography  component="span" variant="h6" style={{margin: "0px 70px 150px 260px"}} id="transition-modal-title">Title form</Typography> <Typography component="span" variant="h5" style={{marginLeft: "200px"}} onClick={handleClose} >&#10006;</Typography>
                    <Container>
                        <Formik
                            initialValues={{
                                name: "",
                                lastName: "",
                                email: ""
                            }}
                            validateOnBlur
                            validationSchema={validationSchema}
                            onSubmit={(values) => {console.log(values)}}>
                            {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                                <>
                                    <Box>
                                        <Typography className={classes.boxInput} component="p">
                                            <TextField className={classes.input}  id="outlined-basic" label="First Name" variant="outlined" name={"name"} onChange={handleChange} onBlur={handleBlur} value={values.name}/>
                                          {touched.name && errors.name && <Typography className={classes.error} component="h6">{errors.name}</Typography>}
                                        </Typography>

                                        <Typography className={classes.boxInput} component="p">
                                            <TextField className={classes.input} id="outlined-basic" label="Last Name" variant="outlined"  name={"lastName"} onChange={handleChange} onBlur={handleBlur} value={values.lastName}/>
                                            {touched.lastName && errors.lastName && <Typography className={classes.error} component="h6">{errors.lastName}</Typography>}
                                        </Typography>

                                        <Typography  className={classes.boxInput} component="p">
                                            <TextField className={classes.input} id="outlined-basic" label="user@gmail.com" variant="outlined"  name={"email"} onChange={handleChange} onBlur={handleBlur} value={values.email}/>
                                            {touched.email && errors.email && <Typography className={classes.error} component="h6">{errors.email}</Typography>}
                                        </Typography>
                                    </Box>

                                    <Box style={{margin: "30px 0"}}>
                                        <Typography component="span" variant="h6">Product type</Typography>
                                        <FormControl style={{width: "220px", marginLeft: "250px"}} variant="outlined">
                                            <InputLabel htmlFor="outlined-age-native-simple">Select product type</InputLabel>
                                            <Select
                                                native
                                                onChange={handleUpdate}
                                                label="Select product type"
                                                inputProps={{
                                                    name: 'age',
                                                    id: 'outlined-age-native-simple',
                                                }}
                                            >
                                                <option  aria-label="None" value="" />
                                                <option value={100}>Product 100$</option>
                                                <option  value={200}>Product 200$</option>
                                                <option  value={300}>Product 300$</option>
                                            </Select>
                                        </FormControl>
                                    </Box>

                                    <FormGroup>
                                        <Grid container spacing={10}>
                                            <Grid item={6}>
                                                <Typography component="span" variant="h6">Additional feature for $100</Typography>
                                            </Grid>
                                            <Grid item={6}>
                                                <FormControlLabel  control={<Switch  value={100} checked={checked} color="primary" onClick={toggleChecked}/>}/>
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={10}>
                                            <Grid item={6}>
                                                <Typography component="span" variant="h6">Additional feature for $200</Typography>

                                            </Grid>
                                            <Grid item={6}>
                                                <FormControlLabel control={<Switch value={200} checked={checked}  color="primary" onClick={toggleChecked} />}/>
                                            </Grid>
                                        </Grid>

                                    </FormGroup>

                                    <TextareaAutosize
                                        style={{width: "600px", margin: "10px"}}
                                        aria-label="minimum height"
                                        minRows={10}
                                        // maxRows={}
                                        placeholder="Type your comment"/>
                                    <Typography component="p" variant="h6">Total price <span style={{marginLeft: "400px"}} >${total}</span></Typography>
                                    <Button
                                        className={classes.submit}
                                        disabled={!isValid && !dirty}
                                        onClick={handleBlur}
                                        type={"submit"}
                                        variant="contained"
                                        color="primary" >
                                        Send form
                                    </Button>
                                </>
                            )}
                        </Formik>
                    </Container>
                </Paper>
            </Fade>
        </Modal>
      <Button variant="contained"   color="primary" onClick={handleOpen}>
        Открыть модалку
      </Button>
    </div>
  );
}

export default App;
