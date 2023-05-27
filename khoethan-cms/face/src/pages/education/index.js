import React from 'react';
import Heading from '../../components/heading'
import SchoolCard from './card'
import '../style.css'
import api from '../../apis';
import {Row,Col,Table} from 'antd'
import image1 from './1.jpeg'
import image2 from './2.jpg'
import image3 from './3.jpg'
import image4 from './4.jpg'
import image5 from './5.jpeg'
import '../../App.css'


const url = "http://localhost:9991/"
class Education extends React.Component {
    constructor(){
        super();
        this.state={
            data: [],
            studentData : []
        }
    }
    componentWillMount(){
        this.getAllSchool();
        this.getAllStudent();
    }
    getAllSchool = ()=>{
        api.get('school_list').then(result=>this.setState({
            data : result.data.data
        }))
    }
    getAllStudent =()=>{
        api.get('student').then(result=>this.setState({
            studentData : result.data.data
        }))
    }
    render() {
        return (
        <div className="body">
            <Heading name="school">ပညာရေး</Heading>
            <div >
                <img src={image1} className="school-img"></img>
            </div><br></br>
            <Heading>ခိုးသန်းကျေးရွာအခြေခံပညာမူလတန်းလွန်ကျောင်း</Heading>
            <div>
                <Row className="edu-description">
                    <Col lg={23} md={23} >
                အခြေခံပညာမူလတန်းလွန်ကျောင်းတွင်မိဘဆရာအသင်းနှင့်ကျောင်းဖွံ့ဖြိုးတိုးတက်ရေးကော်မတီဟူ၍ထားရှိပါသည်။ကျောင်းဖွံ့ဖြိုးတိုးတက်ရေးကော်မတီအဖွဲ့သည်ကျောင်းဘက်စုံဖွံ့ဖြိုးတိုးတက်ရန်ဆရာ/မများနှင့်ရပ်မိရပ်ဖများ ဖွဲ့စည်းထားသောအဖွဲ့တစ်ဖွဲ့ဖြစ်သည်။ဥက္ကဌမှာဦးဇော်နိုင်ဦး(မူလွန်အုပ်)ဖြစ်၍အတွင်းရေးမှူးမှာဒေါ်ဇင်မာနွယ်ဖြစ်သည်။အဖွဲ့ဝင်များမှာရပ်မိရပ်ဖများနှင့်ဆရာ/မများဖြစ်ကြသည့်ဦးမြင့်အောင်၊ဦးညွန့်ဆွေ၊ဦးအုံးကျော်၊ဦးနိုင်မျိုးဇင်၊ဦးမိုးကျော်ထွန်း၊ဒေါ်မြမြခိုင်နှင့်ဒေါ်မြင့်မိုးတို့ဖြစ်ကြသည်။မိဘဆရာအသင်းသည်ကျောင်းသူ/သားများ၏ပညာရေးဆိုင်ရာအခြေအနေများဆွေးနွေးတိုင်ပင်ရန်ဖွဲ့စည်းထားသောအဖွဲ့ဖြစ်သည်။ဥက္ကဌမှာဦးဇော်နိုင်ဦး(မူလွန်အုပ်)ဖြစ်၍အတွင်းရေးမှူးမှာဒေါ်ဇင်မာနွယ်ဖြစ်သည်။အဖွဲ့ဝင်များမှာ ဦးညွန့်ဆွေ၊ ဦးမြင့်ဝေ၊ ဦးဝင်းကျော်လတ်၊ ဦးမိုးကျော်ထွန်း၊ ဦးနိုင်မျိုးဇင်၊ ဒေါ်မြမြခိုင်နှင့် ဒေါ်မြင့်မိုးတို့ဖြစ်ကြသည်။
                </Col>
                </Row>
            </div>
            <div className="school">
                <Row gutter={24}>
                    {
                        this.state.data.map((item=>{
                            let img = item.file_name ? url + item.file_name : "https://static1.squarespace.com/static/5390e38de4b040333af1eb61/587ab3f0cd0f68a2e5cc3470/587ab3f0d2b857926893d491/1484437352538/1-jasmine.jpg";
                            return <Col lg={8} md={8} className="school-card">
                                        <h3 className="topic">{item.name}</h3>
                                        {/* <SchoolCard id={item.id} image={img} /> */}
                                        <img src={img}/>
                                </Col>
                        }))
                    }
                </Row>          
           
            </div>
            <div>
                <h3 className="head">၂၀၁၉-၂၀၂၀ ပညာသင်နှစ် ကျောင်းသား၊ကျောင်းသူစာရင်း</h3>
                <div className="sectionContent" style={{overflow_x:'auto'}}>
                <table className="table-row" align="center" width="100%">
                <tr> 
                    <th className="table-content">အတန်း</th>
                    <th className="table-content">အတန်းပိုင်ဆရာ</th>
                    <th className="table-content">ကျောင်းသား</th>
                    <th className="table-content">ကျောင်းသူ</th>
                    <th className="table-content">စုစုပေါင်း</th>
                </tr>
                {
                    this.state.studentData.map((item)=>{
                        return (
                            
                            <tr >
                            <td className="table-content" >{item.grade}</td>
                            <td className="table-content" >{item.teacher_name}</td>
                            <td className="table-content" >{item.school_girl}</td>
                            <td className="table-content" >{item.school_boy}</td>
                            <td className="table-content" >{item.total_student}</td>
                            </tr>
                            
                        )
                    })
                }
                </table>
                </div>

            </div>
            <div >
                <h3 className="head">ခိုးသန်းကျေးရွာအခြေခံပညာမူလတန်းလွန်ကျောင်း၏ပညာရေးစုံညီပွဲတော်လှုပ်ရှားမှုပုံရိပ်များ</h3><br></br>
               
                <div >
                   <Row className="school-card">
                        <Col lg={8} md={8}>
                            <img src={image2}></img>
                        </Col>
                        <Col lg={8} md={8}>
                            <img src={image3}></img>
                        </Col>
                        <Col lg={8} md={8}>
                            <img src={image4}></img>
                        </Col>                           
                    </Row><br></br>
                  
                </div>
            </div> 
           
            <div className="school1">
                <h3  className="head" >ခေတ်ဦးရောင်ခြည်စာကြည့်တိုက်</h3><br></br>
                <Row className="edu-card" >                       
                    <Col  lg={10} md={10}>
                        <img src={image5}></img>
                    </Col>
                    <Col className="pag" lg={12} md={12}>
                    ကျေးရွာရှိရပ်မိရပ်ဖများနှင့်ရွာသူ/သားများတက်ညီလက်ညီတည်ဆောက်ထားသောတစ်ခုတည်းသောစာကြည့်တိုက်ဖြစ်သည်။ရွာလယ်လမ်းမတွင်တည်ရှိ၍ရွာ၏အချက်အချာကျသောကျေးလက်ဆေးပေးခန်း၊ ကလျာဏမိတ္တလူမှု့ကူညီရေးအသင်းများအနီးတွင်တည်ရှိသည်။စာကြည့်တိုက်တွင်မဂ္ဂဇင်း၊ဂျာနယ်၊ကျန်းမာရေးအသိပေးစာစောင်များ၊ဝတ္တု၊ကာတွန်းစာအုပ်များနှင့်ရုပ်ပြပန်းချီကားများထားရှိပါသည်။ရွာရှိကလေးသူငယ်များနှင့်စာပေလိုက်စားသောကျေးရွာသူ/သားများအားလပ်ချိန်တွင်လာရောက်ကြသောစာပေရိပ်မြုံလေးတစ်ခုဖြစ်သည်။စာကြည့်တိုက်ဖွင့်ရက်မှာနေ့စဥ်နံနက်(၉)နာရီမှညနေ(၄)နာရီအထိဖြစ်ပါသည်။ကျေးရွာမှခန့်အပ်ထားသောစာကြည့်တိုက်မှူးတစ်ယောက်ရှိပြီးစာကြည့်တိုက်ရှိလိုအပ်သည့်ကိစ္စအဝဝကိုစာကြည့်တိုက်မှူးမှလုပ်ဆောင်ရသည်။စာကြည့်တိုက်တွင်စာအုပ်များကိုငှားရမ်း၍ဖြစ်စေ၊စာကြည့်တိုက်အတွင်း၌ဖြစ်စေဖတ်ရှုနိုင်သည်။စာအုပ်များငှားရမ်းသည့်အတွက်အခကျေးငွေပေးချေစရာမလိုသော်လည်းအဖွဲ့ဝင်ကဒ်ရှိမှသာလျှင်ငှားရမ်းနိုင်သည်။စာကြည့်တိုက်အတွင်းစည်းကမ်းချက်များမှာ-"စကားပြောလျှင်တီးတိုးပြောဆိုရန်၊စာအုပ်များကိုမစုတ်မပြဲဘဲရိုသေစွာကိုင်တွယ်ရန်၊စာအုပ်များကိုငှါးရမ်းပြီးပါကနှစ်ရက်အတွင်းပြန်လည်အပ်နှံရန်"တို့ဖြစ်သည်။
                    </Col>                    
                </Row><br></br>
            </div>
        </div>
        );
    }
}

export default Education