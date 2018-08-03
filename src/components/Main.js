import React from 'react';
import {Register} from './Register';
import { Route, Switch, Redirect} from 'react-router-dom';
import {Login} from './Login';
import {Home} from './Home';
export class Main extends React.Component {
    getLogin = () => {
        return this.props.isLoggedIn ? <Redirect to="/home" /> : <Login handleLogin={this.props.handleLogin}/>;
    }

    getRoot = () => {
        return(
            <Redirect to="/login"/>
        );
    }
    getHome = () =>{
        return this.props.isLoggedIn ? <Home/> : <Redirect to="/login"/>;

    }
    render(){
        return(
            <div className="main">
                <Switch>
                    <Route exact path="/" render={this.getRoot}/>
                    <Route path="/register" component={Register} />
                    <Route path="/login" render={this.getLogin} />
                    <Route path="/home" render={this.getHome} />
                    <Route render={this.getRoot}/>
                </Switch>
            </div>
        );
    }
}
