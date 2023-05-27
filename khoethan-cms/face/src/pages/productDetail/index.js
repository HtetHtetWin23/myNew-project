import React from 'react'
import ProductDetailCard from './card'
import {Col,Row,Button} from 'antd'
import Heading from '../../components/heading'
import './style.css'
import api from '../../apis'
import {Link} from 'react-router-dom'


const url = "http://localhost:9991/"

class ProductDetail extends React.Component{
    constructor(){
        super();
        this.state ={
            data:'',
            productType :'',
            productData:''
        }
                
    }
    componentWillMount(){
        let id =this.props.match.params.id
        this.getJoinResult(id);
        this.getProductTypeById(id);
      
        

    }
    getJoinResult(id){
        api.get(`product/${id}`).then(result=>this.setState({
            productType :result.data.data
        }))
    }
    getProductTypeById = (id)=>{
        api.get(`productDetail/${id}`).then(result=>this.setState({
            data:result.data.data
        }))
    }
   
   
    render(){
    
       const data=this.state.data;
       const pt=this.state.productType;
     
        return(
            <div className="body">
            <div className="product">
                <Heading name="product">{pt.productType_name}</Heading>
               
                
                 {/* <div className="card"> */}
            
                            
                            <Row>
                                <Col lg={8} md={8}>
                                    <img  className="product-image" src={url+this.state.data.file_name} />
                                </Col>
                                <Col lg={16} md={16} className="detail" >
                                    <p>အမည်    =   {data.product_name}</p>
                                    <p>အမျိုးအစား   =   {pt.productType_name}</p>
                                    <p>ဖော်ပြချက်= {data.description}</p>
                                    
                                </Col>       
                            </Row><br></br>
                            <Row>
                                <Col span={24}>
                                <Button className="btns" ><a href={`productItemList/${pt.productType_id}`}>နောက်သို့</a></Button>
                                </Col><br></br><br></br>
                            </Row>
                {/* </div>  */}
            </div>
            </div>
        )
        
    }
}
export default ProductDetail;