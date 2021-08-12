import React from 'react';
import MainHeading from '../Common/MainHeading';


export default function TryInvoice(){
    return(
        <section className="tryInvoice sp-90" style={{backgroundImage:"url(/images/try.png)"}}>
            <div className="container">
                <div className="row ">
                    <div className="flex-center-align flex-column">
                    <MainHeading headingName="Try InvoicePoint" />
                    <p className="paragraph pb-50">lorem porem loren poere lorek okeds okeay lorem operem </p>
                        <div className="google-buttons ">
                            <button className="s-btn br-8 ">Get it Now<br/>Google Play</button>
                            <button className="s-btn br-8 ml-20">Get it Now<br/>Google Play</button>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}