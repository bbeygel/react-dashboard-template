import React from 'react'

import styles from './NavBar.module.scss'
import NavBarItem from './NavBarItem/NavBarItem'

const items = [
  { title: 'home' },
  { title: 'inbox' },
  { title: 'products' },
  { title: 'messages' },
  { title: 'calendar' },
]

export default function NavBar() {
  return (
    <div className={styles.navbarContainer}>
      <label className={styles.navbarTitle}>Product Name</label>
      <div>
        {items.map(({ title }) => <NavBarItem title={title} />)}
      </div>
    </div>
  )
}
