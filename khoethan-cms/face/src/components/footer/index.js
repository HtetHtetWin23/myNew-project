import React from "react"
import './style.css'
import { Icon } from 'antd'
import {Link} from 'react-router-dom'


class Footer extends React.Component{
    render(){
        return(
        //  <div className="container2">
        //     <div className="container">
        //         <div  className="each-column">
        //            <h1 className="ll">အကြောင်းအရာများ</h1>
        //            <div className="left">
        //                <ul>
        //                <li><Link to="/">မူလစာမျက်နှာ</Link></li>
        //                <li><Link to="/health">ကျန်းမာရေး</Link></li>
        //                <li><Link to="/education">ပညာရေး</Link></li>
        //                <li><Link to="/economic">စီးပွားရေး</Link></li>
        //                </ul>
        //            </div>
        //            <div className="right">
        //                <ul>
        //                <li><Link to="/religious">ဘာသာရေး</Link></li>
        //                <li><Link to="/administration">အုပ်ချုပ်ရေး</Link></li>
        //                <li><Link to="/news">သတင်း</Link></li>
        //                <li><Link to="/contact">ဆက်သွယ်ရန်</Link></li>
        //                </ul>
        //            </div>
                   
        //         </div>
        //         <div  className="each-column">
        //            <h1 className="rr">သတင်းအချက်အလက်များ</h1>
        //            <div>
        //                <ul>
        //                    <li><Icon type="home" />&nbsp;&nbsp;<strong>ခိုးသန်းရွာ၊ မုံရွာခရိုင်၊ စစ်ကိုင်းတိုင်းဒေသကြီး။</strong></li>
        //                    <li><Icon type="mail" />&nbsp;&nbsp;<strong>KhoeThan123@gmail.com</strong></li>
        //                    <li><Icon type="global" />&nbsp;&nbsp;<strong>www.KhoeThanDigitalVillage.com</strong></li>
        //                    <li><Icon type="phone" />&nbsp;&nbsp;<strong>09-971332436</strong></li>
        //                </ul>
        //            </div>
                    
        //         </div>
                
        //    </div>
        //    <hr ></hr>
        //    <div className="container1">
        //        <h4 className="center">Copyright<Icon type="copyright" />2019 Khoe Than Village. All Right Reserved.</h4>
        //    </div>
        //  </div>
          
            /*zin footer start*/
                <section className="four-footer">
                    <div className="columns">
                        <ul className="each-column">
                        <h1 className="ll">အကြောင်းအရာများ</h1>
                            <li><Link to="/">မူလစာမျက်နှာ</Link></li>
                            <li><Link to="/health">ကျန်းမာရေး</Link></li>
                            <li><Link to="/education">ပညာရေး</Link></li>
                            <li><Link to="/economic">စီးပွားရေး</Link></li>
                            <li><Link to="/religious">ဘာသာရေး</Link></li>
                            <li><Link to="/administration">အုပ်ချုပ်ရေး</Link></li>
                            <li><Link to="/news">သတင်း</Link></li>
                        </ul>
                        <ul className="each-column">
                        <h1 className="ll">သတင်းအချက်အလက်များ</h1>
                              <li><Icon type="home" /><strong>ခိုးသန်းရွာ၊မုံရွာခရိုင်၊ စစ်ကိုင်းတိုင်းဒေသကြီး။</strong></li>
                              <li><Icon type="mail" />&nbsp;&nbsp;<strong>KhoeThan123@gmail.com</strong></li>
                              <li><Icon type="global" /><strong>www.KhoeThanDigitalVillage.com </strong></li>
                              <li><Icon type="phone" />&nbsp;&nbsp;<strong>09-971332436</strong></li>
                        </ul>
                    </div>
                </section>
            /*zin footer start*/

        )
        
    }
}

export default Footer;






