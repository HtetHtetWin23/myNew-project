import React from 'react';
import api from '../../apis'
import {Button} from 'antd'
import {Link} from 'react-router-dom'
import { Card, Col, Row } from 'antd';
import '../../App.css'
import PageHeaderWrapper from 'components/PageHeaderWrapper';



const url = "http://localhost:9991"
class PositonDetail extends React.Component {
    constructor() {
        super();
        this.state={
            data : []
        }
    }
    

    componentWillMount(){
        const id = this.props.match.params.id;
        this.getPositionById(id)
    }

    getPositionById = (id) => {
        api.get(`position/${id}`).then((res) => this.setState({data : res.data.data}))
    }

    render() {
        const data = this.state.data
        return (
        <div>
            <PageHeaderWrapper/>
            <Row gutter={16}>
                    <Col span={8}>
                        <Card title="အမည်" bordered={false}>{data.name}</Card>
                    </Col>
                    <Col span={8}>
                        <Card title="ဖော်ပြချက်" bordered={false}>{data.description}</Card>
                    </Col>
                </Row><br></br>
            
            <Button className="btn"><Link to="/position">နောက်သို့</Link></Button>
        </div>
        );
    }
}

export default PositonDetail;