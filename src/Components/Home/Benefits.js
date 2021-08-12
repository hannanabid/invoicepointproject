import React from 'react';
import MainHeading from '../Common/MainHeading';


const benefitsData = [
    {
        id:0,
        name:"Online Payments",
        description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
        imgURL:"/images/Group 80.png",
    },
    {
        id:1,
        name:"Sign Your Invoice",
        description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
        imgURL:"/images/Group 81.png",
    },
    {
        id:2,
        name:"Payment Method",
        description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
        imgURL:"/images/Group 82.png",
    },
    {
        id:3,
        name:"Subscriptions",
        description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
        imgURL:"/images/Group 83.png",
    },
    {
        id:4,
        name:"Time Tracking",
        description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
        imgURL:"/images/Group 84.png",
    },
    {
        id:5,
        name:"Heading",
        description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
        imgURL:"/images/Group 125.png",
    },
]

export default function Benefits(){
    return(
        <section className="Benefits sp-90">
            <MainHeading headingName="Benefits of using Invoice Point" />
            <div className="container sp-60">
                <div className="row">
                    {benefitsData.map((i => (
                        <div className="col-lg-4" key={i.id}>
                            <div className="p-20 benefit-box pt-20 mb-30">
                                <div className="image flex-center-align">
                                    <img src={i.imgURL} className="flex-align-item"></img>                              
                                </div>
                                <h3 className="h-3 h-bold pt-20">
                                    {i.name}
                                </h3>
                                <p className="paragraph">
                                    {i.description}
                                </p>
                            </div>
                        </div>
                    )))}
                </div>
            </div>
        </section>
    )
}