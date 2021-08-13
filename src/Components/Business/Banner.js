
import React, { Fragment } from 'react';
import Buttons from '../Common/Buttons';
import Ticks from '../Common/Ticks';

function Banner(){
    return(
        <Fragment>
        <section className="banner-organization sp-60 height-70 flex-center-align flex-column " style={{backgroundImage:"url(/images/Smallbusiness-bg.png)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                           <h1 className="h-1 h-bold pb-20"><span className="span-color">Support</span> The Needs <br/> of Your <span className="span-color">Support</span> </h1>
                           <p className="paragraph pb-20">Invoice Point will balance transactions and client relationships<br/> for you, so you can have the time you need to focus on your<br/> business.</p>
                           <Buttons/>          
                            <Ticks/>
                         </div>

                        <div className="col-lg-6">
                            
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Banner;