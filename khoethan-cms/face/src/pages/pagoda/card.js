import React from 'react';
import './style.css'

class PagodaCard extends React.Component {
   render(){
       return(
            <div className="monastery-card">
                <img src={this.props.image}/>
                <h3>{this.props.pagoda_name}</h3>
                
        </div>
       )
   }
}
export default PagodaCard;