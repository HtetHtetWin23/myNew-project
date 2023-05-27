import React from 'react'
import './style.css'
import Heading from '../heading'
import {Row,Col,Card} from 'antd'
import api from '../../apis'
import '../../App.css'
const {Meta}=Card

const url = "http://localhost:9991/"


class Festival extends React.Component{
    constructor(){
        super();
        this.state ={
            data:[],
        }
                
    }
    componentWillMount(){
       this.getAllFestival();
        

    }
    getAllFestival = ()=>{
        api.get('festival_list').then(result=>this.setState({
            data : result.data.data
        }))
    }
    render(){
        return(
            <div className="body">
                <h2><b><Heading name="new">အထင်ကရပွဲတော်များ</Heading></b></h2><br/>
                <div className="festival-card">
                <div>
                    <Row>
                        {
                            this.state.data.map((item)=>{
                                return<Col xs={24} sm={24} md={12} lg={6}>
                                <Card className="backs"
                                    hoverable
                                    style={{ width: 280,height:560 ,color:"white"}}
                                    cover={<img alt="example" src={url+item.file_name} />}
                                    >
                                    <Meta  title={item.title} description={item.description} />
                                </Card>
                            </Col>
                            
                            })
                        }
                    </Row>
                </div>      
                </div >
                
            </div>
        )
    }
}
export default Festival;