import React from "react";
import {AppContext} from "../../App";
import {useHistory} from "react-router-dom";
import {Formik} from "formik";

const UpdateProfile = () => {
    const appContext  = React.useContext(AppContext);
    const router = useHistory();
    const updateRef = React.useRef();

    return (
        <Formik
            initialValues={{
                name: appContext.appData.userData.name,
                email: appContext.appData.userData.email,
                password: appContext.appData.userData.password,
                phoneNumber: appContext.appData.userData.phoneNumber,
                profileImage: appContext.appData.userData.profileImage ?? 'http://100dayscss.com/codepen/jessica-potter.jpg'
            }}

            onSubmit={(values) => {
                const {appData} = appContext;
                appContext.setAppData({...appData, userData: {...appData.userData, ...values}});
                router.push('/')
            }}>

            {
                (formik) => (
                    <div className="flexbox">
                        <div className="content">
                            <div id="login" className="box show">
                                <div className="field">
                                    <div className="sign-in">Update Profile</div>
                                </div>

                                <div className="image">
                                    <img
                                        onClick={() => {
                                            if(updateRef && updateRef.current){
                                                updateRef.current.click()
                                            }
                                        }}
                                        src={formik.values.profileImage } width="70" height="70"
                                         alt="Jessica Potter" />
                                    <input
                                        onChange={(e) =>{
                                            formik.setFieldValue('profileImage', URL.createObjectURL(e.target.files[0]))
                                        }}
                                        ref={updateRef}
                                        style={{display: 'none'}}
                                        type="file"/>
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
                                    <button onClick={formik.handleSubmit} className="btn-sign-in">Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )

            }
        </Formik>
    )
}

export default UpdateProfile;