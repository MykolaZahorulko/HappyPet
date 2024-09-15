import React from 'react'
import OnSiteSearching from '../../features/OnSiteSearching/OnSiteSearching.jsx'
import { useSelectorValue } from '../../hooks/useSelectorValue.js'
import Header from '../Header/Header.jsx'
import styles from './Layout.module.scss'
const Layout = ({children}) => {
    const { value: isSearching } = useSelectorValue(state => state.isSearching)
    
    return (
        <div className={`${styles.wrapper} ${isSearching ? styles._searchActive : ''}`}>
            <OnSiteSearching />
            <Header/>
            <main className={styles.main}>{children}</main>
        </div>
    )
}
export default Layout
