import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './components/Login';
import App from './components/App';
import WelcomeScreen from './components/WelcomeScreen';

class Routes extends React.Component {
    render() {
        return(
            <Switch>
                <Route
                    exact
                    path='/'
                    render={()=>{
                        if(this.props.flag){
                            return <App />
                        }
                        else return <WelcomeScreen />
                    }}
                />
                <Route
                    exact
                    path='/login/'
                    component={Login}
                />
                <Route
                    exact
                    path='/user/'
                    render={()=>{
                        if(this.props.flag){
                            return <App />
                        }
                        else return (
                            <Route
                                exact
                                push='/'
                                component={Login}
                            />
                        );
                    }}
                />
            </Switch>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}
export default connect(mapStateToProps)(Routes);