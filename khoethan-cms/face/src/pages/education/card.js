import React from 'react';
import './style.css'

class SchoolCard extends React.Component {
   render(){
       return(
            <div >
            <img src={this.props.image}/>
            <h4>{this.props.name}</h4>
            <p>{this.props.description}</p>
            </div>
       )
   }
}
export default SchoolCard;