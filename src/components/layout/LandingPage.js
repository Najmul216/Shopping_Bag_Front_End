import React from 'react';
import HomePageProductContainer from '../HomePageProduct/HomePageProductContainer';
import Footer from './Footer';
import ImageSlider from './ImageSlider';
import NavbarContainer from './Navbar/NavbarContainer';

function LandingPage(props) {

    return (
        <React.Fragment>
            <NavbarContainer {...props} />
            <div className="container-fluid px-0">
                <ImageSlider />
                <HomePageProductContainer />
                <Footer {...props} />
            </div>
        </React.Fragment>
    )
}
export default LandingPage;