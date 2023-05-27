import Root from '../layouts'


import Product from'../components/Product'
import Post from '../components/Post'
import Announcement from '../components/Announce'

import Home from '../pages/home'
import Health from '../pages/health'
import Education from '../pages/education'
import Economics from '../pages/economic'
import Religious from '../pages/religious'
import Administration from '../pages/administration'
import AnnounceList from '../pages/announceList'
import AnnounceDetail from '../pages/announceDetail'
import ProductDetail from '../pages/productDetail'
import ProductItemList from '../pages/productItemList'
import MonasteryDetail from '../pages/monasteryDetail'
import News from '../pages/news'
import PostDetail from '../pages/postDetail'
import Contact from '../pages/contact'
import Pagoda from '../pages/pagoda'
import PagodaDetail from '../pages/pagodaDetail'

export default [
    {
      component: Root,
      routes: [
        {
          path: "/",
          exact: true,
          component: Home
        },
        {
            path: "/health",
            exact: true,
            component: Health
        },
        {
            path: "/education",
            exact: true,
            component: Education
        },
        {
            path: "/economic",
            exact: true,
            component: Economics
        },
        {
            path: "/religious",
            exact: true,
            component: Religious
        },
        {
          path: "/pagoda",
          exact: true,
          component: Pagoda
      },
      {
        path: "/pagodaDetail/:id",
        exact: true,
        component: PagodaDetail
      },
        {
          path: "/administration",
          exact: true,
          component: Administration
        },
        {
          path: "/news",
          exact: true,
          component: News
        },
        {
          path: "/product",
          exact: true,
          component: Product
        },
        ,
        {
          path: "/productDetail/:id",
          exact: true,
          component: ProductDetail
        },
        {
          path: "/productItemList/:id",
          exact: true,
          component: ProductItemList
        },
        {
          path: "/productItemList/productDetail/:id",
          exact: true,
          component: ProductDetail
        },
        {
          path: "/productItemList/productItemList/:id",
          exact: true,
          component: ProductItemList
        },
        {
          path: "/productItemList/productDetail/productItemList/:id",
          exact: true,
          component: ProductItemList
        },
        {
          path: "/productDetail/productItemList/:id",
          exact: true,
          component: ProductItemList
        },
        
        
       
        { 
          path: "/Post",
          exact: true,
          component: Post
        },
        { 
          path: "/postDetail/:id",
          exact: true,
          component: PostDetail
        },
        {
        path: "/Announce",
        exact: true,
        component: Announcement
        },
        ,
        {
          path: "/announceList",
          exact: true,
          component: AnnounceList
        },
        
        {
          path: "/announceDetail/:id",
          exact: true,
          component: AnnounceDetail
        },
        
        {
          path: "/announceDetail/announceDetail/announceDetail/:id",
          exact: true,
          component: AnnounceDetail
        },
        ,
        
        {
          path: "/announceDetail/announceDetail/:id",
          exact: true,
          component: AnnounceDetail
        },
        {
          path: "/monasteryDetail/:id",
          exact: true,
          component: MonasteryDetail
        },
        {
          path: "/contact",
          exact: true,
          component: Contact
        },
      ]
    }
];
  