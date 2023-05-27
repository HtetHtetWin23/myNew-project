import React from 'react'
import PagodaDetailCard from './pagodaCard'
import {Col,Row,Button} from 'antd'
import Heading from '../../components/heading'
import './style.css'
import api from '../../apis'


const url = "http://localhost:9991/"

class MonasteryDetail extends React.Component{
    constructor(){
        super();
        this.state ={
            data:'',
            pagoda_data : []
            
        }
                
    }
    componentWillMount(){
        let id =this.props.match.params.id
        this.getMonestryById(id);
        this.getPagodaItemList(id);
       

    }
    getMonestryById = (id)=>{
        api.get(`monestryDetail/${id}`).then(result=>this.setState({
            data :result.data.data
        }))
    }

    getPagodaItemList = (id)=>{
        api.get(`pagodaItem_list/${id}`).then(result=>this.setState({
            pagoda_data :result.data.data
        }))
    }
    
    render(){
    
       
        return(
            <div className="body">
            <div className="product">
                <Heading name="product">{this.state.data.name}</Heading>
                 
                            <Row >
                                <Col lg={10} md={10}>
                                    {/* <MonasteryDetailCard  image={url+this.state.data.file_name} /> */}
                                    <div className="my-card">
                                        <img src={url+this.state.data.file_name}/>
                                    </div>
                                </Col>
                                <Col lg={14} md={14} className="details" >
                                    <p>အမည်    =   {this.state.data.name}</p>
                                    <p>ကျောင်းထိုင်ဆရာတော်   =   {this.state.data.abbot}</p>
                                    <p>သံဃာတော်အရေအတွက်   =   {this.state.data.number_of_monk}</p>
                                    <p>ဘုရားပွဲကျင်းပသည့်ရက်  =   {this.state.data.festival_date}</p>
                                    <p>ဖုန်းနံပါတ်          =   {this.state.data.phone_no}</p>
                                    <h3 className="monastery-head">သမိုင်းအကျဥ်း</h3>
                                    <p>{this.state.data.description}</p>

                                    
                                </Col>       
                            </Row><br></br>
                            <div>
               
               
                

                {
                    this.state.pagoda_data.map((item) => {
                        return (
                            
                              <div>
                                   
                                   <Col lg={8} md={8}>
                                   
                                   <PagodaDetailCard id={item.id} image={url+item.file_name} />
                                   <p className="pagh">{item.pagoda_name}</p>
                                   </Col>
                                        
                              </div>
                                
                            
                        )
                    })
                }
                    <Row>
                        <Col span={24}>
                            <Button className="btns" ><a href="/religious">နောက်သို့</a></Button>
                        </Col>
                    </Row>
                </div> 
            </div>
            </div>
        )
        
    }
}
export default MonasteryDetail;