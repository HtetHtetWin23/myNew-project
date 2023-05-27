import React from 'react'
import ReligiousCard from './card'
import {Col,Row,Button} from 'antd'
import Heading from '../../components/heading'
import './style.css'
import {Icon,Menu,Layout} from 'antd'
import api from '../../apis'
import '../../App.css'


const url = "http://localhost:9991/"

class Religious extends React.Component{
    constructor(){
        super();
        this.state ={
            data:[],
        }
                
    }
    componentWillMount(){
       this.getAllMonastery();
        

    }
    getAllMonastery = ()=>{
        api.get('monestry_list').then(result=>this.setState({
            data : result.data.data
        }))
    }
   
    render(){
        console.log(this.state.file)
        return(
            <div className="body">
                <Heading name="monastery">ဘာသာရေး</Heading>
               
                       
                    <div className="monastery"> 
                        <Row>
                            {
                                this.state.data.map((item)=> {
                                    
                                    return <Col lg={8} md={8}>
                                    <ReligiousCard  image={url + item.file_name} />
                                    <p className="pgh"> {item.name} </p>
                                    <Button className="bun"><a href={`monasteryDetail/${item.id}`}>ဆက်လက်ဖတ်ရှုရန်</a></Button>
                                    </Col>

                                })
                            }
                        </Row>
                    </div>
            </div>
        )
    }
}
export default Religious;