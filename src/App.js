import './reset.css'
import styles from './App.module.scss'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutMePage from './components/AboutMePage/AboutMePage'
import ContactsPage from './components/ContactsPage/ContactsPage'

const App = () => {
    return (
        <BrowserRouter>
            <div className={styles.app}>
                <Header />
                <Routes>
                    <Route path="/" element={<Body />} exact />
                    <Route path="/about" element={<AboutMePage />} exact />
                    <Route path="/contacts" element={<ContactsPage />} exact />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
