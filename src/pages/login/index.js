import React, {useEffect} from 'react';
import {Formik} from 'formik'
import {AppContext} from "../../App";
import {useHistory} from "react-router-dom";


const Login = () => {

    const appContext  = React.useContext(AppContext);
    const router = useHistory();

    useEffect(() => {
        if(!appContext.appData.registered){
            router.push('/register');
        }
    }, [])

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            onSubmit={(values) => {
                const {email, password} = appContext.appData.userData
                if(email.trim() === values.email.trim() && password.trim() === values.password.trim()){
                    appContext.setAppData({...appContext.appData, login: true})
                    router.push('/')
                } else {
                    alert('Invalid username or password');
                }
            }}>
            {(formik) => (<div className="flexbox">
                <div className="content-login">
                    <div id="login" className="box show">
                        <div className="field">
                            <div className="sign-in">Sign In</div>
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <input name="email" value={formik.values.email} onChange={formik.handleChange} type="email" />
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input name="password" value={formik.values.password} onChange={formik.handleChange} type="password" />
                        </div>
                        <div className="field">
                            <button onClick={formik.handleSubmit} className="btn-sign-in">Sign In</button>
                        </div>
                    </div>
                </div>
            </div>)}
        </Formik>

    )
}

export default Login;
