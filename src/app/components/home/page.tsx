import React from 'react'
import Navbar from './component/Navbar'
import Allowance from './component/Allowance'
import Eventlist from './component/EventList'

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Allowance />
            <Eventlist/>
        </>
    )
}

export default HomePage
