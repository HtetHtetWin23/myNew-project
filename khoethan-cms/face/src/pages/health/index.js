import React from 'react';
import Heading from '../../components/heading'
import {Row,Col,Table} from 'antd'
import './style.css'
import api from '../../apis'
import ClinicCard from './card'
import image1 from './1.jpeg'
import image2 from './2.jpeg'
import image3 from './3.jpeg'

const url = "http://localhost:9991/"

    

class Health extends React.Component {


    constructor(){
        super();
        this.state={
            data : [],
            memberData : []
           
        }
    }
    componentWillMount(){
        this.getAllClinic();
        this.getAllSocietyMember();
    }
    getAllClinic(){
        api.get('clinic').then(result=>this.setState({
            data : result.data.data
        }))
    }
    getAllSocietyMember(){
        api.get('society_member').then(result=>this.setState({
            memberData : result.data.data
        }))
    }
    render() {      
        return (
            <div className="body">
             <Heading name="health">ကျန်းမာရေး</Heading>

             <div>
                <Row>
                    <Col className="clinic-card" md={10} lg={10}>
                        <h3 className="head">ခိုးသန်းကျေးရွာကျေးလက်ကျန်းမာရေးဌာနခွဲ</h3>
                        <img src={image3}></img>
                    </Col>
                    <Col md={14} lg={14}>
                        <h3 className="head">ခိုးသန်းကျေးရွာကျေးလက်ကျန်းမာရေးဌာနခွဲ၏တာ၀န်ရှိပုဂ္ဂိုလ်</h3>
                            <table id="table">
                            
                                <tr>
                                    <th>အမည်</th>
                                    <th>ရာထူး</th>
                                    <th className="wd">တာ၀န်</th>
                                    <th>ဆက်သွယ်ရန်</th>
                                </tr>
                                    {
                                        this.state.data.map((item)=>{
                                            return(
                                                <tr>
                                                <td>{item.name}</td>
                                                <td>{item.position_name}</td>
                                                <td className="wd">{item.description}</td>
                                                <td>{item.phone_no}</td>
                                                </tr>
                                              )
                                           })
                                    }

                            </table><br></br><br></br>
                            <h4 className="title">ဆေးခန်းဖွင့်ချိန်</h4><br></br> 
                            
                                <p  className="txt">တနင်္လာ၊ ဗုဒ္ဓဟူး ၊ သောကြာ&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;နံနက် ၉ နာရီ မှ ၁၂ နာရီ ၊
                                    ညနေ ၂ နာရီ မှ ၄ နာရီ
                                </p>
                           
                    </Col>
                </Row> 
            </div><br></br>
            <div>
                <Row>
                    <p className="tx">ကျေးရွာရှိသက်ကြီးရွယ်အို၊ကလေးသူငယ်များနှင့်နာမကျန်းဖြစ်သူများကိုကျန်းမာရေးစောင့်ရှောက်မှုပေးရန်ကျန်းမာရေးဦးစီးဌာနမှအခွဲထားရှိထားသောဌာနတစ်ခုဖြစ်သည်။လက်ရှိတွင်ကျန်းမာရေးစောင့်ရှောက်မှုပေးရန်သားဖွားသူနာပြုတစ်ဦးထားရှိထားပါသည်။ကလေးငယ်များကိုကာကွယ်ဆေးထိုးခြင်း၊ရာသီအကူးအပြောင်းတွင်ဖြစ်လေ့ရှ်ိသောတုပ်ကွေးရောဂါများ၊ကိုယ်ဝန်ဆောင်များအားသန္ဓေသားမွေးဖွားပေးခြင်းများကိုကုသဆောင်ရွက်ပေးလျက်ရှိသည်။အရေးပေါ်လူနာများအားမုံရွာ၊မန္တလေးမြို့များသို့သွားရောက်ကုသရန်ကလျာဏမိတ္တအသင်းရှိလူနာတင်ကားဖြင့်ချိတ်ဆက်ပေးလျက်ရှိသည်။ခိုးသန်းရွာတွင်းသာမကဘေးပတ်ဝန်းကျင်ရှိရွာများ၏ကျန်းမာရေးစောင့်ရှောက်မှုများကိုလည်းအခါအားလျော်စွာပါဝင်ဆောင်ရွက်ပေးသည်။</p>
                </Row>
            </div>
            <div>
                <Row>
                    <Col className="clinic-card" md={10} lg={10}>
                        <h3 className="head">ကလျာဏမိတ္တလူမှုကူညီရေးအသင်း</h3>
                            <img alt="" src={image1}></img>
                    </Col>
                    <Col md={14} lg={14}>
                    <h3 className="head">ကလျာဏမိတ္တလူမှုကူညီရေးအသင်း၏တာ၀န်ရှိပုဂ္ဂိုလ်</h3>
                    <table id="table">
                        <tr>
                            <th>အမည်</th>
                            <th>ရာထူး</th>
                            <th className="wd">တာ၀န်</th>
                           <th>ဆက်သွယ်ရန်</th>
                        </tr>
                        {
                            this.state.memberData.map((item)=>{
                                return(
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.position_name}</td>
                                        <td>{item.description}</td>
                                        <td>{item.phone_no}</td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                    </Col>
                </Row>
            </div><br></br>
            <div>
                <Row>
                    <Col className="clinic-card" lg={10} md={10}>
                       
                            <img alt="" src={image2}></img>
                    </Col>
                    <Col className="pad" lg={14} md={14}>
        
                        ကလျာဏမိတ္တလူမှုကူညီရေးအသင်းသည်ကျေးရွာရှိရွာသူ/သားများ၏လူမှုရေးနှင့်ကျန်းမာရေးစသည့်အထွေထွေဆိုင်ရာကိစ္စများဆောင်ရွက်ရန်ရွာရှိလူငယ်များစုပေါင်းဖွဲ့စည်းထားသောအဖွဲ့အစည်းတစ်ခုဖြစ်သည်။ကလျာဏမိတ္တလူမှုကူညီရေးအသင်း၏ရည်ရွယ်ချက်မှာ"ရပ်ရွာရှိသက်ကြီးရွယ်အိုများနှင့်ကလေးသူငယ်များပါမကျန်အရွယ်သုံးပါးမရွေးကျန်းမာရေး၊လူမှုရေးကူညီစောင့်ရှောက်မှုပေးရန်"ဖြစ်သည်။ရွာရှိအုပ်ချုပ်ရေးမှူးဦးမြင့်အောင်နှင့်အသင်း၏ဥက္ကဌဦးဇော်လတ်တို့မှဦးဆောင်၍အသင်းသားလူငယ်(၁၅)ဦးခန့်ဖြင့်စတင်တည်ထောင်ခဲ့သည်။လူမှုရေးကားမောင်းနှင်သည့်အခါတွင်လည်းယုံကြည်စိတ်ချရသောအန္တရာယ်ကင်းစွာမောင်းနှင်နိုင်သောယာဥ်မောင်းသာမောင်းနှင်ရမည်ဟူ၍အသင်းမှစည်းကမ်းထုတ်ပြန်ထားပါသည်။လက်ရှိတွင်လူမှုကူညီရေးကားတစ်စီးဖြင့်ရွာရှိလူမှုရေး၊ကျန်းမာရေးလုပ်ငန်းများကိုဆောင်ရွက်ခဲ့ရာယခုအချိန်ထိလူနာ(၂၀၀)ခန့်အားမုံရွာ၊မန္တလေးဆေးရုံများသို့ပို့ဆောင်ပေးခဲ့ပါသည်။ကျေးရွာအတွင်းသာမကဘေးပတ်ဝန်းကျင်ရှိကျေးရွာများမှသာရေး၊နာရေးကိစ္စများကို(၂၄)နာရီအကူအညီပေးလျှက်ရှိသည်။ကလျာဏမိတ္တလူမှုကူညီရေးအသင်းသို့အကူအညီတောင်းခံလိုပါကဖုန်းနံပါတ်-၀၉၂၅၉၀၇၀၂၅၄သို့အချိန်မရွေးဆက်သွယ်နိုင်ပါသည်။
                    </Col>
                </Row>
            </div><br></br>
        </div>
        )
    }
}

export default Health