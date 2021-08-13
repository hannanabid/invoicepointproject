import React from 'react';
import MainHeading from '../Common/MainHeading';

function FeatureBusiness(){
    return(
        <section className="features sp-90">
                    <div className="container">
                        <div className="row">
                                <div className="col-lg-6 offset-lg-3">
                                        <MainHeading headingName="Focus on Growing Your Business" />
                                </div>
                                <div className="col-lg-4 offset-lg-4">
                                        <p className="paragraph text-left paragraph pt-50">When you run your own business, your work is your livelihood. So running it as smoothly as possible and<br/> driving results is vital when it comes to a successful business. </p>
                                        <p className="paragraph text-left paragraph pt-20">That’s why small businesses around the world choose Invoice Point - getting paid is so easy that you have all<br/> the time you need to focus on growing your business.<br/> With the help of our many useful easy-to-use app<br/> features, we will get you paid fast.</p>
                                        
                                </div>
                        </div>
                        {/* <div className="row">
                            <FeaturesBox/>
                        </div> */}
                        <div className="row sp-60">
                                <div className="col-lg-6">
                                         <img src="/images/smallone.png" alt="fast payment"></img>
                                </div>
                                <div className="col-lg-6 flex-align-items flex-column  ">
                                        <h3 className="h-3 pb-20 pl-10">Know Your <span className="span-color">Business</span> and What it <span className="span-color">Needs</span></h3>
                                        <p className="paragraph pb-20 pl-10 ">With all your invoices and payments in one place, it’s easy to<br/> track your financial progress. Our business reports will offer you<br/> valuable insights into how profitable your business is and help<br/> you make smart decisions that fit the needs of your business.</p>
                                </div>
                        </div>
                        <div className="row reverse">
                                <div className="col-lg-6">
                                         <img src="/images/smalltwo.png" alt="fast payment"></img>
                                </div>
                                <div className="col-lg-6 flex-align-items flex-column ">
                                    <div className="p-0-20">
                                        <h3 className="h-3 pb-20 ">Keep Your Clients <span className="span-color">Happy</span> </h3>
                                        <p className="paragraph pb-20  pr-20">Interested in getting more work? Impress potential<br/> clients with professional looking estimates. Don’t settle<br/> for a simple email. Instead, create estimates that will<br/> show you mean business. Once you've caught their<br/> interest, secure the job by accepting a deposit upfront</p>
                                `   </div>`
                                </div>
                        </div>
                        <div className="row ">
                                <div className="col-lg-6">
                                         <img src="/images/smallthree.png" alt="invoice sharing"></img>
                                </div>
                                <div className="col-lg-6 flex-align-items flex-column">
                                        <h3 className="h-3 pb-20 pl-10"><span className="span-color">Professional</span> Invoices</h3>
                                        <p className="paragraph pb-20 pl-10">Invoice Point will give you all the necessary tools to create<br/> personalized invoices that are guaranteed to wow your clients.<br/> Customize them in a unique way to represent your business,<br/> and show your customers that you always meet the highest<br/> standards, even in the smallest of details.</p>
                                </div>
                        </div>
                    </div>
            </section>
    )
}

export default FeatureBusiness;