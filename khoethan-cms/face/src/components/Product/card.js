import React from 'react';
import './style.css'

class ProductCard extends React.Component {
   render(){
       return(
            <div className="pt-card">
                <img src={this.props.image}/>
                <h3>{this.props.product_name}</h3>
                <p>{this.props.description}</p>
                <button className="btn"><a href={`productDetail/${this.props.id}`}>အသေးစိတ်ကြည့်ရှုရန်</a></button>
            </div>
       )
   }
}
export default ProductCard;