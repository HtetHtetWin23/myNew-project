import React from 'react';
import Heading from '../heading'
import './style.css'
import { Card,Col,Row } from 'antd';
import 'antd/dist/antd.css'

class About extends React.Component {
    render() {
        return (
            
            <div className="about-body">
            <div className="letter">
            <Heading name="about">ခိုးသန်းရွာအကြောင်း</Heading>
             <Card className="p">
                <p className="pp">
                    ခိုးသန်းရွာသည်စစ်ကိုင်းတိုင်းဒေသကြီး၊မုံရွာခရိုင်၊မုံရွာမြို့၏အရှေ့မြောက်ဘက်၇မိုင်ခန့်အကွာတွင်တည်ရှိပါသည်။ခိုးသန်းရွာသည်ရွာပေါင်းငါးရွာနှင့်နယ်နမိတ်ချင်းထိစပ်လျှက်ရှိသည်။ထိုရွာများမှာကျောက်စစ်ပုံ၊တောင်ပုလူ၊ကံအိုး၊ကံပြားကြီးနှင့်ကော်လဗြတို့ဖြစ်ကြပါသည်။ခိုးသန်းရွာတွင်အိမ်ခြေ၃၁၉အိမ်၊အိမ်ထောင်စု၃၆၂စုနှင့်လူဦးရေ၁၂၀၄ဦးခန့်ရှိပါသည်။အမျိုးသားအရေအတွက်၅၂၅ယောက်ရှိပြီးအမျိုးသမီးအရေအတွက်မှာ၆၇၉ယောက်ရှိပါသည်။ခိုးသန်းရွာ၏ရွာမြေဧရိယာစုစုပေါင်းမှာ၃၈ဧကဖြစ်ပါသည်။ခိုးသန်းရွာ၏လယ်မြေဧရိယာစုစုပေါင်းမှာ၁၉၆၈ဧကဖြစ်ပါသည်။ခိုးသန်းရွာတွင်ကျေးလက်ကျန်းမာရေးဌာနခွဲတစ်ခုရှိပါသည်။ခိုးသန်းရွာတွင်မူလတန်းလွန်ကျောင်းတစ်ကျောင်းရှိပါသည်။ခိုးသန်းရွာသည်စိုက်ပျိုးရေးကိုအဓိကထားသောရွာဖြစ်ပြီးရွာသားများသည်ကြက်သွန်နီ၊ပဲအမျိုးမျိုး၊နှမ်း၊ကွမ်းရွက်ပင်တို့စိုက်ပျိုးကြသည်။ခိုးသန်းရွာသားများသည် မွေးမြူရေးတွင်လည်း နွား ၊သိုး ၊ကြက်၊ငုံးတို့ကိုလည်းမွေးမြူကြသေးသည်။ခိုးသန်းရွာ၏အုပ်ချုပ်ရေးပိုင်းတွင် အုပ်ချုပ်ရေးမှုး၁ဦး၊ရာအိမ်မှုး၂ဦး၊ရပ်မိရပ်ဖ၄ဦးတို့ကတာ၀န်ယူအုပ်ချုပ်လျက် ရှိသည်။ခိုးသန်းရွာတွင်ဘုန်းကြီးကျောင်းစုစုပေါင်း၅ကျောင်းရှိပြီး၊၎င်းဘုန်းကြီး ကျောင်းများတွင်ရှေးဟောင်းဘုရားစေတီပုထိုးများစွာကိုလည်း ဖူးမြော်နိုင်ပါသည်။
                </p>
            </Card>
            </div>
            <div className="village-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3216.7521916669625!2d95.1609567500442!3d22.21340585158615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30caa3c8334bdb25%3A0xcad22b4b96b18f67!2z4YCB4YCt4YCv4YCD4YC64YC44YCe4YCU4YC64YC4!5e1!3m2!1smy!2smm!4v1565258124113!5m2!1smy!2smm"  title="map" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
        
        );
    }
}

export default About