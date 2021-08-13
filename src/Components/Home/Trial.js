import React from 'react';
import Buttons from '../Common/Buttons';
import Ticks from '../Common/Ticks';


export default function Trial() {
    return(
        <section className="freeTrial sp-90">
            <div className="container">
                <div className="row ">
                    <div className="col-lg-6 mt-90">
                        <h1 className="h_1 h-bold">Get Started For<br/>Free Today</h1>
                        <p className="paragraph pt-10">Download the App for Free</p>
                        <div className="google-buttons mt-50">
                                <Buttons/>
                        </div>                         
                                <Ticks/>
                    </div>
                    <div className="col-lg-6">
                        <img src="/images/Mask Group 10.png" className="freeimg"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}