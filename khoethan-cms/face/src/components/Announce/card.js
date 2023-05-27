import React from 'react';
import { Card,Row,Button} from 'antd';
import {Link} from 'react-router-dom';
import Moment from 'react-moment'
import {Icon} from 'antd'

import './style.css'
const {Meta}=Card;

class AnnouncementCard extends React.Component {
   render(){
       return(
            <div className="announce-card">
                    <div >
                    <Row>
                        <Card style={{width:'280px',height:'450px'}}>
                        <Icon  className="sound" type="sound" />

                            <p className="b">{this.props.title}</p>
                            <p className="b">{this.props.summary}</p>
                            <p className="b">Posted_Date:<Moment format="DD-MM-YYYY HH:mm">{this.props.created_at}</Moment></p>
                            <div>
                                <Button className="button"><Link to={`announceDetail/${this.props.id}`}>ဆက်လက်ဖတ်ရှုရန်</Link></Button>
                            </div>
                        </Card>
                    </Row>
                    </div>
            </div>
       )
   }
}
export default AnnouncementCard;