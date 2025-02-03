import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import MobileNavbar from './components/MobileNavbar'
import Footer from './components/Footer'
import stakePreloader from './assets/stake-preloader.gif'
// Supports weights 100-900
import '@fontsource-variable/montserrat'

const App = () => {
    const [data, setData] = useState('')
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchComponentData = async () => {
            try {
                const response = await fetch(
                    'https://stake-demo.onrender.com/admin/api-services'
                )
                const componentData = await response.json()
                console.log(componentData)
                setData(componentData)
            } catch (error) {
                console.log(error)
            } finally {
                setTimeout(() => setIsLoading(false), 500)
            }
        }

        fetchComponentData()
    }, [])

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    if (isLoading) {
        return (
            <div className="fixed top-0 left-0 flex justify-center items-center h-screen w-screen bg-grey-600">
                <img
                    src={stakePreloader}
                    alt=""
                    className="w-full max-w-[100px] touch-none"
                />
            </div>
        )
    }

    return (
        <>
            <div className="flex flex-col-reverse md:flex-row bg-grey-800 text-white h-screen overflow-hidden pb-16 md:pb-0">
                {/* Sidebar */}
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                {/* Main Content */}
                <div className="flex flex-col overflow-y-scroll w-screen md:w-full relative scrollY">
                    <Header />

                    <MainContent componentData={data.services} />
                    <Footer />
                </div>
                <MobileNavbar toggleSidebar={toggleSidebar} />
            </div>
        </>
    )
}

export default App
