import React from 'react';
import './style.css'

class ReligiousCard extends React.Component {
   render(){
       return(
            <div className="monastery-card">
                <img src={this.props.image}/>
                <h3>{this.props.name}</h3>
                
        </div>
       )
   }
}
export default ReligiousCard;