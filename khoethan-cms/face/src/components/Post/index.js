import React from 'react';
import './style.css'
import Heading from '../heading'
import PostCard from './card'
import { Row, Col,Button} from 'antd';
import {Link} from 'react-router-dom'
import api from '../../apis'

const url = "http://localhost:9991/"
class Post extends React.Component {

    constructor(){
        super()
        this.state = {
            data : [],
          
        }
    }

    componentWillMount(){
        this.getAllPost();
    }

    getAllPost = () => {
        api.get('post_limit').then((result) => this.setState({
            data: result.data.data
        }))
    }
    
    render(){
       return(
           <div className="body">
                <Heading name="post">သတင်းများ</Heading>
                <div className="post">
                <Row>
                    {
                        this.state.data.map((post) => {
                            let img = post.title_image ? url  + post.title_image : "https://static1.squarespace.com/static/5390e38de4b040333af1eb61/587ab3f0cd0f68a2e5cc3470/587ab3f0d2b857926893d491/1484437352538/1-jasmine.jpg";
                            return <Col lg={6} >
                                <PostCard id={post.id} title={post.title} title_image={img}/>
                            </Col>
                        })
                    }
                </Row>
                </div>
                
                <div >
                <Button className="button"><Link to="/news" >ဆက်လက်ဖတ်ရှုရန်</Link></Button>
            </div> 
           </div>
       )
   }
}
export default Post;