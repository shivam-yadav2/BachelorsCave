import React from 'react'
import Header from '../Components/Layout/Header/Header'
import Testing from './Testing'
import Featured from '../Components/Layout/Featured/Featured'
import HandPicked from '../Components/Layout/HandPicked/HandPicked'
import FooterSection from '../Components/Layout/FooterSection'
import Footer from '../Components/Footer'
import FindUniversity from '../Components/Layout/finduniversity/FindUniversity'

const Home = () => {
    return (
        <>
            <Header />
            <FindUniversity/>
            <Featured />
            <HandPicked />
            <FooterSection />
            <Footer />


        </>
    )
}

export default Home