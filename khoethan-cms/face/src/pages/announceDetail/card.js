import React from 'react';
import { Row,Button} from 'antd';
import {Link} from 'react-router-dom'


import './style.css'


class AnnounceDetailCard extends React.Component {
   render(){
       return(
            <div>
                
                <p>{this.props.title}</p>
                <p>{this.props.description}</p>
                <p>{this.props.created_at}</p>
            </div>
       )
   }
}
export default AnnounceDetailCard;