import React from 'react'
import FeedbackButton from '../FeedbackButton/Button'
import Search from '../Search/Search'
import Logo from '../Logo/Logo'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (<nav className={styles.navbar}>
        <Logo />
        <Search />
        <Button children="Give Feedback"/>
    </nav>
    
  )
}

export default Navbar
