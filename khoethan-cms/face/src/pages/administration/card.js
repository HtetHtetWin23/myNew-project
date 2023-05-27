import React from 'react';
import {Card} from 'antd';
import {Row,Col} from 'antd'
import './style.css'

const {Meta} = Card;

class CommitteeCard extends React.Component {
   render(){
       return(
            <div className="committee-card">
              <Row>
                  <Col xs={24} sm={24} md={12} lg={6}>
                      <Card className="back"
                           hoverable
                           style={{width:260,height:340}}
                           cover={<img src={this.props.image}></img>}>
                           <div className="justify">
                           <h3>အမည်  -{this.props.name}</h3>
                           <h3>ရာထူး  -{this.props.position_name}</h3>
                           <h3>ဖုန်းနံပါတ် -{this.props.phone_no}</h3>
                           </div>
                           {/* <Meta name={this.props.name} position_name={this.props.position_name} phone_no={this.props.phone_no} /> */}
                       </Card>
                       <br></br>
                  </Col>
              </Row>
                {/* <img src={this.props.image}/>
                <h3>{this.props.position_name}</h3>
                <p>{this.props.description}</p>
                <p>{this.props.phone_no}</p> */}
                
        </div>
       )
   }
}
export default CommitteeCard;