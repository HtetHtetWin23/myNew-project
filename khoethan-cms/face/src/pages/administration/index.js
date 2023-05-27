import React from 'react'
import CommitteeCard from './card'
import {Col,Row,Button} from 'antd'
import Heading from '../../components/heading'
import './style.css'
import api from '../../apis'


const url = "http://localhost:9991/"

class Administration extends React.Component{
    constructor(){
        super();
        this.state ={
            data:[],
            
        }
                
    }
    componentWillMount(){
       this.getAllCommittee();

    }
    getAllCommittee(){
        api.get('committee').then(result=>this.setState({
            data :result.data.data,
            
        }))
    }
   
    render(){
        return(
            <div className="body">
                <Heading name="product">အုပ်ချုပ်ရေး</Heading>               
                <div>
                    <div > 
                        <Row>
                            {
                                this.state.data.map((item)=> {
                                    return <Col xs={24} sm={24} md={12} lg={6}>
                                    <CommitteeCard id={item.id} name={item.name} position_name={item.position_name} phone_no={item.phone_no}
                                    image={url+item.image} />
                                    </Col>

                                })
                            }
                        </Row>
                        <br></br>   
                    </div>
                </div>
            </div>
        )
    }
}
export default Administration;