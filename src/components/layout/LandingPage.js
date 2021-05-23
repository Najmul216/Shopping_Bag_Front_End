import React from 'react'
import ImageSlider from './ImageSlider'
import NavbarContainer from './Navbar/NavbarContainer'

function LandingPage() {
    return (
        <React.Fragment>
            <NavbarContainer />
            <div className="container-fluid px-0">
                <ImageSlider />
            </div>
        </React.Fragment>
    )
}
export default LandingPage;