import React from 'react';

function Banner(){
    return(
        <section className="banner-freelancers sp-60 height-70 flex-center-align flex-column" style={{backgroundImage:"url(/images/free-bg.png)"}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                   <h1 className="h-1 h-bold pb-20">INVOICING APP FOR <br/><span className="span-color">FREELANCERS</span> </h1>
                   <p className="paragraph pb-20">Save Time and Stay Oraganized</p>
                        <button className="s-btn br-8 ">Get it Now<br/>Google Play</button>
                        <button className="s-btn br-8 ml-20">Get it Now<br/>Google Play</button>
                   
                   <div className="ticks flex pt-30">
                       <img src="/images/Group65.png" className="mr-10"></img>
                       <p>Money back gurantee</p>                   
                       <img src="/images/Group65.png" className="ml-50 mr-10"></img>
                       <p>Cancel Anytime</p>
                   </div>
                 </div>
                <div className="col-lg-6">
                </div>
            </div>
        </div>
    </section>
    )
}

export default Banner;