import React from 'react';
import './style.css'

class PagodaDetailCard extends React.Component {
   render(){
       return(
            <div >
                <img className="images" src={this.props.image}/>
                <h3>{this.props.pagoda_name}</h3>
                <p>{this.props.description}</p>
                
                {/* <p>{this.props.productType_name}</p> */}
            </div>
       )
   }
}
export default PagodaDetailCard;