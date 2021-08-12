import React, { Fragment } from 'react';

const data = [
    {
        id:0,
        planName: "Intro",
        price:30,
        planDescription:"lorem ipsum dolor sit amet, consetetur sadipscing diam nonumy eirmod tempor invidunt ut labore.",
        feature1:"Lorem ipsum dolor sit amet, miaamore",
        feature2:"Lorem ipsum dolor sit amet, miaamore",
        feature3:"Lorem ipsum dolor sit amet, miaamore",
        feature4:"Lorem ipsum dolor sit amet, miaamore",
        feature5:"Lorem ipsum dolor sit amet, miaamore",
    },
    {
        id:1,
        planName: "Intro",
        price:20,
        planDescription:"lorem ipsum dolor sit amet, consetetur sadipscing diam nonumy eirmod tempor invidunt ut labore.",
        feature1:"Lorem ipsum dolor sit amet, miaamore",
        feature2:"Lorem ipsum dolor sit amet, miaamore",
        feature3:"Lorem ipsum dolor sit amet, miaamore",
        feature4:"Lorem ipsum dolor sit amet, miaamore",
        feature5:"Lorem ipsum dolor sit amet, miaamore",
    },
    {
        id:2,
        planName: "Intro",
        price:35,
        planDescription:"lorem ipsum dolor sit amet, consetetur sadipscing diam nonumy eirmod tempor invidunt ut labore.",
        feature1:"Lorem ipsum dolor sit amet, miaamore",
        feature2:"Lorem ipsum dolor sit amet, miaamore",
        feature3:"Lorem ipsum dolor sit amet, miaamore",
        feature4:"Lorem ipsum dolor sit amet, miaamore",
        feature5:"Lorem ipsum dolor sit amet, miaamore",
    },
    {
        id:3,
        planName: "Expert",
        price:50,
        planDescription:"lorem ipsum dolor sit amet, consetetur sadipscing diam nonumy eirmod tempor invidunt ut labore.",
        feature1:"Lorem ipsum dolor sit amet, miaamore",
        feature2:"Lorem ipsum dolor sit amet, miaamore",
        feature3:"Lorem ipsum dolor sit amet, miaamore",
        feature4:"Lorem ipsum dolor sit amet, miaamore",
        feature5:"Lorem ipsum dolor sit amet, miaamore",
    }
]


function PlanBox(){
    return(
        <Fragment>
            {data.map((i => (
                <div className="col-lg-3" key={i.id}>
                <div className="planBox br-8 pl-20">
                        <h6 className="h-6 pt-15">
                            {i.planName}
                        </h6>
                        <h3 className="h-3 h-bold pt-15 pr- 20">
                            ${i.price} <span className="planMonth">/month</span></h3>
                        <p className="planPara pt-15">
                            {i.planDescription}
                        </p>
                        <div className="para-10 mt-10 pt-10">
                            <img src="/images/Group65.png"></img> <span>{i.feature1}</span>
                        </div>
                        <div className="para-10 mt-10 ">
                            <img src="/images/Group65.png"></img> <span>{i.feature2}</span>
                        </div>
                        <div className="para-10 mt-10 ">
                            <img src="/images/Group65.png"></img> <span>{i.feature3}</span>
                        </div>
                        <div className="para-10 mt-10 ">
                            <img src="/images/Group65.png"></img> <span>{i.feature4}</span>
                        </div>
                        <div className="para-10 mt-10 ">
                            <img src="/images/Group65.png"></img> <span>{i.feature5}</span>
                        </div>
                        <button className="l-btn br-8 mt-20">Choose Plan</button>
                </div>
            </div>
            )))}
        </Fragment>
    )
}

export default PlanBox;