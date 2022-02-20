import React from 'react'
import styles from './Header.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { Tooltip } from '@mui/material'

const Header = () => {
    const navigate = useNavigate()
    const handleRedirect = () => {
        navigate('/')
    }
    return (
        <div className={styles.wrap}>
            <h1 onClick={handleRedirect}>Meirtal</h1>
            <div className={styles.links}>
                <Tooltip
                    interactive
                    title={<Link to={'/collections'}>Collections</Link>}
                >
                    <a>Collections</a>
                </Tooltip>
                <Link to={'/about'}>About me</Link>

                <Link to={'/contacts'}>Contacts</Link>
            </div>
        </div>
    )
}

export default Header
