import React,{Component} from 'react';

export default class IhealthSingle extends Component {

  toggleChecked(){


    Meteor.call('toggleIhealth',this.props.ihealth);
  }
  deleteIhealth(){


    Meteor.call('deleteIhealth',this.props.ihealth);
  }
render(){

const ihealthClass = this.props.ihealth.complete ? "checked" : "";
const status = this.props.ihealth.complete ? <span className="completed">completed</span> : '';
  return(

    <li className={ihealthClass}>
    <input type="checkbox"
      readOnly={true}
      checked={this.props.ihealth.complete}
      onClick={this.toggleChecked.bind(this)}/>
    {this.props.ihealth.text}
    {status}
    <button className="btn-cancel"
    onClick={this.deleteIhealth.bind(this)}>
    &times;
    </button>
    </li>

  )
}


}
