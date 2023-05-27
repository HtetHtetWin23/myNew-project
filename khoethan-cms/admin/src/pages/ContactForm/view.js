import React from 'react';
import api from '../../apis'
import {Row,Col,Button} from 'antd'
import {Link} from 'react-router-dom'
import PageHeaderWrapper from 'components/PageHeaderWrapper';
import './style.css'


// const url = "http://localhost:9991"
class ContactDetail extends React.Component {
    constructor() {
        super();
        this.state={
            data : []
        }
    }

    componentWillMount(){
        const id = this.props.match.params.id;
        this.getContactById(id)
    }

    getContactById = (id) => {
        api.get(`contact/${id}`).then((res) => this.setState({data : res.data.data}))
    }

    render() {
        console.log(this.state.data)
        const data = this.state.data
        return (
        <div>
                <PageHeaderWrapper />

            {/* <Row>
               
                    <Col className="member-detail" span={12}>
                        
                        <p>အမည်     :   {data.name}</p>
                        <p>အီးမေးလ်      : {data.email}</p>
                        <p>ဖုန်းနံပါတ်     :    {data.phone_no}</p>
                        <p>စာကိုယ်    :     {data.description}</p>
                        <p>အကြောင်းအရာ      :{data.subject}</p>

                    </Col>
                </Row><br></br> */}
                <table id="table">
                    <tr>
                        <th>အမည်</th>
                        <th>အီးမေးလ်</th>
                        <th>ဖုန်းနံပါတ်</th>
                        <th>စာကိုယ်</th>
                    </tr>
                    <tr>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.phone_no}</td>
                        <td>{data.description}</td>
                       
                    </tr>
                </table><br></br>
                <h4 className="cnt-desc">အကြောင်းအရာ</h4>
                <p className="prg" >{data.subject}</p>
                <Button className="btn"><Link to="/contact">နောက်သို့</Link></Button>
                
           
            
        </div>

        );
    }
}

export default ContactDetail;