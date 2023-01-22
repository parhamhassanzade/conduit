import React from "react";
import { Formik } from "formik";
import TextField from "@mui/material/TextField";
import { Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Request } from "../../Api/Conduit.api";
import reactRoute from "../../routes/Routes";
import apiRoutes from "../../routes/apiRoute";

const SignIn = () => {
    const signInhandler = async (values, actions) => {
        let data = JSON.stringify(values);
        const res = await Request(apiRoutes.login,data,"POST");
        console.log(res);
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
            <h1>Sign in</h1>
            <Formik
                initialValues={{ email: "", password: "" }}
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
                onSubmit={signInhandler}
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
                                gap: "15px",
                            }}
                        >
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
                                Sign in
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
            <Link to={reactRoute.page.auth.signup}>
                <Typography sx={{ m: 2, color: "blue" }}>
                    You need an account ?
                </Typography>
            </Link>
        </Box>
    );
};

export default SignIn;
