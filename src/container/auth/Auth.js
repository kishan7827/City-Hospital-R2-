import React, { useRef, useState } from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';

function Auth(props) {
    const [usertype, setuser] = useState('login');
    const [reset, setreset] = useState(false);

    const emailref = useRef();
    const passref = useRef();
    const nameref = useRef();

    let authschema = {}, intval = {};

    if (usertype === 'login' && reset === false) {
        authschema = {
            email: yup.string().required("please enter email.").email("please enter valid email."),
            password: yup.string().required("please enter password.").min(8, 'password must be 8 chracters long.'),
        }
        intval = {
            email: '',
            password: ''
        }
    } else if (usertype === 'Signup' && reset === false) {
        authschema = {
            name: yup.string().required("please enter yor name."),
            email: yup.string().required("please enter email.").email("please enter valid email."),
            password: yup.string().required("please enter password.").min(8, 'password must be 8 chracters long.'),
        }
        intval = {
            name: '',
            email: '',
            password: '',
        }
    } else if (reset === true) {
        authschema = {
            email: yup.string().required("please enter email.").email("please enter valid email."),
        }
        intval = {
            email: ''
        }
    }

    const handleLogin = () => {
        localStorage.setItem('login', true)
    }

    let schema = yup.object().shape(authschema);

    const formikobj = useFormik({
        initialValues: intval,
        validationSchema: schema,
        onSubmit: values => {
                handleLogin();
        },
    });

    const { errors, touched, handleBlur, handleChange, handleSubmit } = formikobj;

    return (
        <div>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        {
                            reset === true ?
                                <h2>Reset Password</h2>
                                :
                                usertype === 'login' ? <h2>login</h2> : <h2>Signup</h2>
                        }
                    </div>
                    <Formik values={formikobj} >
                        <Form onSubmit={handleSubmit} className="php-email-form">
                            {
                                reset === true ? null :
                                    usertype === 'login' ? null : <div className="row">
                                        <div className="col-md-4 form-group">
                                            <input onBlur={handleBlur} onChange={handleChange} ref={nameref} type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                            <p>{errors.name && touched.name ? errors.name : ''}</p>
                                            <div className="validate" />
                                        </div>
                                    </div>}

                            <div className="row">
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input onBlur={handleBlur} onChange={handleChange} ref={emailref} type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                    <p>{errors.email && touched.email ? errors.email : ''}</p>
                                    <div className="validate" />
                                </div>
                            </div>

                            {
                                reset === true ? null
                                    :
                                    <div className="row">
                                        <div className="col-md-4 form-group mt-3 mt-md-0">
                                            <input onBlur={handleBlur} onChange={handleChange} ref={passref} type="password" className="form-control" name="password" id="password" placeholder="Password" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                            <p>{errors.password && touched.password ? errors.password : ''}</p>
                                            <div className="validate" />
                                        </div>
                                    </div>
                            }


                            {
                                reset === true ?
                                    <div className="text-center"><button type="submit">Submit</button></div>
                                    :
                                    usertype === 'login' ? <div className="text-center"><button type="submit">login</button></div> : <div className="text-center"><button type="submit">Signup</button></div>
                            }

                        </Form>
                    </Formik>
                    {usertype === 'login' ? <span>Creat a new account: <button className='btn' onClick={() => { setreset(false); setuser('Signup') }}>Signup</button></span> : <span>Alrady have an account: <button className='btn' onClick={() => setuser('login')}>Login</button></span>}
                    <br />
                    <br />
                    <span>Forgot password<button className='btn' onClick={() => setreset(true)}>Click Hear</button></span>

                </div>
            </section>
        </div>
    );
}

export default Auth;