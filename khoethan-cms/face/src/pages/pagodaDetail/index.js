import React from 'react'
import PagodaDetailCard from './card'
import {Col,Row,Button} from 'antd'
import Heading from '../../components/heading'
import {Link} from 'react-router-dom'
import './style.css'
import api from '../../apis'


const url = "http://localhost:9991/"

class PagodaDetail extends React.Component{
    constructor(){
        super();
        this.state ={
            data:'',
            file : []
            
        }
                
    }
    componentWillMount(){
        let id =this.props.match.params.id
        this.getPagodaById(id);
        this.getFileById(id)
       

    }
    getPagodaById(id){
        api.get(`pagodaDetail/${id}`).then(result=>this.setState({
            data :result.data.data
        }))
    }
    getFileById = (id) => {
        api.get(`pagoda_image/${id}`).then(res => this.setState({
            file :res.data.data
        }))
        console.log(this.state.file)
    }

    
    render(){
    
       
        return(
            <div className="body">
          
                <Heading name="pagoda">{this.state.data.pagoda_name}</Heading>
                <div>
               
               
                

                {
                    this.state.file.map((file) => {
                        return (
                            
                                <img className="pagoda-image" src={url+file.name}/>
                                
                            
                        )
                    })
                }
                <Row>
                    
                    <p className="pagoda-detail">{this.state.data.description}</p>
                    
                </Row>
                <Button className="back-btn" ><Link to="/pagoda">နောက်သို့</Link></Button>
                <br></br>
            </div>

          
            </div>
        )
        
    }
}
export default PagodaDetail;