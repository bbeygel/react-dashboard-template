import React from 'react'
import styles from './Dashboard.module.scss'

import TopBar from './TopBar'
import NavBar from './NavBar'

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <TopBar/>
      <NavBar/>
      <div className={styles.contentContainer}/>
    </div>
  )
}

export default Dashboard
