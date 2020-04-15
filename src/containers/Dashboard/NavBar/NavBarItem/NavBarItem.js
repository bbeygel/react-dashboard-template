import React from 'react'

import styles from './NavBarItem.module.scss'

export default function NavBarItem({
  title
}) {
  return (
    <div className={styles.navBarItemContainer}>
      <label>{title}</label>
    </div>
  )
}
