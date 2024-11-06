import React from 'react'
import { Button, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const initialValues = {
    fullName: "",
    email: "",
    UserName: "",
    Password: "",
    role: "ROLE_CUSTOMER"

}

export const RegisterForm = () => {
    const handleSubmit = (values) => {
        console.log("form values", values)

    }
    const navigate = useNavigate()
    return (

        <div>

            <Typography variant='h5' className='text-center'>
                Register
            </Typography>
            <Formik onSubmit={handleSubmit} initialValues={initialValues}>

                <Form>
                    <Field
                        as={TextField}
                        name="fullName"
                        label="full name"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />

                    <Field
                        as={TextField}
                        name="email"
                        label="email"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />

                    <Field
                        as={TextField}
                        name="userName"
                        label="userName"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
                    <Field
                        as={TextField}
                        name="password"
                        label="password"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        type="password"

                    />

                    <Field
                        fullWidth
                        margin="normal"
                        as={Select}
                        labelId="role-simple-select-label"
                        id="role-simple-select"
                        name="role"

                    >
                        <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                        <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
                    </Field>
                    <Button sx={{ mt: 2, padding: "0.5rem" }} fullWidth type='submit' variant='contained'>Register</Button>

                </Form>

            </Formik>
            <Typography variant='body2' align='center' sx={{ mt: 3 }}>
                if have an account already?
                <Button size='small' onClick={() => navigate("/account/login")}>
                    login
                </Button>
            </Typography>


        </div>
    )
}
