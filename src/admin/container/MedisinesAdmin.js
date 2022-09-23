import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { DataGrid } from '@mui/x-data-grid';

function MedisinesAdmin(props) {
    const [open, setOpen] = React.useState(false);
    const [data,setdata] = useState([])

    useEffect(() => {
        getdata();
    }
    ,[]);

    const getdata = () => {
        let localdata = JSON.parse(localStorage.getItem("medicines"))
        setdata(localdata);
    }    

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        {
            field: 'qty',
            headerName: 'Quantity',
            type: 'number',
            width: 90,
        },
        {
            field: 'expiry',
            headerName: 'Expiry',
            // description: 'This column has a value getter and is not sortable.',
            // sortable: false,
            width: 130,
         },
    ];

    let schema = yup.object().shape({
        name: yup.string().required('please enter your name'),
        price: yup.string().required('please enter price'),
        qty: yup.string().required('please enter quntity'),
        expiry: yup.string().required('please enter expiry'),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            qty: '',
            expiry: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            handleadd(values)
        },
    });

    const { handleBlur, handleChange, handleSubmit, errors, touched } = formik;

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleadd = (values) => {
       let localdata = JSON.parse(localStorage.getItem("medicines"))

        let id = Math.floor(Math.random() * 1000)

        let data = { id: id, ...values }

        if (localdata === null) {
            localStorage.setItem("medicines", JSON.stringify([data]))
        } else {
            localdata.push(data);
            localStorage.setItem("medicines", JSON.stringify(localdata))
        }

        setOpen(false);
        formik.resetForm();
    }

    return (
        <div>
            <h1>Medicines</h1>

            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Add Medicines
                </Button>
                <br/>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={data}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add Medicines</DialogTitle>
                    <Formik values={formik}>
                        <Form onSubmit={handleSubmit}>
                            <DialogContent>
                                <TextField
                                    margin="dense"
                                    id="name"
                                    name='name'
                                    label="Medicines Name"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p>{errors.name && touched.name ? errors.name : ''}</p>
                                <TextField
                                    margin="dense"
                                    id="price"
                                    name='price'
                                    label="Medicines Price"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p>{errors.price && touched.price ? errors.price : ''}</p>
                                <TextField
                                    margin="dense"
                                    id="qty"
                                    name='qty'
                                    label="Medicines Quantity"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p>{errors.qty && touched.qty ? errors.qty : ''}</p>
                                <TextField
                                    margin="dense"
                                    id="expiry"
                                    name='expiry'
                                    label="Medicines Expiry"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p>{errors.expiry && touched.expiry ? errors.expiry : ''}</p>
                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Button type='submit'>Add</Button>
                                </DialogActions>
                            </DialogContent>
                        </Form>
                    </Formik>
                </Dialog>
            </div>
        </div>
    );
}

export default MedisinesAdmin;