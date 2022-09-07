import React, { useRef, useState } from 'react';

function Auth(props) {
    const [usertype, setuser] = useState('login');
    const [reset, setreset] = useState(false);

    const emailref = useRef();
    const passref = useRef();
    const nameref = useRef();

    const handlogin = () => {
        console.log(emailref.current.value);
        console.log(passref.current.value);

        passref.current.focus();
        passref.current.style.border = '2px solid skyblue';
    }

    const handsignup = () => {
        console.log(nameref.current.value);
        console.log(emailref.current.value);
        console.log(passref.current.value);

        nameref.current.focus();
        nameref.current.style.border = '2px solid skyblue'
    }

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

                    <div action method="post" role="form" className="php-email-form">

                        {
                            reset === true ? null :
                                usertype === 'login' ? null : <div className="row">
                                    <div className="col-md-4 form-group">
                                        <input ref={nameref} type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        <div className="validate" />
                                    </div>
                                </div>}

                        <div className="row">
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input ref={emailref} type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                <div className="validate" />
                            </div>
                        </div>

                        {
                            reset === true ? null
                                :
                                <div className="row">
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input ref={passref} type="password" className="form-control" name="password" id="password" placeholder="Password" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        <div className="validate" />
                                    </div>
                                </div>
                        }


                        {
                            reset === true ?
                                <div className="text-center"><button type="submit">Submit</button></div>
                                :
                                usertype === 'login' ? <div className="text-center"><button type="submit" onClick={() => { handlogin() }}>login</button></div> : <div className="text-center"><button type="submit" onClick={()=>handsignup()}>Signup</button></div>
                        }

                        {usertype === 'login' ? <span>Creat a new account: <button className='btn' onClick={() => { setreset(false); setuser('Sigup')}}>Signup</button></span> : <span>Alrady have an account: <button className='btn' onClick={() => setuser('login')}>Login</button></span>}
                        <br />
                        <br />
                        <span>Forgot password<button className='btn' onClick={() => setreset(true)}>Click Hear</button></span>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Auth;