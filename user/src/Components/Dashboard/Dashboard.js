import React from 'react'
import DashboardCard from './DashboardCard'
import "./Dashboard.css"
import DashboardChart from './DashboardChart'

const Dashboard = () => {
  return (
    <>

            <div className="container-fluid mt-5">
             
             <DashboardCard/>
             <DashboardChart/>
            </div>
      
    </>
  )
}

export default Dashboard
