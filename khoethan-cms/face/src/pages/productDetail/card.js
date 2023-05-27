import React from 'react';
import './style.css'

class ProductDetailCard extends React.Component {
   render(){
       return(
            <div className="product-card">
                <img src={this.props.image}/>
                <h3>{this.props.product_name}</h3>
                <p>{this.props.description}</p>
                {/* <p>{this.props.productType_name}</p> */}
            </div>
       )
   }
}
export default ProductDetailCard;