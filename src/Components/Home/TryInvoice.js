import React from 'react';
import Buttons from '../Common/Buttons';
import MainHeading from '../Common/MainHeading';


export default function TryInvoice(){
    return(
        <section className="tryInvoice sp-90" style={{backgroundImage:"url(/images/try-bg.png)"}}>
            <div className="container">
                <div className="row ">
                    <div className="flex-center-align flex-column">
                    <MainHeading headingName="Try InvoicePoint" />
                    <p className="paragraph pb-50">lorem porem loren poere lorek okeds okeay lorem operem </p>
                        <div className="google-buttons ">
                                <Buttons/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}