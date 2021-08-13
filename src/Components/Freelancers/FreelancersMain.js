import React, { Fragment } from 'react';
import Banner from './Banner';
import Features from './Features';
import Testimonial from '../Home/Testimonial';
import Trial from '../Home/Trial';
import TryInvoice from '../Home/TryInvoice';


function FreelancersMain(){
    return(
        <Fragment>
            <Banner />
            <Features />
            <TryInvoice/>
            <Testimonial/>
            <Trial/>
        </Fragment>
    )
}

export default FreelancersMain;