import React from 'react';
//component
import PageHeaderWrapper from '../../components/PageHeaderWrapper';
import {fetchEmp ,putEmp ,postEmp ,deleteEmp} from '../../actions/Emp';
import { connect } from "react-redux";
import { Table, Divider, Tag } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const action = {
    backgroundColor: '#0B2c13',
    color: '#fff',
    padding: '6px 8px',
    margin: '5px',
    borderRadius: '5px'
}
const columns = [
	{
	  title: 'Name',
	  dataIndex: 'name',
	  key: 'name',
	  render: text => <a href="javascript:;">{text}</a>,
	},
	{
	  title: 'Action',
	  key: 'action',
	  render: (text, record) => (
		<div>
      <span>
		    <Link style={action} to={`/emp/detail/${record.id}`}>Detail</Link>
		  </span>
    	<span>
		    <Link style={action} to={`/emp/edit/${record.id}`}>Edit</Link>
		  </span>
    </div>
	  ),
	},
];

class Emp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount(){   
    this.getAllEmps();
  }

  getAllEmps(){
    this.props.fetchEmp()
  }

  //update position
//   editPosition=(data,id)=>{
//    this.props.putPosition(data,id);
//   }

  // to create new position
//   createNewPosition=(data)=>{
//     data.created_by="admin";
//     data.updated_by='';
//     this.props.postPosition(data);
//   }

   // to delete position
//    deletePosition=(id)=>{
//     this.props.deletePosition(id);
//   }

  render() {
    let data=this.props.emps;
    return (
      <div>
          <PageHeaderWrapper />
          <button>
            <Link style={{display: 'block', height: '100%'}} to={'/emp/create'}>
              Create
            </Link>
          </button>
		      <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lang: state.locale.lang,
    isSignedIn: state.auth.isSignedIn,
    roleid: state.auth.roleid,
    isloaded: state.loading.isloaded,
    emps: state.emps.list,
  };
}

export default  connect(
  mapStateToProps,
  {fetchEmp ,putEmp ,postEmp ,deleteEmp}
)(Emp);
