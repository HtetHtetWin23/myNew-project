import React from "react"
import api from "../../apis"
import {Link} from 'react-router-dom'
import {Button,Form} from 'antd'
import '../../App.css'
import {Row,Col,Card} from 'antd'
import PageHeaderWrapper from 'components/PageHeaderWrapper';

import './style.css'

const url = "http://localhost:9991"
class ClinicDetail extends React.Component{
    constructor(){
        super();
        this.state ={
            data : '',
            file : [],
            positionName : ''
          
        }
    }
    componentWillMount(){
        const id =this.props.match.params.id;
        this.getClinicDetail(id);
        this.getFileById(id);
        this.getAllPosition(id);
       
    }
    getAllPosition = (id) => {
		api.get(`clinic/${id}`).then(result => this.setState({
			positionName: result.data.data
		}))
	};
    getFileById = (id) => {
        api.get(`clinic_image/${id}`).then(res => this.setState({
            file :res.data.data
        }))
        console.log(this.state.file)
    }
    
    getClinicDetail(id){
        api.get(`clinicDetail/${id}`).then(res=>this.setState({data:res.data.data}))
    }

    render(){
        const data =this.state.data;
        console.log(data)
        return(
            <div>
                 <PageHeaderWrapper />
                <Row>
                <h3 className="header">ကျေးလက်ကျန်းမာရေးဌာနခွဲ၏ တာဝန်ရှိပုဂ္ဂိုလ်</h3>

                 <Col span={6}>  
                {
                    this.state.file.map((file) => {
                        return (
                            <div>
                                <img className="clinic-image" src={`${url}/${file.name}`} />
                                <br></br>
                            </div>
                        )
                    })
                }
                </Col>
                <Col span={18}>
                {/* <div className="clinic-detail">
                    
                    <p>အမည်      :{data.name}</p>
                    <p>ရာထူး     :{this.state.positionName.position_name}</p>
                    <p>ဖုန်းနံပါတ်       :{data.phone_no}</p>
                </div> */}
                 <table id="table">
                <tr>
                    <th>အမည်</th>
                    <th>ရာထူး</th>
                    <th>ဖုန်းနံပါတ်</th>
                    <th>ဖော်ပြချက်</th>
                    
                    
                </tr>
                <tr>
                    <td>{data.name}</td>
                    <td>{this.state.positionName.position_name}</td>
                    <td>{data.phone_no}</td>
                    <td>{data.description}</td>
                    
                </tr>
            </table>
                </Col>
                </Row><br></br>
                <Button className="btn"><Link to="/clinic">နောက်သို့</Link></Button>
            </div>

        )
    }
}
export default Form.create()(ClinicDetail)