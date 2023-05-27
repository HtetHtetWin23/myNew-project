import React from 'react'
import api from '../../apis'
import {Button,Form} from 'antd'
import {Link} from 'react-router-dom'
import { Card, Col, Row } from 'antd';
import '../../App.css'
import Moment from 'react-moment'
import './style.css'
import PageHeaderWrapper from 'components/PageHeaderWrapper';


class AnnouncementDetail extends React.Component{
    constructor(){
        super()
        this.state={
            data:[]
        }
    }
    
    componentWillMount(){
        const id =this.props.match.params.id;
        this.getAnnouncementById(id)
    }
    getAnnouncementById(id){
        api.get(`announce/${id}`).then(res=>this.setState({data : res.data.data}))
    }

    render(){
        const data =this.state.data;
        console.log(data)
        return(
            
            <div className="descriptions">
            <PageHeaderWrapper/>
              
                 <h3 className="post-head" >{data.title}</h3>
                 <br></br>
                 <p>{data.description}</p>

                 <br></br>
                
                 <p>Posted_Date : <Moment format="DD-MM-YYYY HH:mm">{data.created_at}</Moment></p>
                 <p>Posted_By: {data.created_by}</p>
               
               

                <br></br>
                <Button className="btn"><Link to="/announce">နောက်သို့</Link></Button>
            </div>
        )
    }
}
export default Form.create()(AnnouncementDetail);