import React from 'react'
import api from '../../apis'
import {Button,Form} from 'antd'
import {Link} from 'react-router-dom'
import {Col, Row } from 'antd';
import Moment from 'react-moment'
import './style.css'
import PageHeaderWrapper from 'components/PageHeaderWrapper';





const imagUrl = "http://localhost:9991"
class PostDetail extends React.Component{
    constructor(){
        super()
        this.state={
            data:[],
            file : [],
            
            
        }
    }
    
    componentWillMount(){
        const id =this.props.match.params.id;
        this.getAllPostById(id)
        this.getFileById(id)
       
    }
    
    getAllPostById = (id)=>{
        api.get(`postDetail/${id}`).then(result=>this.setState({
            data : result.data.data
        }))
    }
    getFileById = (id) => {
        api.get(`post_image/${id}`).then(res => this.setState({
            file :res.data.data
        }));
        console.log(this.state.file)
    }

    render(){
        const data =this.state.data;
        console.log(data)
        return(
            
            <div>
                <PageHeaderWrapper />

                <div className="news">
            
            <h3 className="post-head">{data.title}</h3>
            
            <Row>
                
                <div>
                {
                    this.state.file.map((file)=>{
                        return(
                            <Col span={6}>
                                <img className="post-image" src={`${imagUrl}/${file.name}`} />
                            </Col>
                        )
                    })
                }
                </div>                        
                <Row>
                    <Col span={6}>
                    <img className="post-image" src={`${imagUrl}/${data.title_image}`} />
                    </Col>
                </Row><br></br><br></br>
                <Row>
                    <div>
                        <p>{data.description}</p>
                        <p>Posted Date : <Moment format="DD-MM-YYYY HH:mm">{data.created_at}</Moment></p>
                        <p>Posted By :{data.created_by}</p>
                    </div>
                </Row>
            </Row>
            <Button className="btn"><Link to="/post">နောက်သို့</Link></Button>                                  
        </div>         
            </div>
        )
    }
}
export default Form.create()(PostDetail);
