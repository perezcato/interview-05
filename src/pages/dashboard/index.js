import React, {useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {AppContext} from "../../App";


const Dashboard = () => {
    const appContext  = React.useContext(AppContext);
    const router = useHistory();

    useEffect(() => {
        if(!appContext.appData.login){
            router.push('/login');
        }
    }, []);

    const signOut = () => {
        appContext.setAppData({...appContext.appData, login: false})
        router.push('/login')
    }

    const renderProfile = (value) => {
        return value ? URL.createObjectURL(value): 'http://100dayscss.com/codepen/jessica-potter.jpg'
    }

    const updateProfile = () => {
        router.push('/update_profile');
    }

    return (
        <div className="flexbox">
            <div className="center">
                <div className="profile">
                    <div className="image">
                        <img src={renderProfile(appContext.appData.userData.profileImage)} width="70" height="70"
                             alt="Jessica Potter" />
                    </div>

                    <div className="name">{appContext.appData.userData.name}</div>
                    <div className="job">{appContext.appData.userData.email}</div>
                    <div className="job">({appContext.appData.userData.phoneNumber})</div>

                    <div className="actions">
                        <button className="btn" onClick={updateProfile}>Update</button>
                        <button className="btn" onClick={signOut}>Sign out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;