import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Form, Formik, FormikConsumer, useFormik } from 'formik';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function DoctorAdmin(props) {
    const [open, setOpen] = React.useState(false);
    const [dopen, setdOpen] = React.useState(false);
    const [did, setdid] = React.useState(false);
    const [data, setdata] = useState([])
    const [update,setupdate] = useState(false)

    useEffect(() => {
        getdata();
    }, [])

    const getdata = () => {
        let localdata = JSON.parse(localStorage.getItem("DoctorDetails"))
        if (localdata !== null) {
            setdata(localdata);
        }
    }

    const handleDelete = (data) => {
        setdOpen(true)
        setdid(data.id)
    }

    const handleDeleteData = () => {
        let localdata = JSON.parse(localStorage.getItem("DoctorDetails"))

        let Ddata = localdata.filter((l) => l.id !== did)

        localStorage.setItem("DoctorDetails", JSON.stringify(Ddata))

        setdata(Ddata)

        setdOpen(false)
        console.log(Ddata);
    }

    const handleEdit = (data) => {
        setOpen(true)
        setupdate(true)
        formik.setValues(data)
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'doctorname', headerName: 'DoctorName', width: 130 },
        { field: 'doctorage', headerName: 'DoctorAge', width: 130 },
        {
            field: 'doctorexperience',
            headerName: 'DoctorExperience',
            type: 'number',
            width: 90,
        },
        {
            field: '',
            headerName: 'Action',
            width: 90,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="delete" onClick={() => handleDelete(params.row)}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="Edit" onClick={() => handleEdit(params.row)}>
                        <EditIcon />
                    </IconButton>
                </>
            )
        },
    ];

    const handleUpdate = (values) => {
        let localdata = JSON.parse(localStorage.getItem("DoctorDetails"))

        let uData = localdata.map( (l) => {
            if (l.id === values.id) {
                return values;
            }else {
                return l;
            }
        })
        setdata(uData)
        localStorage.setItem("DoctorDetails",JSON.stringify(uData))
        handleClose()
    }

    let schema = yup.object().shape({
        doctorname: yup.string().required('please enter name'),
        doctorage: yup.string().required('please enetr age'),
        doctorexperience: yup.string().required('please enetr experience'),
    });

    const formik = useFormik({
        initialValues: {
            doctorname: '',
            doctorage: '',
            doctorexperience: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            if (update) {
                handleUpdate(values);
            }else {
                handleadddetails(values);
            }
        },
    });

    const { handleBlur, handleChange, handleSubmit, errors, touched, values } = formik;

    const handleClickOpen = () => {
        setOpen(true);
        setupdate(false)
        formik.resetForm()
    };

    const handleClose = () => {
        setOpen(false);
        setdOpen(false)
        setupdate(false)
        formik.resetForm()
    };

    const handleadddetails = (values) => {
        let localdata = JSON.parse(localStorage.getItem("DoctorDetails"))

        let id = Math.floor(Math.random() * 1000)

        let data = { id: id, ...values }

        if (localdata === null) {
            localStorage.setItem("DoctorDetails", JSON.stringify([data]))
        } else {
            localdata.push(data)
            localStorage.setItem("DoctorDetails", JSON.stringify(localdata))
        }
        setOpen(false);
        formik.resetForm();
        getdata()
    }

    return (
        <div>
            <h1>Doctors</h1>
            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Add Doctors Details
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
                    <DialogTitle> Add Doctors Details</DialogTitle>
                    <Formik values={formik}>
                        <Form onSubmit={handleSubmit}>
                            <DialogContent>
                                <TextField
                                    margin="dense"
                                    id="doctorname"
                                    name='doctorname'
                                    label="Doctor Name"
                                    fullWidth
                                    variant="standard"
                                    value={values.doctorname}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p>{errors.doctorname && touched.doctorname ? errors.doctorname : ''}</p>
                                <TextField
                                    margin="dense"
                                    id="doctorage"
                                    name='doctorage'
                                    label="Doctor Age"
                                    fullWidth
                                    variant="standard"
                                    value={values.doctorage}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p>{errors.doctorage && touched.doctorage ? errors.doctorage : ''}</p>
                                <TextField
                                    margin="dense"
                                    id="doctorexperience"
                                    name='doctorexperience'
                                    label="Doctor Experience"
                                    fullWidth
                                    variant="standard"
                                    value={values.doctorexperience}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p>{errors.doctorexperience && touched.doctorexperience ? errors.doctorexperience : ''}</p>
                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Button type='submit'>{update ? "Update Details" : "Add Details" }</Button>
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

export default DoctorAdmin;