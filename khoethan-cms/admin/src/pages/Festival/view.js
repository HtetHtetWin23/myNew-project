import React from "react"
import api from "../../apis"
import {Link} from 'react-router-dom'
import {Button,Form} from 'antd'
import '../../App.css'
import {Row,Col,Card} from 'antd'
import PageHeaderWrapper from 'components/PageHeaderWrapper';

import './style.css'

const url = "http://localhost:9991"
class FestivalDetail extends React.Component{
    constructor(){
        super();
        this.state ={
            data : '',
            file : [],
           
          
        }
    }
    componentWillMount(){
        const id =this.props.match.params.id;
        this.getFestivalDetail(id);
        this.getFileById(id);
       
       
    }
   
    getFileById = (id) => {
        api.get(`festival_image/${id}`).then(res => this.setState({
            file :res.data.data
        }))
        console.log(this.state.file)
    }
    
    getFestivalDetail(id){
        api.get(`festivalDetail/${id}`).then(res=>this.setState({data:res.data.data}))
    }

    render(){
        const data =this.state.data;
        console.log(data)
        return(
            <div>
                 <PageHeaderWrapper />
                <Row>
                <h3 className="header">{data.title}</h3>

                {
                    this.state.file.map((file) => {
                        return (
                            <div>
                                <img className="festival-image" src={`${url}/${file.name}`} />
                                
                            </div>
                        )
                    })
                }
               
                </Row>
                
                    <p>{data.description}</p>
              
                <Button className="btn"><Link to="/festival">နောက်သို့</Link></Button>
            </div>

        )
    }
}
export default Form.create()(FestivalDetail)