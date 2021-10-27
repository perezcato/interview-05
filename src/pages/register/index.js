import React from 'react';
import {Formik} from 'formik'
import {AppContext} from "../../App";
import {useHistory} from "react-router-dom";

const Register = () => {

    const appContext  = React.useContext(AppContext);
    const router = useHistory();

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                password: '',
                phoneNumber: ''
            }}
            onSubmit={(values) => {
                const {appData} = appContext;
                appContext.setAppData({...appData, userData: {...appData.userData, ...values}, registered: true})
                router.push('/login')
            }}>
            {
                (formik) => (
                    <div className="flexbox">
                        <div className="content">
                            <div id="login" className="box show">
                                <div className="field">
                                    <div className="sign-in">Register</div>
                                </div>
                                <div className="field">
                                    <label>Full Name</label>
                                    <input name="name" value={formik.values.name} onChange={formik.handleChange} type="text" />
                                </div>
                                <div className="field">
                                    <label>Email</label>
                                    <input name="email" value={formik.values.email} onChange={formik.handleChange} type="email" />
                                </div>
                                <div className="field">
                                    <label>Phone number</label>
                                    <input name="phoneNumber" value={formik.values.phoneNumber} onChange={formik.handleChange} type="tel" />
                                </div>
                                <div className="field">
                                    <label>Password</label>
                                    <input name="password" value={formik.values.password} onChange={formik.handleChange} type="password" />
                                </div>
                                <div className="field">
                                    <button onClick={formik.handleSubmit} className="btn-sign-in">Register</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
            }
        </Formik>
    )
}

export default Register;