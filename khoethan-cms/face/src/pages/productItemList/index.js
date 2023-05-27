import React from 'react'
import ProductCard from './card'
import {Col,Row,Button} from 'antd'
import Heading from '../../components/heading'
import './style.css'
import {Icon,Menu,Layout} from 'antd'
import api from '../../apis'

const { Sider, Content } = Layout;
const { SubMenu } = Menu;
const url = "http://localhost:9991/"

class ProductItemList extends React.Component{
    constructor(){
        super();
        this.state ={
            data:[],
            productType : '',
            productTypeSelect: []
        }
                
    }
    componentWillMount(){
        let id=this.props.match.params.id;
        this.getProductItemList(id);
        this.getAllProductType(id);
        this.getAllProductTypeSelect();
        

    }
    getProductItemList(id){
        api.get(`productItem_list/${id}`).then(result=>this.setState({
            data :result.data.data
        }))
    }
    getAllProductType(id){
        api.get(`product_type/${id}`).then(result => this.setState({
            productType : result.data.data
        }))
    }
    getAllProductTypeSelect(){
        api.get('product_type').then(result => this.setState({
            productTypeSelect: result.data.data
        }))
    }
   
    render(){
        console.log(this.state.file)
        return(
            <div className="body">
                <Heading name="product">{this.state.productType.product_type_name}</Heading>
                
                        <Row>

                       <Col md={4} lg={4}>
                        <Menu 
                            mode="inline"
                            defaultSelectedKeys={['1','2','3','4']}
                            defaultOpenKeys={['sub1']}
                            // style ={{height : '5%' }}
                            style={{ padding : '0 50px',background : '#B4C7D6',height:'5%' }}
                            
                        >
                            <SubMenu 
                               key="sub1" className="submenu"
                                title={
                                        <span>
                                            ကုန်ပစ္စည်းအုပ်စု
                                        </span>
                                    }
                                                               
                            >
                                {
                                    this.state.productTypeSelect.map((item)=>{
                                        return(
                                            
                                                <div className="menu_item">
                                                    <Menu.Item  className="menu_item" key={item.id}><a  href={`/productItemList/productItemList/${item.id}`}>{item.product_type_name}</a></Menu.Item>
                                                </div>
                                          
                                        )
                                    })
                                }

                            </SubMenu>
                                
                            </Menu>
                            </Col>
                        {/* </Sider> */}
                
                        {/* <Content style={{ padding : '0 24px',minHeight : '280'}}> */}
                        <Col md={20} lg={20} >
                            <div>
                                <div className="product"> 
                                    
                                    <Row>
                                        {
                                            this.state.data.map((item)=> {
                                                let img = item.file_name ? url + item.file_name : "https://static1.squarespace.com/static/5390e38de4b040333af1eb61/587ab3f0cd0f68a2e5cc3470/587ab3f0d2b857926893d491/1484437352538/1-jasmine.jpg";
                                                return <Col lg={8} md={8}>
                                                <ProductCard id={item.id} product_name={item.product_name} 
                                                image={img} />
                                                </Col>

                                            })
                                        }
                                    </Row>
                                    
                                </div>
                            </div>
                            </Col>
                            </Row>
            </div>
        )
    }
}
export default ProductItemList;