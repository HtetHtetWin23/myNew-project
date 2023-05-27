import React from "react"
import api from "../../apis"
import {Link} from 'react-router-dom'
import {Button,Form} from 'antd'
import { Card, Col, Row } from 'antd';
import '../../App.css'
import './style.css'
import PageHeaderWrapper from 'components/PageHeaderWrapper';


const url = "http://localhost:9991"
class CommitteeDetail extends React.Component{
    constructor(){
        super();
        this.state ={
            data : [],
            position_data:''
        
        }
    }
    componentWillMount(){
        const id =this.props.match.params.id;
        this.getCommitteeById(id)
        this.getPositionById(id)
    }
    getCommitteeById(id){
        api.get(`committee/${id}`).then(res=>this.setState({data:res.data.data}))
    }
    getPositionById(id){
        api.get(`position/${id}`).then(res=>this.setState({position_data:res.data.data}))
    }
    render(){
        const data =this.state.data;
        const pod=this.state.position_data;
        
        console.log(data)
        return(
            
           <div>
                 <PageHeaderWrapper />

                <div className="card"> 
                 

                 
                     {/* <Col span={8}>
                     <img src={`${url}/${data.image}`} witdh="300px" height="300px"/>
                     </Col>
                     <Col span={14} className="committee-detail" >
                         <p>အမည်    =  {data.name}</p>
                         <p>ရာထူး    = {data.position_name}</p>
                         <p>ဖုန်းနံပါတ်   =  {data.phone_no}</p>
                         <p>ဖော်ပြချက်={data.description}</p>
                     </Col>        */}
                     <h3 className="committee-header">{data.description}</h3>
                     <div className="committee-card">
              <Row>
                  <Col span={6}>
                      <Card className="back"
                           hoverable
                           style={{width:260,height:340}}
                           cover={<img src={`${url}/${data.image}`} ></img>}>
                           <div >
                           <h3 className="justify" >အမည်  -{data.name}</h3>
                           <h3 className="justify">ရာထူး  -{data.position_name}</h3>
                           <h3 className="justify">ဖုန်းနံပါတ် -{data.phone_no}</h3>
                           </div>
                           {/* <Meta name={this.props.name} position_name={this.props.position_name} phone_no={this.props.phone_no} /> */}
                       </Card>
                       <br></br>
                  </Col>
              </Row>                
        </div>
                     
                 <br></br>
                 <Button className="btn"><Link to="/committee">နောက်သို့</Link></Button>
             </div>
           </div>
             

        )
    }
}
export default Form.create()(CommitteeDetail)