import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';

function DoctorAdmin(props) {
    const [open, setOpen] = React.useState(false);

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
        validationSchema:schema,
        onSubmit: values => {
            handleadddetails(values);
        },
    });

    const { handleBlur, handleChange, handleSubmit, errors, touched } = formik;

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleadddetails = (values) => {
        console.log(values);
        setOpen(false);
        formik.resetForm();
    }

    return (
        <div>
            <h1>Doctors</h1>
            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Add Doctors Details
                </Button>
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
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p>{errors.doctorexperience && touched.doctorexperience ? errors.doctorexperience : ''}</p>
                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Button type='submit'>Add Details</Button>
                                </DialogActions>
                            </DialogContent>
                        </Form>
                    </Formik>
                </Dialog>
            </div>
        </div>
    );
}

export default DoctorAdmin;