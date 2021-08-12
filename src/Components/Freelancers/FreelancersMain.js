import React, { Fragment } from 'react';
import Banner from './Banner';
import Features from './Features';
import Testimonial from '../Home/Testimonial';
import Trial from '../Home/Trial';


function FreelancersMain(){
    return(
        <Fragment>
            <Banner />
            <Features />
            <Testimonial/>
            <Trial/>
        </Fragment>
    )
}

export default FreelancersMain;