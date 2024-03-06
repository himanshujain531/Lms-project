import React from 'react'
import './Login.css';


const Login = () => {
    return (
        <div className='container'>
            <div >
                <h1 className='loginstudent'>Log in as a Student</h1>
                <br />

                <p className='loginsubheading'>No credit card required</p>
                <br />
                <br />

                <div className='formlayout'>
                    <br />
                    <br />
                    <p className='formlayoutinsideheading'>Let’s get started!</p>

                    <p className='signupnow'>Sign up now</p>

                    <form className='form'>
                        <br />
                        <br />
                        <input type='text' placeholder='First Name' className='inputtext'></input>
                        <br />
                        <br />
                        <input type='text' placeholder='Last Name' className='inputtext'></input>
                        <br />
                        <br />
                        <input type='text' placeholder='Email Address' className='inputtext'></input>
                        <br />
                        <br />
                        <input type='text' placeholder='Password' className='inputtext'></input>
                        <div className='checkcondition'>
                            <br />
                            <br />
                            <input type='checkbox' className='checkbox'></input>
                            <p className='termsservices'>I agree to the <a href='/' className='policy'>Terms of Services</a> and <a href='/' >Privacy</a></p>
                        </div>
                        <p className='policy' ><a href='/' > Police.</a></p>
                        <br />
                        <br />

                        <div className='buttondiv'>
                            <button className='button'></button>
                        </div>
                    </form>



                </div>
            </div>
        </div>


    )
}

export default Login