import React from 'react';
import '../stylesheet/index.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { changeflag } from '../actions';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            savedUser: 'hunny',
            savedPassword: 'hunny',
        };
    }

    handleUsername = (event) => {
        event.preventDefault();
        this.setState({userName: event.target.value})
    }
    handlePassword = (event) => {
        event.preventDefault();
        this.setState({password: event.target.value})
    }

    onClick = (a) => {
        a.preventDefault();
        if(this.state.userName === '' || this.state.password === ''){
            alert('Enter Username and Password')
        }
        else if (this.state.userName !== this.state.savedUser || this.state.password !== this.state.savedPassword) {
            this.inputuser.value=''
            this.inputpwrd.value=''
            alert('Username or Password is incorrect.')
        }
        else if (this.state.userName === this.state.savedUser && this.state.password === this.state.savedPassword) {
                return this.props.changeflag(true);
            }
    }
    
    renderRedirect= () => {
        if(this.props.flag) {
        return <Redirect to='/user' />
        }
    }
    
    render() {
        return(
            <div className='ui'>
                {this.renderRedirect()}
                <div className='loginBar'>
                    <form className='creds' onSubmit={(e)=>this.onClick(e)}>
                        <input 
                            className='inputs'
                            type='text'
                            placeholder='Enter username'
                            onChange={this.handleUsername}
                            ref={(user)=>{this.inputuser=user}}
                            />
                        <input 
                            className='inputs'
                            type='password'
                            placeholder='Enter Password'
                            onChange={this.handlePassword}
                            ref={(pwrd)=>{this.inputpwrd=pwrd}}
                            />
                        <button className='submitbtn' onClick={this.onClick}>Login</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {flag: state.flag};
}

export default connect(mapStateToProps, { changeflag })(Login);