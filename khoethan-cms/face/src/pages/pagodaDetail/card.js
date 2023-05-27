import React from 'react';
import './style.css'

class PagodaDetailCard extends React.Component {
   render(){
       return(
            <div>
                <img src={this.props.image}/>
                <h3>{this.props.pagoda_name}</h3>
                <p>{this.props.description}</p>
                
        </div>
       )
   }
}
export default PagodaDetailCard;