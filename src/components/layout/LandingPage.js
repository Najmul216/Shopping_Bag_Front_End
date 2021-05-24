import React from 'react';
import HomePageProductContainer from '../HomePageProduct/HomePageProductContainer';
import ImageSlider from './ImageSlider';
import NavbarContainer from './Navbar/NavbarContainer';

function LandingPage() {
    return (
        <React.Fragment>
            <NavbarContainer />
            <div className="container-fluid px-0">
                <ImageSlider />
                <HomePageProductContainer />
            </div>
        </React.Fragment>
    )
}
export default LandingPage;