import React from 'react'
import ProductCard from './card'
import {Col,Row,Button} from 'antd'
import Heading from '../../components/heading'
import './style.css'
import {Icon,Menu,Layout} from 'antd'
import api from '../../apis'
import '../../App.css'

const { Sider, Content } = Layout;
const { SubMenu } = Menu;
const url = "http://localhost:9991/"

class Product extends React.Component{
    constructor(){
        super();
        this.state ={
            data:[],
            productType : [],
            currentPage: 1,
            todosPerPage: 9
        };
        this.handleClick = this.handleClick.bind(this);
                
    }
    handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
    }
    componentWillMount(){
        this.getAllProduct();
        this.getAllProductType();
        

    }
    getAllProduct(){
        api.get('product_list').then(result=>this.setState({
            data :result.data.data
        }))
    }
    getAllProductType(){
        api.get('product_type').then(result => this.setState({
            productType : result.data.data
        }))
    }
   
    render(){
        const { data, currentPage, todosPerPage } = this.state;

        // Logic for displaying current todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = data.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderTodos = currentTodos.map((todo, index) => {
          return(
            <div className="product"> 
                
                <Col md={8} lg={8}>
                <ProductCard id={todo.id} product_name={todo.product_name} 
                image={url+todo.file_name} />
                <br></br></Col>
               
        
        </div>
          )
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(data.length / todosPerPage); i++) {
          pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
          return (
            <div className="border">
                <li
              key={number}
              id={number}
              onClick={this.handleClick}
            >
              {number}
            </li>
            </div>
          );
        });
        console.log(this.state.file)
        return(
            <div className="body">
                <Heading name="product">ကျေးရွာမှထွက်ရှိသောကုန်ပစ္စည်းများ</Heading>
                <Row >
                    <Col lg={4} md={4}>
                        <Menu 
                            mode="inline"
                            defaultSelectedKeys={['1','2','3','4']}
                            defaultOpenKeys={['sub1']}
                            style={{ padding : '0 50px',background : '#B4C7D6',height:'5%' }}
                            
                            
                        >
                            <SubMenu
                               className="submenu"
                               
                               key="sub1"
                                title={
                                        <span >
                                            ကုန်ပစ္စည်းအုပ်စု
                                        </span>
                                    }
                                                               
                            >
                                {
                                    this.state.productType.map((item)=>{
                                        return(
                                            <div className="menu_item">
                                            <Menu.Item   key={item.id}><a href={`productItemList/${item.id}`}>{item.product_type_name}</a>
                                            </Menu.Item>
                                            </div>
                                        )
                                    })
                                }

                            </SubMenu> 
                            </Menu>
                            </Col>
                       
                {/* <Layout className="body">
                    <Content style={{ padding : '0 50px',background : '#B4C7D6' }}>
                    <Layout style={{ padding : '24px 0',background : '#B4C7D6'}} >
                        <Sider width= { 200}  style={{background : '#B4C7D6'}} >
                        <Menu 
                            mode="inline"
                            defaultSelectedKeys={['1','2','3','4']}
                            defaultOpenKeys={['sub1']}
                            style={{height:'5%'}}
                            
                            
                        >
                            <SubMenu
                               className="submenu"
                               key="sub1"
                                title={
                                        <span >
                                            ကုန်ပစ္စည်းအုပ်စု
                                        </span>
                                    }
                                                               
                            >
                                {
                                    this.state.productType.map((item)=>{
                                        return(
                                            <div className="menu_item">
                                            <Menu.Item   key={item.id}><a href={`productItemList/${item.id}`}>{item.product_type_name}</a>
                                            </Menu.Item>
                                            </div>
                                        )
                                    })
                                }

                            </SubMenu> 
                            </Menu>
                        </Sider>
                        <Content style={{ padding : '0 24px',minHeight : '280'}}>
                        
                            <ul>
                            {renderTodos}
                            </ul>
                        </Content>
                    </Layout> */}
                     <Col lg={20} md={20}>
                    {/* <Content style={{ padding : '0 24px',minHeight : '280'}}> */}
                        
                       
                        <ul>
                        {renderTodos}
                        </ul>
                    {/* </Content> */}
                    </Col>

                    </Row>
                    <div className="page-pad">
                    <ul id="page-numbers">
                        {renderPageNumbers}
                    </ul>
                    </div>
                    {/* </Content> */}
                {/* </Layout> */}
                
            </div>
        )
    }
}
export default Product;