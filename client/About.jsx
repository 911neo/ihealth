import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class About extends Component {

setVar(){
  Session.set('Meteor.loginButtons.dropdownVisible',true);
}

render(){
 return (

   <ReactCSSTransitionGroup
    component="div"
    transitionName="route"
    transitionEnterTimeout={600}
    transitionAppearTimeout={600}
    transitionLeaveTimeout={400}
    transitionAppear={true}>
   <h1>About us</h1>
   <ul>
   <li><p> iHealth was created in 2009 in Silicon Valley, USA and opened the European subsidiary, iHealthLabs Europe, in Paris in 2013.</p></li>
   <li><p> iHealth manufactures and distributes innovative, clinically validated products for connected health.</p></li>
   </ul>
   <h2>Our mission, your health</h2>

   <p>Today, everyone is aware that it is important to pay attention to your own health. Our goal is to help you better understand the signals your body so you can take action to stay healthy.</p>
   <p>We are changing what is today a curative healthcare system into a preventative one and are building new tools to develop that special relationship between patients and doctors.</p>
   <p>We manufacture perfect healthcare products with intuitive and user-friendly designs. We have used the best designers, doctors, specialists and more to ensure that our products are reliable, easy to use and that they offer you the best possible experience. Our products automatically sync with your smartphone or tablet so that you can view your vital signs at any time,  in any place.
    Become an actor of your own health!</p>
   <p>Our range of products includes connected blood pressure monitors, sleep and activity trackers, glucometers, body analysis scales and pulse oximeters.</p>
   <button onClick={this.setVar}>Sign Up</button>
   </ReactCSSTransitionGroup>
 )


}


}
