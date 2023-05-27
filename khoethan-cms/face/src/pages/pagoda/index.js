import React from 'react'
import PagodaCard from './card'
import {Col,Row,Button} from 'antd'
import Heading from '../../components/heading'
import './style.css'
import {Icon,Menu,Layout} from 'antd'
import api from '../../apis'
import '../../App.css'


const url = "http://localhost:9991/"

class Pagoda extends React.Component{
    constructor(){
        super();
        this.state ={
            data:[],
        }
                
    }
    componentWillMount(){
       this.getAllPagoda();
        

    }
    getAllPagoda = ()=>{
        api.get('pagoda_list').then(result=>this.setState({
            data : result.data.data
        }))
    }
   
    render(){
        console.log(this.state.file)
        return(
            <div className="body">
                <Heading name="monastery">စေတီတော်များ</Heading>
               
                       
                    <div className="monastery"> 
                        <Row>
                            {
                                this.state.data.map((item)=> {
                                    
                                    return <Col lg={8} md={8}>
                                    <PagodaCard  image={url + item.file_name} />
                                    <p className="pgh"> {item.pagoda_name} </p>
                                    <Button className="bun"><a href={`pagodaDetail/${item.id}`}>ဆက်လက်ဖတ်ရှုရန်</a></Button>
                                    </Col>

                                })
                            }
                        </Row>
                    </div>
            </div>
        )
    }
}
export default Pagoda;