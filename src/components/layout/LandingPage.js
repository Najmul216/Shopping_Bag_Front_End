import React from 'react';
import HomePageProductContainer from '../HomePageProduct/HomePageProductContainer';
import Footer from './Footer';
import ImageSlider from './ImageSlider';
import NavbarContainer from './Navbar/NavbarContainer';

function LandingPage() {
    return (
        <React.Fragment>
            <NavbarContainer />
            <div className="container-fluid px-0">
                <ImageSlider />
                <HomePageProductContainer />
                <Footer/>
            </div>
        </React.Fragment>
    )
}
export default LandingPage;