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

    const renderValue = (value, optional) => {
        return appContext.appData
        && appContext.appData.userData && appContext.appData.userData[value] ?
            appContext.appData.userData[value] : optional
    }

    return (
        <div className="flexbox">
            <div className="center">
                <div className="profile">
                    <div className="image">
                        <img src={renderProfile(renderValue('profileImage', null))} width="70" height="70"
                             alt="Jessica Potter" />
                    </div>

                    <div className="name">{renderValue('name', '')}</div>
                    <div className="job">{renderValue('email', '') }</div>
                    <div className="job">({renderValue('phoneNumber', '')})</div>

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