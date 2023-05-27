import React from 'react';
import './style.css'

class MonasteryDetailCard extends React.Component {
   render(){
       return(
            <div>
                <img src={this.props.image}/>
                <h3>{this.props.name}</h3>
                <p>{this.props.abbot}</p>
                <p>{this.props.number_of_monk}</p>
                <p>{this.props.festival_date}</p>
                <p>{this.props.description}</p>
                <p>{this.props.phone_no}</p>
                {/* <p>{this.props.productType_name}</p> */}
            </div>
       )
   }
}
export default MonasteryDetailCard;