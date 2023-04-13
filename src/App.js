import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import User from './components/users/User';
import Alert from './components/layouts/Alert';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import About from './components/pages/About';

const App = () => {

    return (
        <GithubState>
            <AlertState>
                <Router>
                    <Navbar />
                    <div className="container">
                        <Alert />
                        <Routes>
                            <Route exact path='/' element={<Home />} />
                            <Route exact path='/user/:login' element={<User />} />
                            <Route exact path='/about' element={<About />} />
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    </div>
                </Router>
            </AlertState>
        </GithubState>
    )
}


export default App;
