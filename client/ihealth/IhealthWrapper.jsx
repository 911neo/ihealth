import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import IhealthFrom from './IhealthFrom.jsx';
import IhealthSingle from './IhealthSingle.jsx';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
Ihealth = new Mongo.Collection("ihealth");

export default class IhealthWrapper extends TrackerReact(React.Component) {

constructor (){

  super();
  this.state = {
    subscription:{
      ihealth: Meteor.subscribe("userIhealth")
    }
  }
}

componentWillUnmount(){

  this.state.subscription.ihealth.stop();
}

  ihealth(){

    return Ihealth.find().fetch();
  }




addIhealth(event){
  event.preventDefault();
  var text = this.refs.ihealth.value.trim();

  Meteor.call('addIhealth',text,()=> {
   this.refs.ihealth.value ="";
  //console.log(text);
});
}
render () {
  let ihea =this.ihealth();
//  if (ihea.length <1) {
//    return (<div>loading</div>)
//  }
//console.log(this.ihealth());
return (
<div>
<h1>Ihealth -{Session.get('test')}</h1>
<IhealthFrom/>
<ReactCSSTransitionGroup
 component="div"
 transitionName="route"
 transitionEnterTimeout={600}
 transitionAppearTimeout={600}
 transitionLeaveTimeout={400}
 transitionAppear={true}>
<ReactCSSTransitionGroup
 component="ul"
 className="ihealth"
 transitionName="resolutionLoad"
 transitionEnterTimeout={600}
 transitionLeaceTimeout={400}>
{this.ihealth().map((ihealth)=>{
return <IhealthSingle key={ihealth._id} ihealth={ihealth}/>
})}
</ReactCSSTransitionGroup>
</ReactCSSTransitionGroup>
</div>


)
}
}
