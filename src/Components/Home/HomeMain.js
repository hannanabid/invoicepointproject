import React, { Fragment } from 'react';
import Banner from './Banner';
import Benefits from './Benefits';
import OurFeatures from './OurFeatures';
import Plans from './Plans';
import SocialProof from './SocialProof';
import Testimonial from './Testimonial';
import TryInvoice from './TryInvoice';
import Trial from './Trial';

function HomeMain(){
    return(
        <Fragment>
            <Banner />
            <SocialProof />
            <OurFeatures />
            <TryInvoice />
            <Benefits />
            <Testimonial />
            <Plans />
            <Trial />
        </Fragment>
    )
}

export default HomeMain;