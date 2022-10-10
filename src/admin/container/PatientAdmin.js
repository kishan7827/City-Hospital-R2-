import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DataGrid, selectedIdsLookupSelector } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function PatientAdmin(props) {
    const [open, setOpen] = React.useState(false);
    const [id, setdid] = React.useState(false);
    const [dopen, setdOpen] = React.useState(false);
    const [data,setdata] = useState([]);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 70 },
        { field: 'age', headerName: 'Age', width: 130 },
        { field: 'number', headerName: 'Number', width: 130 },
        { 
            field: '', 
            headerName: 'Action', 
            width: 70,
            renderCell: (params) => (
                <IconButton aria-label="delete" onClick={() => { handleDelete(params.row) }}>
                        <DeleteIcon />
                    </IconButton>
            ) 
        }
    ];

    const handleDelete = (data) => {
        setdOpen(true)
        setdid(data.id)
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        getData()
    },[])

    let getData = () => {
        let localdata = JSON.parse(localStorage.getItem("Patient"))
        setdata(localdata)
    }

    const handleAdd = (values) => {
        let localdata = JSON.parse(localStorage.getItem("Patient"))

        let id = Math.floor(Math.random() * 1000)

        let data = { id: id, ...values }

        if (localdata === null) {
            localStorage.setItem("Patient", JSON.stringify([data]))
        } else {
            localdata.push(data);
            localStorage.setItem("Patient", JSON.stringify(localdata))
        }

        setdata(localdata)

        console.log(localdata);
        handleClose()
    }

    let schema = yup.object().shape({
        name: yup.string().required("Please Enter Your Name. "),
        age: yup.number().required("Please Enter Age."),
        number: yup.string().required("Please Enter Number."),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            phonenumber: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            handleAdd(values)
        },
    });

    const { errors, handleChange, handleBlur, handleSubmit, touched } = formik;

    return (
        <div>
            <h1>Patient</h1>

            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Patient Details
                </Button>
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
                    <DialogTitle>Patient Details</DialogTitle>
                    <Formik values={formik}>
                        <Form onSubmit={handleSubmit}>
                            <DialogContent>
                                <TextField
                                    margin="dense"
                                    id="name"
                                    label="Name"
                                    name='name'
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p>{errors.name && touched.name ? errors.name : ''}</p>
                                <TextField
                                    margin="dense"
                                    id="age"
                                    name='age'
                                    label="Age"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p>{errors.age && touched.age ? errors.age : ''}</p>
                                <TextField
                                    margin="dense"
                                    id="number"
                                    name='number'
                                    label="Number"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p>{errors.number && touched.number ? errors.number : ''}</p>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button type='submit'>Add Details</Button>
                            </DialogActions>
                        </Form>
                    </Formik>
                </Dialog>
            </div>
        </div>

    );
}

export default PatientAdmin;