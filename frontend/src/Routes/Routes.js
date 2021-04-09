import React from 'react'
import {BrowserRouter as Router , Route } from 'react-router-dom'
import App from '../App'
import AdminPage from '../Components/AdminPage'
import User from '../Components/User'

export default function Routes() {
    return (
        <div>
            <Router>
                <Route path = '/' exact component = {App} />
                <Route path = '/admin' exact component = {AdminPage} />
                <Route path = '/user' exact component = {User} />

            </Router>
            



        </div>
    )
}
