import React from 'react'
import api from '../../apis'
import {Button,Form} from 'antd'
import {Link} from 'react-router-dom'
import { Card, Col, Row } from 'antd';
import '../../App.css'
import './style.css'
import PageHeaderWrapper from 'components/PageHeaderWrapper';


const url = "http://localhost:9991"
class ProductDetail extends React.Component{
    constructor(){
        super()
        this.state={
            data:'',
            file : [],
            productType:''
            
        }
    }
    
    componentWillMount(){
        const id =this.props.match.params.id;
        this.getProductById(id);
        this.getJoinResult(id);
        this.getFileById(id)
        
    }
    getFileById = (id) => {
        api.get(`product_image/${id}`).then(res => this.setState({
            file :res.data.data
        }))
        console.log(this.state.file)
    }
    getJoinResult = (id)=>{
        api.get(`product/${id}`).then(res=>this.setState({
            productType : res.data.data
        }))
    }
    
    getProductById(id){
        api.get(`productDetail/${id}`).then(res=>this.setState({data : res.data.data}))
    }
    

    render(){
        const data =this.state.data;
        const pt=this.state.productType;
        console.log(data)
        return(
            <div>
                <PageHeaderWrapper />
                <div className="card">
            
                <div>
                    <h3 className="headpro">{pt.productType_name}</h3><br></br>
                    <Row>
                        {
                            this.state.file.map((file)=>{
                                return(
                                    <div>
                                        <Col span={8}>
                                           <img className="one" src={`${url}/${file.name}`}  />
                                        </Col>
                                    </div>
                                )
                            })
                        }
                        <Col span={16} className="detail" >
                            <p>အမည်    =   {data.product_name}</p>
                            <p>အမျိုးအစား   =   {pt.productType_name}</p>
                            <p>ဖော်ပြချက်= {data.description}</p>
                        </Col>       
                    </Row><br></br>
                    <Button className="btn"><Link to="/product">နောက်သို့</Link></Button>
                </div>
            </div>       
            </div>
        )
    }
}
export default Form.create()(ProductDetail);
