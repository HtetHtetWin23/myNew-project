import React from 'react'
import api from '../../apis'
import {Button,Form} from 'antd'
import {Link} from 'react-router-dom'
import { Card, Col, Row } from 'antd';
import '../../App.css'
import PageHeaderWrapper from 'components/PageHeaderWrapper';


const url = "http://localhost:9991"

class StudentListDetail extends React.Component{
    constructor(){
        super()
        this.state={
            data:[]
        }
    }
    
    componentWillMount(){
        const id =this.props.match.params.id;
        this.getAllStudentById(id)
    }
    getAllStudentById(id){
        api.get(`student/${id}`).then(res=>this.setState({data : res.data.data}))
    }

    render(){
        const data =this.state.data;
        console.log(data)
        return(
            <div>
				<PageHeaderWrapper/>
                <br></br>
                <table id="table">
                    <tr>
                        <th>အတန်း</th>
                        <th>အတန်းပိုင်အမည်</th>
                        <th>ကျောင်းသူ</th>
                        <th>ကျောင်းသား</th>
                        <th>စုစုပေါင်း</th>
                    </tr>
                    <tr>
                        <td>{data.grade}</td>
                        <td>{data.teacher_name}</td>
                        <td>{data.school_girl}</td>
                        <td>{data.school_boy}</td>
                        <td>{data.total_student}</td>
                    </tr>
                </table>
                <br></br>
                <Button className="back-button"><Link to="/studentList">နောက်သို့</Link></Button>
            </div>
        )
    }
}
export default Form.create()(StudentListDetail);