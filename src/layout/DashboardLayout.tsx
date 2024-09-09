import React from 'react'
import { Outlet } from 'react-router-dom'
import InnerHeader from './InnerHeader'
import Sidebar from './Sidebar'

const DashboardLayout = () => {
  return (
    <div className='overflow-x-hidden w-screen h-full'>
      <section className="bg-slate-950 h-full">
        <div className='grid grid-cols-12'>
          <div className='col-span-2'>
            <Sidebar />
          </div>
          <div className='col-span-10'>
            <InnerHeader />
            <div className='min-h-screen'>
            <Outlet />
            </div>
          </div>
        </div>

      </section>
    </div>

  )
}

export default DashboardLayout