import React from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';

function Contect(props) {
  let authschema={}, intval={};
  authschema = {
    name: yup.string().required("please enter yor name."),
    email: yup.string().required("please enter email.").email("please enter valid email."),
    subject: yup.string().required("please enter subject."),
    message: yup.string().required("please enter message.").min(16, 'password must be 16 chracters long.'),
  }
  intval = {
    name:'',
    email:'',
    subject:'',
    massage:''
  }
  let schema = yup.object().shape(authschema);

  const formik = useFormik({
    initialValues: intval,
    validationSchema: schema,
    onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
    },
});

  const { handleChange,errors,handleSubmit } = formik;

  return (
    <div>
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
            <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
              blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
              luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</p>
          </div>
        </div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt" />
                  <h4>Location:</h4>
                  <p> F-505, Inovative Plazza New Delhi, India</p>
                </div>
                <div className="email">
                  <i className="bi bi-envelope" />
                  <h4>Email:</h4>
                  <p>cityhospital@example.com</p>
                </div>
                <div className="phone">
                  <i className="bi bi-phone" />
                  <h4>Call:</h4>
                  <p>+91 9988776655</p>
                </div>
              </div>
            </div>
            <Formik values={formik} onSubmit={handleSubmit}>
                <div className="col-lg-8 mt-5 mt-lg-0">
                  <form action method="post" role="form" className="php-email-form">
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <input type="text"
                          name="name"
                          className="form-control"
                          id="name"
                          placeholder="Your Name" required onChange={handleChange}
                          />
                          <p>{errors.name}</p>
                      </div>
                      <div className="col-md-6 form-group mt-3 mt-md-0">
                        <input type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Your Email" required onChange={handleChange} />
                          <p>{errors.email}</p>
                      </div>
                    </div>
                    <div className="form-group mt-3">
                      <input type="text"
                        className="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject" required onChange={handleChange} />
                        <p>{errors.subject}</p>
                    </div>
                    <div className="form-group mt-3">
                      <textarea
                        className="form-control"
                        name="message"
                        rows={5}
                        placeholder="Message" required defaultValue={""} onChange={handleChange} />
                      <p>{errors. message}</p>
                    </div>
                    <div className="my-3">
                      <div className="loading">Loading</div>
                      <div className="error-message" />
                      <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div className="text-center"><button type="submit">Send Message</button></div>
                  </form>
                </div>
            </Formik>
          </div>
        </div>
      </section>
    </div>

  );
}

export default Contect;