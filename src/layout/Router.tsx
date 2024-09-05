import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import DashboardLayout from './DashboardLayout'
import Dashboard from '../pages/Dashboard'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path='/' element={<Home />} />
                <Route path="/user" element={<DashboardLayout />}>
                    <Route path="dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default Router