import React from 'react';

import Slider from '../../components/slider'
import About from '../../components/about'
import Products from '../../components/Product'
import Festival from '../../components/Festival';
import Post from '../../components/Post';
import Announcement from '../../components/Announce';
import './style.css'

class Home extends React.Component {
    render() {
        return (
        <div>
            <Slider />
            <About />
            <Festival />
            <Products/>
            <Post />
            <Announcement/>
            
            
        </div>
        );
    }
}

export default Home