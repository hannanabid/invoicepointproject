import React from 'react';


function MainHeading(props){
    return(
        <h1 className="h-1 h-bold mb-20 text-center">
            {props.headingName}
        </h1>
    )
}
export default MainHeading;