import React from 'react';
import './style.css'

class FestivalCard extends React.Component {
   render(){
       return(
            <div>
                <img src={this.props.image}/>
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
        </div>
       )
   }
}
export default FestivalCard;