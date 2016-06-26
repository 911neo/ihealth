import React,{Component} from 'react';

export default class IhealthFrom extends Component {

  addIhealth(event){
    event.preventDefault();
    var text = this.refs.ihealth.value.trim();
if(text){
  Meteor.call('addIhealth',text,(error,data)=>{
    if(error){
      Bert.alert('please login before submiting','danger','fixed-top','fa-frown-o');
    } else{
      this.refs.ihealth.value ="";
    }

  console.log(text);
});
}
    
  }

 render(){
   return (
     <div>
     <form className="new-ihealth" onSubmit={this.addIhealth.bind(this)}>
     <input
        type="text"
        ref="ihealth"
        placeholder="enter you details"/>


     </form>
     </div>
   )
 }


}
