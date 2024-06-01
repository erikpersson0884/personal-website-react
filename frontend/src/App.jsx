import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import LandingPage from './Components/LandingPage/LandingPage'
import WorkPage from './Components/WorkPage/WorkPage'
import ProjectPage from './Components/ProjectPage/ProjectPage'
import Footer from './Components/Footer/Footer'

function App() {

    return (
        <>
            <LandingPage />
            <WorkPage />
            <ProjectPage />
            <Footer />
        </>
    )
}

export default App
