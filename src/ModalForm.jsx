import React from "react";
import Modal from "@material-ui/core/Modal";
import {
  Button,
  Container,
  Fade,
  makeStyles,
  Paper,
  TextareaAutosize,
  Typography,
} from "@material-ui/core";
import { Formik } from "formik";
import * as yup from "yup";
import InputValidate from "./InputValidate";
import SelectValidate from "./SelectValidate";
import SwitchValidate from "./SwitchValidate";

const useStyles = makeStyles({
  paper: {
    margin: "0 auto",
    width: "650px",
    height: "800px",
  },
  error: {
    color: "red",
  },
  submit: {
    fontSize: "19px",
    margin: "0px 0px 0px 225px",
  },
  title: {
    margin: "0px 70px 150px 260px"
  },
  close: {
    marginLeft: "200px"
  },
  textarea: {
    width: "600px", margin: "10px"
  },
 total: {
   marginLeft: "400px"
 }

});

const ModalForm = ({ open, setOpen }) => {
  const classes = useStyles();
  const [total, setTotal] = React.useState(0);

  const initialSchema = { name: "", lastName: "", email: "", color: ""}
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .typeError("Должно быть строкой")
      .required("Please fill in first name!"),
    lastName: yup
      .string()
      .typeError("Должно быть строкой")
      .required("Please fill in last name!"),
    email: yup.string().email("Please fill in  email").required("required!"),
    color: yup.string().required("Please select product type!"),
  });

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Fade in={open}>
          <Paper className={classes.paper} elevation={3}>
            <Typography
              component="span"
              variant="h6"
            className={classes.title}
              id="transition-modal-title"
            >
              Title form
            </Typography>{" "}
            <Typography
              component="span"
              variant="h5"
            className={classes.close}
              onClick={handleClose}
            >
              &#10006;
            </Typography>
            <Container>
              <Formik
                initialValues={initialSchema}
                validateOnBlur
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  isValid,

                  dirty,
                }) => (
                  <>
                    <InputValidate
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      values={values}
                      errors={errors}
                      touched={touched}
                    />
                    <SelectValidate
                      setTotal={setTotal}
                      errors={errors}
                      handleBlur={handleBlur}
                      touched={touched}
                      handleChange={handleChange}
                    />
                    <SwitchValidate setTotal={setTotal} />
                    <TextareaAutosize
                      className={classes.textarea}
                      aria-label="minimum height"
                      minRows={10}
                      placeholder="Type your comment"
                    />
                    <Typography component="p" variant="h6">
                      Total price
                      <span className={classes.total} >${total}</span>
                    </Typography>
                    <Button
                      className={classes.submit}
                      disabled={!isValid && !dirty}
                      onClick={handleBlur}
                      type={"submit"}
                      variant="contained"
                      color="primary"
                    >
                      Send form
                    </Button>
                  </>
                )}
              </Formik>
            </Container>
          </Paper>
        </Fade>
      </Modal>
    </>
  );
};

export default ModalForm;
