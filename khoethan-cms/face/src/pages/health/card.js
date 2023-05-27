import React from 'react';
import './style.css'

class ClinicCard extends React.Component {
   render(){
       return(
            <div className="clinic-card">
                {/* <img src={this.props.image}/> */}
                <h3>{this.props.name}</h3>
                <p>{this.props.description}</p>
                <p>{this.props.position_name}</p>
                <p>{this.props.phone_no}</p>
                
                
                <br></br></div>
       )
   }
}
export default ClinicCard;