import React from 'react';
import './style.css'
import Heading from '../../components/heading'
import AnnounceDetailCard from './card'
import { Row,Icon,Button,Col } from 'antd';
import api from '../../apis'
import {Link} from 'react-router-dom'
import Moment from 'react-moment'


//const url = "http://localhost:9991/"
class AnnounceDetail extends React.Component {

    constructor(){
        super()
        this.state = {
            data : [],
            idValues:'1'
            
        }
    }

    componentWillMount(){
        const id=this.props.match.params.id;
        this.getAllAnnouncement(id);
    }

    getAllAnnouncement = (id) => {
        api.get(`announce/${id}`).then((result) => this.setState({
            data: result.data.data
        }))
    }
    
    render(){
        const data=this.state.data;
       
        console.log(data)
       return(
           <div className="body">
               
                <Heading name="anount">ကြေညာချက်များ</Heading>
             
                    <Link className="icon-left" to="/announceList"><Icon type="arrow-left" /></Link>
                    {/* <Link className="icon-right" to={`announceDetail/${this.state.data.id+1}`}><Icon type="arrow-right" /></Link>                        */}
                    
                
                <div className="anount">
                <Row>
                    <Col xs={24} sm={24} lg={24} md={24}>
                    <div className="one">
                        <AnnounceDetailCard id={this.state.data.id}/>
                        <h3 className="tit">{this.state.data.title}</h3>
                        <p className="description">{this.state.data.description}</p>
                        
                        <p>Posted_Date :<Moment format="DD-MM-YYYY HH:mm">{this.state.data.created_at}</Moment></p>
                    </div>
                    </Col>
                </Row><br></br>
           </div><br></br>
           </div>
       )
   }
}
export default AnnounceDetail;