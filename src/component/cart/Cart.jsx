import { Divider, Grid, Modal, TextField } from '@mui/material'
import React from 'react'
import { CartItem } from './CartItem'
import { AddressCard } from './AddressCard'
import { Button, Card } from '@mui/material';
import Box from '@mui/material/Box';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outline: "none",
    boxShadow: 24,
    p: 4,
};

const initialValues = {
    streetAddress: "",
    state: "",
    pincode: "",
    city: ""
}

const validationSchema = Yup.object().shape({
    streetAddress: Yup.string().required("Street address is required"),
    state: Yup.string().required("State is required"),
    pincode: Yup.string().required("Pincode is required"),  // Assuming pincode is a string
    city: Yup.string().required("City is required"),
});

const items = [1, 1, 1]
export const Cart = () => {
    const createOrderUsingSelectedAddress = () => {

    }
    const handleOpenAddressModel = () => setOpen(true)
    const [open, setOpen] = React.useState(false);

    const handleClose = () => setOpen(false);
    const handleSubmit = (value) => {
        console.log("from value", value)
    };

    return (
        <>
            <main className='lg:flex justify-between'>
                <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
                    {items.map((item) => <CartItem></CartItem>)}
                    <Divider></Divider>
                    <div className='billlDetails px-5 text-sm'>

                        <p className='font-extralight py-5 text-white'>
                            Bill Details

                        </p>
                        <div className='space-y-3'>
                            <div className='flex justify-between text-gray-400'>
                                <p>Item Total</p>
                                <p>LKR 3700</p>

                            </div>
                            <div className='flex justify-between text-gray-400'>
                                <p>Diliver Fee</p>
                                <p>LKR 200</p>

                            </div>
                            <div className='flex justify-between text-gray-400'>
                                <p>GST and Restaurant Charges</p>
                                <p>LKR 200</p>

                            </div>
                            <Divider />

                        </div>
                        <div className='flex justify-between text-white pt-5'>
                            <p>Total pay</p>
                            <p>LKR 4100</p>

                        </div>

                    </div>
                </section>
                <Divider orientation='vertical' flexItem />
                <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0 '>
                    <div>
                        <h1 className='text-center font-semibold-text-2xl py-10'
                        >Choose Dilivery Address</h1>

                        <div className='flex gap-5 flex-wrap justify-center'>
                            {[1, 1, 1, 1, 1].map((item, index) => (
                                <AddressCard handleSelectAddress={createOrderUsingSelectedAddress} key={index} showButton={true} />
                            ))}'
                            <Card className='flex gap-5 w-64 p-5'>
                                <AddLocationAltIcon style={{ color: 'white' }} />
                                <div className='space-y-3 text-gray-500'>
                                    <h1 className='font-semibold text-lg text-white'>Add New Address</h1>


                                    <Button
                                        variant='outlined'
                                        fullWidth
                                        onClick={handleOpenAddressModel}
                                    >
                                        Add
                                    </Button>

                                </div>
                            </Card>'
                        </div>
                    </div>

                </section>


            </main>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    <Formik initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}>

                        <Form>

                            <Grid container spacing={2}>

                                <Grid item xs={12}>

                                    <Field
                                        as={TextField}
                                        name="StreetAddress"
                                        label="StreetAddress"
                                        fullWidth
                                        variant="outlined"
                                    // error={!ErrorMessage("streetAddress")}
                                    // helperText={
                                    //     <ErrorMessage>
                                    //         {(msg)=><span className='text-red-600'>(msg)</span>}
                                    //     </ErrorMessage>
                                    // }


                                    />

                                </Grid>
                                <Grid item xs={12}>

                                    <Field
                                        as={TextField}
                                        name="state"
                                        label="state"
                                        fullWidth
                                        variant="outlined"
                                    // error={!ErrorMessage("streetAddress")}
                                    // helperText={
                                    //     <ErrorMessage>
                                    //         {(msg)=><span className='text-red-600'>(msg)</span>}
                                    //     </ErrorMessage>
                                    // }


                                    />

                                </Grid>
                                <Grid item xs={12}>

                                    <Field
                                        as={TextField}
                                        name="City"
                                        label="City"
                                        fullWidth
                                        variant="outlined"
                                    // error={!ErrorMessage("streetAddress")}
                                    // helperText={
                                    //     <ErrorMessage>
                                    //         {(msg)=><span className='text-red-600'>(msg)</span>}
                                    //     </ErrorMessage>
                                    // }


                                    />

                                </Grid>
                                <Grid item xs={12}>

                                    <Field
                                        as={TextField}
                                        name="pincode"
                                        label="pincode"
                                        fullWidth
                                        variant="outlined"
                                    // error={!ErrorMessage("streetAddress")}
                                    // helperText={
                                    //     <ErrorMessage>
                                    //         {(msg)=><span className='text-red-600'>(msg)</span>}
                                    //     </ErrorMessage>
                                    // }


                                    />

                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant='contained' fullWidth type='submit' color='primary'>Diliver Here</Button>

                                </Grid>

                            </Grid>

                        </Form>



                    </Formik>

                </Box>
            </Modal>
        </>
    )
}