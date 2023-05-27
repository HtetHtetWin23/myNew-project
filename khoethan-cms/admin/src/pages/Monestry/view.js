import React from 'react'
import api from '../../apis'
import {Button,Form,Table} from 'antd'
import {Link} from 'react-router-dom'
import '../../App.css'
import { Card, Col, Row } from 'antd';
import './style.css'
import PageHeaderWrapper from 'components/PageHeaderWrapper';


const url = "http://localhost:9991"
class MonestryDetail extends React.Component{
    constructor(){
        super()
        this.state={
            data:'',
            file:[]
            
        }
    }
    
    componentWillMount(){
        const id =this.props.match.params.id;
        this.getMonasteryDetail(id);
        this.getFileById(id)
       
    }
    getMonasteryDetail =(id) =>{
        api.get(`monestryDetail/${id}`).then(res=>this.setState({
            data : res.data.data
        }))
    }
    getFileById = (id) => {
        api.get(`monestry_image/${id}`).then(res => this.setState({
            file :res.data.data
        }))
        console.log(this.state.file)
    }

    
    render(){
         const data =this.state.data;
       
        
        return(
            
            <div>
                <PageHeaderWrapper />

            <h3 className="monestry-head">{data.name}</h3><br></br>
                            
            <Row >
               
               {
                    this.state.file.map((file) => {
                        return (
                            <div className="my-card">
                                <img src={`${url}/${file.name}`} />
                            </div>
                        )
                    })
                }
                
            </Row><br></br>
            <Row>
            <div className="details" >
                    <p>အမည်    =   {data.name}</p>
                    <p>ကျောင်းထိုင်ဆရာတော်   =   {data.abbot}</p>
                    <p>သံဃာတော်အရေအတွက်   =   {data.number_of_monk}</p>
                    <p>ဘုရားပွဲကျင်းပသည့်ရက်  =   {data.festival_date}</p>
                    <p>ဖုန်းနံပါတ်          =   {data.phone_no}</p>
            </div> 
            <h3 className="head">သမိုင်းအကျဥ်း</h3>
                <p className="description">{data.description}</p>
      
            </Row>
            <Button className="btn"><Link to="/monestry">နောက်သို့</Link></Button>
            </div> 
        )
    }
}
export default Form.create()(MonestryDetail);