import React from 'react';
import './style.css'
import NewsCard from './card'
import {Button,Icon,Row,Col} from 'antd'
import api from '../../apis'
import Heading from '../../components/heading'
import {Link} from 'react-router-dom'
import Moment from 'react-moment'

const url="http://localhost:9991/" 
class PostDetail extends React.Component{
    constructor (){
        super()
        this.state={
            data:'',
           file:[]
        }
    }
    componentWillMount(){
        let id = this.props.match.params.id;
        this.getAllPostById(id);
        this.getFileById(id)
    }
    getFileById = (id) => {
        api.get(`post_image/${id}`).then(res => this.setState({
            file :res.data.data
        }))
        console.log(this.state.file)
    }

    getAllPostById(id){
        api.get(`postDetail/${id}`).then(result=>this.setState({
            data : result.data.data
        }))
    }
    render(){
        const data=this.state.data;
        console.log(data);
        return (
            <div className="body">
                <Heading name="post">သတင်းများ</Heading>
                <Link className="icon-left" to="/news"><Icon type="arrow-left" /></Link>
                <br></br>
                <div className="post">             
                    <div className="news">
                        <p  className="post-title">{data.title}</p>
                        {/* <p>{data.description}</p> */}
                        <Row>
                            
                            <div>
                            {
                                this.state.file.map((file)=>{
                                    return(
                                        <Col lg={6} md={6}>
                                            <img className="image" src={url+file.name} ></img>
                                        </Col>
                                    )
                                })
                            }
                            </div>                        
                            <Row>
                                <Col lg={6} md={6}>
                                <img className="image" src={url+data.title_image} ></img>
                                </Col>
                            </Row><br></br><br></br>
                            <Row>
                                <div>
                                    <p className="nn">{data.description}</p>
                                    <p>Posted Date : <Moment format="DD-MM-YYYY HH:mm">{data.created_at}</Moment></p>
                                    <p>Posted By :{data.created_by}</p>
                                </div>
                            </Row>
                        </Row><br></br><br></br>                                    
                    </div>         
                </div>
            </div>             
        )
    }
}
export default PostDetail;