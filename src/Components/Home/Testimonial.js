import React from 'react';
import MainHeading from '../Common/MainHeading';


export default function Testimonial(props){
    return(
        <section className="Testimonial sp-90"> 
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <MainHeading headingName="Freelancers,small businesses and independent contractors love Invoive Point" />
                        <p className="paragraph text-center pt-10">lorem Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
                    </div>
                </div>
                <div className="test mt-90">
                    <img src="/images/Ellipse 4.png" className="testImg"></img>
                </div>

            </div>
        </section>
    )
}