import React from 'react';
import { Row,Button} from 'antd';
import {Link} from 'react-router-dom'

import './style.css'


class AnnounceListCard extends React.Component {
   render(){
       return(
            <div>
                
                <p>{this.props.title}</p>
                <p>{this.props.description}</p>
                <p>{this.props.created_at}</p>
                <p>{this.props.summary}</p>
                {/* <div>
                    <Button className="button"><Link to={`announceDetail/${this.props.id}`}>ဆက်လက်ဖတ်ရှုရန်</Link></Button>
                </div> */}
            </div>
       )
   }
}
export default AnnounceListCard;