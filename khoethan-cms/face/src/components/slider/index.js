import React from "react"
import './style.css'
import { Carousel } from 'antd';
import image1 from './1.jpg'
import image2 from './2.jpeg'
import image3 from './3.jpeg'
import image4 from './6.jpeg'
import image5 from './7.jpeg'
import image6 from './daghina1.jpeg'
class Slider extends React.Component {
    render() {
         
        return (           
                <Carousel afterChange={this.onChange} className="slider">
                    <div>
                        <img src={image1}></img>
                    </div>
                    <div>
                    <img src={image2}></img>
                    </div>
                    <div>
                    <img src={image3}></img>
                    </div>
                    <div>
                    <img src={image4}></img>
                    </div>
                    <div>
                    <img src={image5}></img>
                    </div>
                    <div>
                    <img src={image6}></img>
                    </div>
                </Carousel>
            )

    }
}
export default Slider