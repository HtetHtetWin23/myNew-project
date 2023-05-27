import React from 'react'
import api from '../../apis'
import {Button,Form} from 'antd'
import {Link} from 'react-router-dom'
import { Card, Col, Row } from 'antd';
import '../../App.css'
import './style.css'
import PageHeaderWrapper from 'components/PageHeaderWrapper';



const url = "http://localhost:9991"
class SchoolDetail extends React.Component{
    constructor(){
        super()
        this.state={
            data:'',
            file : []
          
            
        }
    }
    
    componentWillMount(){
        const id =this.props.match.params.id;
        this.getSchoolById(id);
        this.getFileById(id);
       
    }
    getFileById = (id) => {
        api.get(`school_image/${id}`).then(res => this.setState({
            file :res.data.data
        }))
        console.log(this.state.file)
    }
    getSchoolById(id){
        api.get(`schoolDetail/${id}`).then(res=>this.setState({data : res.data.data}))
    }
   

    render(){
        const data =this.state.data;
        console.log(data)
        return(
            <div>
				<PageHeaderWrapper/>

                 <p  className="school-header">{data.description}</p>   
          
            {
                this.state.file.map((file) => {
                    return (
                        <div>
                            <img className="school-image" src={`${url}/${file.name}`} />
                        </div>
                    )
                })
            }
           
           <div>
               <h3  className="grade">{data.name}</h3>
                          
           </div>
            <Button className="btn"><Link to="/school">နောက်သို့</Link></Button>
        </div>

        )
    }
}
export default Form.create()(SchoolDetail);
