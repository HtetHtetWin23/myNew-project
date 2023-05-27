import React from "react"
import api from "../../apis"
import {Link} from 'react-router-dom'
import {Button,Form} from 'antd'
import '../../App.css'
import {Row,Col,Card} from 'antd'
import PageHeaderWrapper from 'components/PageHeaderWrapper';

import './style.css'

const url = "http://localhost:9991"
class PagodaDetail extends React.Component{
    constructor(){
        super();
        this.state ={
            data : '',
            file : [],
           
          
        }
    }
    componentWillMount(){
        const id =this.props.match.params.id;
        this.getPagodaDetail(id);
        this.getFileById(id);
       
       
    }
   
    getFileById = (id) => {
        api.get(`pagoda_image/${id}`).then(res => this.setState({
            file :res.data.data
        }))
        console.log(this.state.file)
    }
    
    getPagodaDetail(id){
        api.get(`pagodaDetail/${id}`).then(res=>this.setState({data:res.data.data}))
    }

    render(){
        const data =this.state.data;
        console.log(data)
        return(
            <div>
                 <PageHeaderWrapper />
               
                <h3 className="pagoda-name">{data.pagoda_name}</h3>

                {
                    this.state.file.map((file) => {
                        return (
                            <div>
                                <img className="pagoda-image" src={`${url}/${file.name}`} />
                                
                            </div>
                        )
                    })
                }
                <Row>
                    <Col span={23}>
                    <p className="pagoda-detail">{data.description}</p>
                    </Col>
                </Row>
                <Button className="back-btn"><Link to="/pagoda">နောက်သို့</Link></Button>
            </div>

        )
    }
}
export default Form.create()(PagodaDetail)