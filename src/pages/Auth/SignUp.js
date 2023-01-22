import React from "react";
import { Formik } from "formik";
import TextField from "@mui/material/TextField";
import { Button, Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Request } from "../../Api/Conduit.api";
import reactRoute from "../../routes/Routes";
import apiRoutes from "../../routes/apiRoute";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo } from "../../redux/userInfo";

const SignUp = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
  const signUphandler = async (values, actions) => {
    let data = JSON.stringify({
      user: {
        email: values.email,
        password: values.password,
        username: values.username,
      },
    });
    // let data = JSON.stringify(user);
    console.log(data);
    const res = await Request(apiRoutes.register, data, "POST");
    console.log(res);
    if (res.status === 200) {
        toast.success("you are login successfully");
        dispatch(getUserInfo(res.data.user))
        navigate(reactRoute.home)
    } else {
      toast.error(res.data.errors);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        flexDirection: "column",
      }}
    >
      <h1>Sign up</h1>
      <Formik
        initialValues={{ email: "", password: "", username: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={signUphandler}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <TextField
                sx={{ m: 1, width: "50ch" }}
                id="outlined-basic"
                label="Please enter your username..."
                variant="outlined"
                type="username"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
              <Typography sx={{ color: "red" }}>
                {errors.username && touched.username && errors.username}
              </Typography>
              <TextField
                sx={{ m: 1, width: "50ch" }}
                id="outlined-basic"
                label="Please enter your Email..."
                variant="outlined"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <Typography sx={{ color: "red" }}>
                {errors.email && touched.email && errors.email}
              </Typography>

              <TextField
                sx={{ m: 1, width: "50ch" }}
                id="outlined-basic"
                label="please enter your password..."
                variant="outlined"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <Typography sx={{ color: "red" }}>
                {errors.password && touched.password && errors.password}
              </Typography>
              <Button
                variant="contained"
                type="submit"
                color="success"
                disabled={isSubmitting}
              >
                Sign up
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      <Link to={reactRoute.page.auth.signin}>
        <Typography sx={{ m: 2, color: "blue" }}>
          You have an account ?
        </Typography>
      </Link>
    </Box>
  );
};

export default SignUp;
