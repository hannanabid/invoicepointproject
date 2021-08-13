import React, { Fragment } from 'react';
import Testimonial from '../Home/Testimonial';
import TryInvoice from '../Home/TryInvoice';
import Trial from '../Home/Trial';
import Banner from '../Organization/Banner';
import FeaturesOrganization from './FeaturesOrganization';

function OrganizationMain(){
    return(
        <Fragment>
                <Banner />
                <FeaturesOrganization/>
                <TryInvoice />
                <Testimonial/>
                <Trial/>
        </Fragment>
    )
}

export default OrganizationMain;