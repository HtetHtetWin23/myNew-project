import React from 'react'
import api from '../../apis'
import {Button,Form} from 'antd'
import {Link} from 'react-router-dom'
import { Card, Col, Row } from 'antd';
import '../../App.css'
import PageHeaderWrapper from 'components/PageHeaderWrapper';


const url = "http://localhost:9991"
class ProductTypeDetail extends React.Component{
    constructor(){
        super()
        this.state={
            data:[]
        }
    }
    
    componentWillMount(){
        const id =this.props.match.params.id;
        this.getProductTypeById(id)
    }
    getProductTypeById(id){
        api.get(`product_type/${id}`).then(res=>this.setState({data : res.data.data}))
    }

    render(){
        const data =this.state.data;
        console.log(data)
        return(
            <div>
				<PageHeaderWrapper/>

                <h3>အချက်အလက်များ</h3>
                <Row gutter={16}>
                    <Col span={12}>
                        <Card title="အမည်" bordered={false}>{data.product_type_name}</Card>
                    </Col>
                    <Col span={12}>
                        <Card title="ဖော်ပြချက်" bordered={false}>{data.description}</Card>
                    </Col>
                </Row>
                <br></br>
                <Button className="btn"><Link to="/productType">နောက်သို့</Link></Button>
            </div>
        )
    }
}
export default Form.create()(ProductTypeDetail);