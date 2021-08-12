import React from 'react';

const socialProof = [
    {
        id:0,
        imgURL:"/images/Icon awesome-paypal.png",
        alt:"paypal"
    },
    {
        id:1,
        imgURL:"/images/Icon awesome-stripe.png",
        alt:"stripe"
    },
    {
        id:2,
        imgURL:"/images/Icon simple-xero.png",
        alt:"xero"
    },
    {
        id:3,
        imgURL:"/images/Icon awesome-apple-pay.png",
        alt:"apple-pay"
    },
]

export default function SocialProof(){
    return(
        <section className="paymentMethod sp-90">
                <div className="container">
                    <div className="row ">
                        <div className="flex-space-around">
                        {socialProof.map((i => (
                            <div className="col-lg-3 flex-center-align" key={i.id}>
                                <div className="box flex-center-align">
                                    <img src={i.imgURL} alt={i.alt} />
                                </div>
                            </div>
                        )))}
                        </div>
                    </div>
                </div>
            </section>
    )
}