import React from 'react';
import './style.css'
import Heading from '../heading'
import ProductCard from './card'
import { Row, Col,Button } from 'antd';
import api from '../../apis'
import {Link} from 'react-router-dom'

const url = "http://localhost:9991/"
class Products extends React.Component {

    constructor(){
        super()
        this.state = {
            data : []
            
        }
    }

    componentWillMount(){
        this.getAllProduct();
    }

    getAllProduct = () => {
        api.get('product_limit').then((result) => this.setState({
            data: result.data.data
        }))
    }
    
    render(){
       return(
           <div className="body">
               
                <Heading name="product">စီးပွားရေး</Heading>
                <div className="product">
                <Row>
                    {
                        this.state.data.map((product) => {
                            let img = product.file_name ? url + product.file_name : "https://static1.squarespace.com/static/5390e38de4b040333af1eb61/587ab3f0cd0f68a2e5cc3470/587ab3f0d2b857926893d491/1484437352538/1-jasmine.jpg";
                            return <Col lg={6}>
                                <ProductCard id={product.id} product_name={product.product_name} image={img}/>
                            </Col>
                        })
                    }
                </Row>
           </div><br></br>
           <div>
                <Button className="button" htmlType="submit"><Link to="/economic" >ဆက်လက်ဖတ်ရှုရန်</Link></Button>
            </div> 
           </div>
       )
   }
}
export default Products;