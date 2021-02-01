import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTow } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleHandler = () => setIsOpen(!isOpen)

    return(
        <React.Fragment>
            <Sidebar isOpen={isOpen} toggle={toggleHandler} />
            <Navbar toggle={toggleHandler} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTow} />
            <Services />
            <InfoSection {...homeObjThree} />
            <Footer />
        </React.Fragment>
    )
}

export default Home