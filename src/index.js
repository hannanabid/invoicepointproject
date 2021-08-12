import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomeMain from './Components/Home/HomeMain';
import FreelancersMain from './Components/Freelancers/FreelancersMain';
// import SmallBusinessMain from './Components/SmallBuiness/SmallbusinessMain';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';

const App = () =>{
    return(      
            <Router>
                <Fragment>
                    <Route path="/" exact component={HomeMain} />
                    <Route path="/freelancers" component={FreelancersMain}/>
                    {/* <Route path="/smallbusiness" component={SmallbusinessMain}/> */}
                </Fragment>
            </Router> 
    )   
}

ReactDOM.render(<App />,document.querySelector('#root'));