import React from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';

function Appointment(props) {

    let authschema = {}, intval = {};
    authschema = {
        name: yup.string().required("please enter yor name."),
        email: yup.string().required("please enter email.").email("please enter valid email."),
        phone: yup.string().required("please enter phone.").max(10, '10 Letter Maximum.'),
        date: yup.string().required("please enter date."),
        department: yup.string().required("Selecte department."),
        message: yup.string().required("please enter message.").min(16, 'password must be 16 chracters long.'),
    }
    intval = {
        name: '',
        email: '',
        phone: '',
        date: '',
        department: '',
        massage: ''
    }
    let schema = yup.object().shape(authschema);

    const formik = useFormik({
        initialValues: intval,
        validationSchema: schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const { handleChange, errors, handleSubmit } = formik;

    return (
        <div>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Make an Appointment</h2>
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                    </div>
                    <Formik values={formik} onSubmit={handleSubmit}>
                        <form className="php-email-form">
                            <div className="row">
                                <div className="col-md-4 form-group">
                                    <input onChange={handleChange} type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <div className="validate" />
                                    <p>{errors.name}</p>
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input onChange={handleChange} type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                    <div className="validate" />
                                    <p>{errors.email}</p>
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input onChange={handleChange} type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <div className="validate" />
                                    <p>{errors.phone}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 form-group mt-3">
                                    <input onChange={handleChange} type="datetime" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <div className="validate" />
                                    <p>{errors.date}</p>
                                </div>
                                <div className="col-md-4 form-group mt-3" onChange={handleChange}>
                                    <select name="department" id="department" className="form-select" >
                                        <option value>Select Department</option>
                                        <option value="Department 1">Department 1</option>
                                        <option value="Department 2">Department 2</option>
                                        <option value="Department 3">Department 3</option>
                                    </select>
                                        <p>{errors.department}</p>
                                    <div className="validate" />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <textarea onChange={handleChange} className="form-control" name="message" rows={5} placeholder="Message (Optional)" defaultValue={""} />
                                <div className="validate" />
                                <p>{errors.massage}</p>
                            </div>
                            <div className="mb-3">
                                <div className="loading">Loading</div>
                                <div className="error-message" />

                                <div className="text-center"><button type="submit">Make an Appointment</button></div><div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                            </div>
                        </form>
                    </Formik>
                </div>
            </section>
        </div>
    );
}

export default Appointment;