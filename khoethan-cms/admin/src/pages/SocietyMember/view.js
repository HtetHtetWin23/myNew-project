import React from 'react'
import api from '../../apis'
import {Button,Form} from 'antd'
import {Link} from 'react-router-dom'
import { Card, Col, Row } from 'antd';
import '../../App.css'
import './style.css'
import PageHeaderWrapper from 'components/PageHeaderWrapper';


const url = "http://localhost:9991"

class SocietyMemberDetail extends React.Component{
    constructor(){
        super()
        this.state={
            data:[],
            positionName : ''
        }
    }
    
    componentWillMount(){
        const id =this.props.match.params.id;
        this.getAllSocietyMemberById(id);
        // this.getAllPosition(id);
    }
    // getAllPosition = (id) => {
	// 	api.get(`society_member/${id}`).then(result => this.setState({
	// 		positionName: result.data.data
	// 	}))
	// };
    getAllSocietyMemberById(id){
        api.get(`society_member/${id}`).then(res=>this.setState({data : res.data.data}))
    }

    render(){
        const data =this.state.data;
        console.log(data)
        return(
            <div>
				<PageHeaderWrapper/>

               
                {/* <Row>
                <h3 className="header">ကလျာဏမိတ္တလူမှုကူညီရေးအသင်း၏{data.position}</h3>
                    <Col className="member-detail" span={12}>
                        
                        <p>အမည်     :   {data.name}</p>
                        <p>ရာထူး      : {data.position_name}</p>
                        <p>ဖုန်းနံပါတ်     :    {data.phone_no}</p>
                        <p>ဖော်ပြချက်     :     {data.description}</p>

                    </Col>
                </Row> */}
                <h3 className="header">ကလျာဏမိတ္တလူမှုကူညီရေးအသင်း၏{data.position}</h3>
                 <table id="table">
                <tr>
                    <th>အမည်</th>
                    <th>ရာထူး</th>
                    <th>ဖုန်းနံပါတ်</th>
                    <th>ဖော်ပြချက်</th>
                    
                    
                </tr>
                <tr>
                    <td>{data.name}</td>
                    <td>{data.position_name}</td>
                    <td>{data.phone_no}</td>
                    <td>{data.description}</td>
                    
                </tr>
            </table><br></br>

                <Button className="back-btn"><Link to="/societyMember">နောက်သို့</Link></Button>
            </div>
        )
    }
}
export default Form.create()(SocietyMemberDetail);