import React from "react"
import './style.css'
import {Link} from "react-router-dom"
import image1 from './1.png'


class Navbar extends React.Component{

    render(){
       
        return(
                <header className="header">
                    <a href="/" className="logo"><img src={image1} className="aa"></img>ခိုးသန်းရွာ</a>                  
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
                    <ul className="menu">
                        <li><Link to="/" exact="true" >မူလစာမျက်နှာ</Link></li>
                        <li><Link to="/health" >ကျန်းမာရေး</Link></li>
                        <li><Link to="/education" >ပညာရေး</Link></li>
                        <li><Link to="/economic" >စီးပွားရေး</Link></li>
                        <li><Link to="/religious" >ဘာသာရေး</Link></li>
                        <li><Link to="/administration" >အုပ်ချုပ်ရေး</Link></li>
                        <li><Link to="/news" >သတင်း</Link></li>
                        <li><Link to="/contact" >ဆက်သွယ်ရန်</Link></li>
                    </ul>
                   
                </header>
                
        )
    }
}
export default Navbar;