import React from 'react';
import MainHeading from '../Common/MainHeading';


export default function OurFeatures(){
    return(
        <section className="features sp-90">
                {/* <h1 className="h-1 h-bold text-center">Our Features Support Your Business</h1> */}
                <MainHeading headingName="Our Features Support Your Business" />
                <div className="container sp-60">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src="/images/Group10.png"></img>
                        </div>
                        <div className="col-lg-6 flex-align-items flex-column  ">
                            <h3 className="h-3 pb-20 pl-10">Getting <span className="span-color">Paid</span> Made Easy</h3>
                            <p className="paragraph pb-20 pl-10">Create, customize, and send professional looking invoices in <br/> mere seconds. Send your invoice straight after the job is done<br/> and get paid faster!</p>
                            <div className="pl-10">
                            <button className="l-btn br-8 ">Learn More</button>
                            </div>                           
                        </div>
                    </div>
                    <div className="row reverse">
                        <div className="col-lg-6">
                            <img src="/images/Group11.png"></img>
                        </div>
                        <div className="col-lg-6 flex-align-items flex-column  ">
                            <h3 className="h-3 pb-20 ">App That <span className="span-color">Saves</span> Your Time</h3>
                            <p className="paragraph pb-20 ">We make invoicing on the go so easy, you’ll be surprised how<br/> much valuable time you’ll have to focus on doing what you<br/> love. After all, time is of the essence when it comes to running<br/> a successful business.</p>
                            <div className="">
                            <button className="l-btn br-8 ">Learn More</button>
                            </div>                           
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <img src="/images/Group12.png"></img>
                        </div>
                        <div className="col-lg-6 flex-align-items flex-column  ">
                            <h3 className="h-3 pb-20 pl-10"><span className="span-color">Convenient</span> Payment Method</h3>
                            <p className="paragraph pb-20 pl-10">No more waiting in line at the bank to get paid.Send<br/> your invoices with instant payment options, including<br/> PayPal, credit card, or debit card. It’s secure, fast, and<br/> easy. Your clients will be impressed by the convenience<br/> of your services!</p>
                            <div className="pl-10">
                            <button className="l-btn br-8 ">Learn More</button>
                            </div>                           
                        </div>
                    </div>
                    <div className="row reverse">
                        <div className="col-lg-6">
                            <img src="/images/Group13.png"></img>
                        </div>
                        <div className="col-lg-6 flex-align-items flex-column  ">
                            <h3 className="h-3 pb-20 "><span className="span-color">Automate</span> Your Business</h3>
                            <p className="paragraph pb-20 ">No need to chase clients for overdue payments. Take<br/> advantage of the opportunity to focus your time on what<br/> matters most and enjoy the freedom that only automation<br/> can offer.<br/>
                            Payments are recorded and invoice status updated<br/> automatically in your account. Set up reminders to notify<br/> your clients about overdue or upcoming payments. Let us<br/> take care of the rest.
                            </p>
                            <div className="">
                            <button className="l-btn br-8 ">Learn More</button>
                            </div>                           
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <img src="/images/Group14.png"></img>
                        </div>
                        <div className="col-lg-6 flex-align-items flex-column  ">
                            <h3 className="h-3 pb-20 pl-10"><span className="span-color">Instantly</span> Check How Your <br/> Business is Performing</h3>
                            <p className="paragraph pb-20 pl-10">No more waiting in line at the bank to get paid.<br/>Send your invoices with instant payment options, including<br/> PayPal, credit card, or debit card. It’s secure, fast, and easy.<br/> Your clients will be impressed by the convenience of your<br/> services!</p>
                            <div className="pl-10">
                            <button className="l-btn br-8 ">Learn More</button>
                            </div>                           
                        </div>
                    </div>
                </div>
            </section>
    )
}