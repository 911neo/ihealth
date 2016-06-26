import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class IhealthDetail extends Component {
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

    ihealths(){

      return Ihealth.findOne(this.props.id);
    }

render(){
  let ser =this.ihealth();

  if(!res){
    return(<div>loading...</div>);
  }
 return (

   <div>
   <h1>{ser.text}</h1>
   </div>
 )


}


}
