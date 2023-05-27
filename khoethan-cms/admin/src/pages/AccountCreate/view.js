import React from 'react';
import api from '../../apis'
import PageHeaderWrapper from '../../components/PageHeaderWrapper';
import {Link } from 'react-router-dom'
import {Button} from 'antd'

class AccountDetail extends React.Component {
    constructor() {
        super();
        this.state={
            data : []
        }
    }

    componentWillMount(){
        const id = this.props.match.params.id;
        this.getUsersById(id)
    }

    getUsersById = (id) => {
        api.get(`users/${id}`).then((res) => this.setState({data : res.data.data}))
    }

    render() {
        const data = this.state.data
        return (
        <div>
            {/* <PageHeaderWrapper />
            <h3>AccountDetail</h3>
            <h4>{data.user_name}</h4>
            <p>{data.email}</p>
            <p>{data.phone_no}</p>
            <p>{data.nric}</p> */}
             <PageHeaderWrapper />
             <table id="table">
                <tr>
                    <th>အမည်</th>
                    <th>အီးမေးလ်</th>
                    <th>ဖုန်းနံပါတ်</th>
                    <th>မှတ်ပုံတင်အမှတ်</th>
                    
                </tr>
               
                            
                    <tr>
                    <td>{data.user_name}</td>
                    <td>{data.email}</td>
                    <td>{data.phone_no}</td>
                    <td>{data.nric}</td>
                    
                    </tr>
                       
                </table><br></br>
                <Button className="back-btn"><Link to="/accountcreate">နောက်သို့</Link></Button>

        </div>
        );
    }
}

export default AccountDetail;