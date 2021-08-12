import React from 'react';


export default function Trial() {
    return(
        <section className="freeTrial sp-90">
            <div className="container">
                <div className="row ">
                    <div className="col-lg-6 mt-90">
                        <h1 className="h_1 h-bold">Get Started For<br/>Free Today</h1>
                        <p className="paragraph pt-10">Download the App for Free</p>
                        <div className="google-buttons mt-50">
                               <button className="s-btn br-8 "> Get it Now<br/>Google Play</button>
                               <button className="s-btn br-8 ml-20">Get it Now<br/>Google Play</button>
                           </div>
                           
                           <div className="ticks flex mt-50">
                               <img src="/images/Group65.png" className="mr-10"></img>
                               <p>Money back gurantee</p>                   
                               <img src="/images/Group65.png" className="ml-50 mr-10"></img>
                               <p>Cancel Anytime</p>
                           </div>
                    </div>

                    <div className="col-lg-6">
                        <img src="/images/Mask Group 10.png" className="freeimg"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}