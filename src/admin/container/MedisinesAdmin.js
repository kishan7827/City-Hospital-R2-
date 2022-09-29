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
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function MedisinesAdmin(props) {
    const [open, setOpen] = React.useState(false);
    const [dopen, setdOpen] = React.useState(false);
    const [did, setdid] = React.useState(false);
    const [data, setdata] = useState([])
    const [update, setupdate] = useState(false)

    useEffect(() => {
        getdata();
    }
        , []);

    const getdata = () => {
        let localdata = JSON.parse(localStorage.getItem("medicines"))

        if (localdata !== null) {
            setdata(localdata);
        }
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
        {
            field: '',
            headerName: 'Action',
            width: 90,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="delete" onClick={() => { handleDelete(params.row) }}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="edit" onClick={() => { handleEdit(params.row) }}>
                        <EditIcon />
                    </IconButton>
                </>
            )

        },
    ];

    const handleEdit = (data) => {
        setOpen(true)
        console.log(data);
        setupdate(true)
        formik.setValues(data)
    }

    const handleDelete = (data) => {
        setdOpen(true)
        setdid(data.id)
    }

    const handleDeleteData = () => {
        let localdata = JSON.parse(localStorage.getItem("medicines"))

        let Ddata = localdata.filter((l) => l.id !== did)

        localStorage.setItem("medicines", JSON.stringify(Ddata))

        setdata(Ddata)

        setdOpen(false)
        console.log(Ddata);
    }

    const handleUpdate = (values) => {
        let localdata = JSON.parse(localStorage.getItem("medicines"))

        let uData = localdata.map((l) => {
            if (l.id === values.id) {
                return values;
            }else {
                return l;
            }
        }) 

        setdata(uData)
        localStorage.setItem("medicines",JSON.stringify(uData))

        handleClose()
    }

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
            if (update) {
                handleUpdate(values)
            } else {
                handleadd(values)
            }
        },
    });

    const { handleBlur, handleChange, handleSubmit, errors, touched, values } = formik;

    const handleClickOpen = () => {
        setOpen(true);
        formik.resetForm()
        setupdate(false)
    };

    const handleClose = () => {
        setOpen(false);
        setdOpen(false)
        setupdate(false)
        formik.resetForm()
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

        getdata();

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
                <br />
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
                                    value={values.name}
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
                                    value={values.price}
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
                                    value={values.qty}
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
                                    value={values.expiry}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p>{errors.expiry && touched.expiry ? errors.expiry : ''}</p>
                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Button type='submit'>{update ? "Update" : "ADD"}</Button>
                                </DialogActions>
                            </DialogContent>
                        </Form>
                    </Formik>
                </Dialog>
                <Dialog open={dopen} onClose={handleClose}>
                    <DialogTitle>Delete Medicines</DialogTitle>
                    <DialogContent>
                        Are You Sure To Delete?

                        <DialogActions>
                            <Button onClick={handleClose}>No</Button>
                            <Button onClick={() => handleDeleteData()}>Yes</Button>
                        </DialogActions>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}

export default MedisinesAdmin;