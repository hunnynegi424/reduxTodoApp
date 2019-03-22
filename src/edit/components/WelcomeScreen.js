import React from 'react';
import { Redirect } from 'react-router-dom';
import '../stylesheet/welcomescreen.css';
import profile from '../image/profile.png';

export default class WelcomeScreen extends React.Component {
    render() {
        return(
            <div className='welcome'>
                <p className='welcomeheader'>Welcome to Task Management</p>
                <br/>
                <img className='profileicon' src={profile} alt='Profile-Img' onClick={()=>{return <Redirect to='/login' />}}/>
                <div >
                    <p className='footer'>Created by Maverick</p>
                </div>
            </div>
        );
    }
}