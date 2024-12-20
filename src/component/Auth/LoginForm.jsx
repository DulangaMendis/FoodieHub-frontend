import { Button, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../State/Authentication/Action'


const initialValues = {
    UserName: "",
    Password: ""

}
export const LoginForm = () => {
    const navigate = useNavigate()
    const dispatch=useDispatch()

    const handleSubmit = (values) => {
       dispatch(loginUser({userData:values,navigate}))

    }
   
    return (
        <div>

            <Typography variant='h5' className='text-center'>
                Login
            </Typography>
            <Formik onSubmit={handleSubmit} initialValues={initialValues}>

                <Form>

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
                    />
                    <Button sx={{ mt: 2, padding: "0.5rem" }} fullWidth type='submit' variant='contained'>Login</Button>

                </Form>

            </Formik>
            <Typography variant='body2' align='center' sx={{ mt: 3 }}>
                Don't have an account?
                <Button size='small' onClick={() => navigate("/account/register")}>
                    register
                </Button>
            </Typography>


        </div>
    )
}


