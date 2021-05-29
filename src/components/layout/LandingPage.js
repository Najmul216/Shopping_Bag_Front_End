import React from 'react';
import HomePageProductContainer from '../HomePageProduct/HomePageProductContainer';
import ImageSlider from './ImageSlider';


function LandingPage(props) {

    return (
        <React.Fragment>
            <div className="container-fluid px-0">
                <ImageSlider />
                <HomePageProductContainer />
            </div>
        </React.Fragment>
    )
}
export default LandingPage;