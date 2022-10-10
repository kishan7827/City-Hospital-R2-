import React from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { useHistory } from "react-router-dom";

function Appointment(props) {
    const history = useHistory()

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    var dateReg = /^\d{2}[./-]\d{2}[./-]\d{4}$/   

    let authschema = {}, intval = {};
    authschema = {
        name: yup.string().required("Please Enter Your Name").matches(/^[A-Za-z ]*$/, 'Please enter valid name'),
        email: yup.string().required("Please Enter Email").email("Please Enter Valid Email"),
        phone: yup.string().required("Please Enter Phone Number").matches(phoneRegExp, 'Phone number is not valid').max(10, '10 Letter Maximum'),
        date: yup.string().required("Please Enter Date").matches(dateReg,'Enter Valid Date'),
        department: yup.string().required("Selecte Department"),
        message: yup.string().required("Please Enter Message.").min(40, 'Message must be 40 chracters long'),
        gender: yup.string().required("Please select gender."),
        hobby: yup.array().required("Please select hobby."),
    }
    intval = {
        name: '',
        email: '',
        phone: '',
        date: '',
        department: '',
        massage: '',
        gender:'',
        hobby:'',
    }
    let schema = yup.object().shape(authschema);

    const handleAdd = (values) => {
        console.log(values);
        let localData = JSON.parse(localStorage.getItem("apt"));

        if (localData === null) {
            localStorage.setItem("apt",JSON.stringify([values]));
        }else {
            localData.push(values)
            localStorage.setItem("apt",JSON.stringify(localData));
        }

        history.push("/list_appointment");
    }

    const formik = useFormik({
        initialValues: intval,
        validationSchema: schema,
        onSubmit: values => {
            handleAdd(values);
        },
    });

    const { handleChange, errors, touched, handleBlur, handleSubmit } = formik;
    console.log(errors);
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
                    <Formik values={formik} >
                        <Form onSubmit={handleSubmit} className="php-email-form">
                            <div className="row">
                                <div className="col-md-4 form-group">
                                    <input onBlur={handleBlur} onChange={handleChange} type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <div className="validate" />
                                    <p>{errors.name && touched.name ? errors.name:''}</p>
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input onBlur={handleBlur} onChange={handleChange} type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                    <div className="validate" />
                                    <p>{errors.email && touched.email ? errors.email:''}</p>
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input onBlur={handleBlur} onChange={handleChange} className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <div className="validate" />
                                    <p>{errors.phone && touched.phone ? errors.phone:''}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 form-group mt-3">
                                    <input onBlur={handleBlur} onChange={handleChange} type="datetime" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <div className="validate" />
                                    <p>{errors.date && touched.date ? errors.date:''}</p>
                                </div>
                                <div className="col-md-4 form-group mt-3" onBlur={handleBlur} onChange={handleChange}>
                                    <select name="department" id="department" className="form-select" >
                                        <option value>Select Department</option>
                                        <option value="Department 1">Department 1</option>
                                        <option value="Department 2">Department 2</option>
                                        <option value="Department 3">Department 3</option>
                                    </select>
                                        <p>{errors.department && touched.department ? errors.department:''}</p>
                                    <div className="validate" />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <textarea onBlur={handleBlur} onChange={handleChange} className="form-control" name="message" rows={5} placeholder="Message (Optional)" defaultValue={""} />
                                <div className="validate" />
                            </div>
                            <p>{errors.message && touched.message ? errors.message :''}</p>
                            <div>
                                <input onChange={handleChange} onBlur={handleBlur} type = {'radio'} name = 'gender' value={'Male'}/>Mail
                                <input onChange={handleChange} onBlur={handleBlur} type = {'radio'} name = 'gender' value={'Female'}/>Female    
                            </div>
                            <p>{errors.gender && touched.gender ? errors.gender:''}</p>

                            <div>
                                <input onChange={handleChange} onBlur={handleBlur} type = {'checkbox'} name = 'hobby' value={'Cricket'}/>Cricket
                                <input onChange={handleChange} onBlur={handleBlur} type = {'checkbox'} name = 'hobby' value={'Foot Ball'}/>Foot Ball
                                <input onChange={handleChange} onBlur={handleBlur} type = {'checkbox'} name = 'hobby' value={'Traveling'}/>Traveling    
                            </div>
                            <p>{errors.hobby && touched.hobby ? errors.hobby:''}</p>
                            <div className="mb-3">
                                <div className="loading">Loading</div>
                                <div className="error-message" />

                                <div className="text-center"><button type="submit">Make an Appointment</button></div><div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </section>
        </div>
    );
}

export default Appointment;