import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"

import Home from './pages/Home'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register';
import MyNavbar from './components/MyNavbar';
import Admin from './pages/Admin'
import Profile from './pages/Profile';
import About from './pages/About';

import { connect } from 'react-redux'
import { userKeepLogin } from './redux/actions/user'

class App extends React.Component {

    componentDidMount() {
        const userLocalStorage = localStorage.getItem("userDataLogin")

        if (userLocalStorage) {
            const userData = JSON.parse(userLocalStorage);
            this.props.userKeepLogin(userData);

        }
    }

    render() {
        return (
            <BrowserRouter>
                <MyNavbar />
                <Switch>
                    <Route component={Login} path="/login" />
                    <Route component={Register} path="/register" />
                    <Route component={Admin} path="/admin" />
                    <Route component={Profile} path="/profile" />
                    <Route component={About} path="/about" />
                    <Route component={Home} path="/" />
                </Switch>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userGlobal: state.user
    }
}

const mapDispatchToProps = {
    userKeepLogin,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
