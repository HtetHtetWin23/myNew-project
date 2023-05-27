import React from 'react';
import './style.css'
import Heading from '../heading'
import AnnouncementCard from './card'
import { Row, Col,Button,Icon } from 'antd';
import api from '../../apis'
import {Link} from 'react-router-dom'

//const url = "http://localhost:9991/"
class Announcement extends React.Component {

    constructor(){
        super()
        this.state = {
            data : []
            
        }
    }

    componentWillMount(){
        this.getAllAnnouncement();
    }

    getAllAnnouncement = () => {
        api.get('announce_limit').then((result) => this.setState({
            data: result.data.data
        }))
    }
    
    render(){
       return(
           <div className="body">
               
                <Heading name="announce">ကြေညာချက်များ</Heading>
                <div className="announce">
                
                <Row>
                    {
                        this.state.data.map((item) => {
                            
                            return(
                                <div>
                                    <Col xs={24} sm={24} md={12} lg={6}>
                                    
                                        <AnnouncementCard id={item.id} title={item.title} summary={item.summary}  
                                        created_at={item.created_at} />
                                    </Col>
                                </div>
                            )
                            
                        })
                    }
                </Row>
           </div>
           <div ><br></br>
                <Button className="buttonn"><Link to="/announceList" >ဆက်လက်ဖတ်ရှုရန်</Link></Button>
            </div> 
           </div>
       )
   }
}
export default Announcement;