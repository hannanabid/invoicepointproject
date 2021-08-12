import React from 'react';

function Banner(){
    return(
        <section className="banner sp-60 height-70 flex-center-align flex-column" style={{backgroundImage:"url(/images/hero-bg.png)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                           <h1 className="h-1 h-bold pb-20">Control your <span className="span-color">Business</span> <br/>with our invoicing app </h1>
                           <p className="paragraph pb-20">Invoice Point will balance transactions and client relationships<br/> for you, so you can have the time you need to focus on your<br/> business.</p>
                                <button className="s-btn br-8 ">Get it Now<br/>Google Play</button>
                                <button className="s-btn br-8 ml-20">Get it Now<br/>Google Play</button>
                           <p className="paragraph pt-20 pb-20">By continuing, you agree to the <span className="span-color">Terms of Services</span> and <br/><span className="span-color">Privacy Policy</span></p>
                           <div className="ticks flex">
                               <img src="/images/Group65.png" className="mr-10"></img>
                               <p>Money back gurantee</p>                   
                               <img src="/images/Group65.png" className="ml-50 mr-10"></img>
                               <p>Cancel Anytime</p>
                           </div>
                         </div>

                        <div className="col-lg-6">
                            <img src="/images/animation-1.PNG"></img>
                        </div>
                    </div>
                </div>
            </section>
    )
}
export default Banner;