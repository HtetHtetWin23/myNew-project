import requiredAllAuth from '../components/hocs/AllAuth'
import Layout from '../layout'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Notfound from '../pages/Notfound'

import Position from '../pages/Position'
import PositionCreate from '../pages/Position/create'
import PositionDetail from '../pages/Position/view'
import PositionEdit from '../pages/Position/update'

import Product from '../pages/Product'
import ProductCreate from '../pages/Product/create'
import ProductDetail from '../pages/Product/view'
import ProductEdit from '../pages/Product/update'

import Monestry from '../pages/Monestry'
import MonestryCreate from '../pages/Monestry/create'
import MonestryDetail from '../pages/Monestry/view'
import MonestryEdit from '../pages/Monestry/update'

import Committee from '../pages/Committee'
import CommitteeCreate from '../pages/Committee/create'
import CommitteeDetail from '../pages/Committee/view'
import CommitteeEdit from '../pages/Committee/update'

import School from '../pages/School'
import SchoolCreate from '../pages/School/create'
import SchoolDetail from '../pages/School/view'
import SchoolEdit from '../pages/School/update'

import Clinic from '../pages/Clinic'
import ClinicCreate from '../pages/Clinic/create'
import ClinicDetail from '../pages/Clinic/view'
import ClinicEdit from '../pages/Clinic/update'

import Post from '../pages/Post'
import PostCreate from '../pages/Post/create'
import PostDetail from '../pages/Post/view'
import PostEdit from '../pages/Post/update'

import ProductType from '../pages/ProductType'
import ProductTypeCreate from '../pages/ProductType/create'
import ProductTypeDetail from '../pages/ProductType/view'
import ProductTypeEdit from '../pages/ProductType/update'

import StudentList from '../pages/StudentList'
import StudentListCreate from '../pages/StudentList/create'
import StudentListDetail from '../pages/StudentList/view'
import StudentListEdit from '../pages/StudentList/update'

import SocietyMember from '../pages/SocietyMember'
import SocietyMemberCreate from '../pages/SocietyMember/create'
import SocietyMemberDetail from '../pages/SocietyMember/view'
import SocietyMemberEdit from '../pages/SocietyMember/update'

import Announcement from '../pages/Announcement'
import AnnouncementCreate from '../pages/Announcement/create'
import AnnouncementDetail from '../pages/Announcement/view'
import AnnouncementEdit from '../pages/Announcement/update'

import AccountList from '../pages/AccountCreate'
import AccountCreate from '../pages/AccountCreate/create'
import AccountDetail from '../pages/AccountCreate/view'
import AccountEdit from '../pages/AccountCreate/update'

import Contact from '../pages/ContactForm'
import ContactDetail from '../pages/ContactForm/view'

import Festival from '../pages/Festival'
import FestivalCreate from '../pages/Festival/create'
import FestivalDetail from '../pages/Festival/view'
import FestivalEdit from '../pages/Festival/update'

import Pagoda from '../pages/Pagoda'
import PagodaCreate from '../pages/Pagoda/create'
import PagodaDetail from '../pages/Pagoda/view'
import PagodaEdit from '../pages/Pagoda/update'

export default [
    {
        component: Layout,
        routes: [
            {
                component: requiredAllAuth(Dashboard),
                path: '/',
                exact : true
            },
            {
                component: Login,
                path: '/login'
            },
            {
                component: requiredAllAuth(AccountList),
                path: '/accountcreate',
                exact : true
            },
            {
                component: requiredAllAuth(AccountCreate),
                path: '/accountcreate/create',
                exact : true
            },
            {
                component: requiredAllAuth(AccountDetail),
                path: '/accountcreate/:id',
                exact : true
            },
            {
                component: requiredAllAuth(AccountEdit),
                path: '/accountcreate/update/:id',
                exact : true
            },
            {
                component: requiredAllAuth(Position),
                path: '/position',
                exact : true
            },
            {
                component : requiredAllAuth(PositionCreate),
                path : '/position/create',
                exact :true
            },
            {
                component : requiredAllAuth(PositionDetail),
                path : '/position/:id',
                exact : true
            },
            {
                component :requiredAllAuth(PositionEdit),
                path : '/position/update/:id',
                exact : true
            },
            {
                component : requiredAllAuth(Product),
                path : '/product',
                exact :true
            },
            {
                component : requiredAllAuth(ProductCreate),
                path : '/product/create',
                exact :true
            },
            {
                component :requiredAllAuth(ProductDetail),
                path :'/product/:id',
                exact : true
            },
            {
                component :requiredAllAuth(ProductEdit),
                path : '/product/update/:id',
                exact : true
            },
            {
                component :requiredAllAuth(Monestry),
                path : '/monestry',
                exact :true
            },
            {
                component :requiredAllAuth(MonestryCreate),
                path : '/monestry/create',
                exact : true
            },
            {
                component : requiredAllAuth(MonestryDetail),
                path : '/monestry/:id',
                exact :true
            },
            {
                component :requiredAllAuth(MonestryEdit),
                path : '/monestry/update/:id',
                exact : true
            },
            {
                component : requiredAllAuth(Committee),
                path : '/committee',
                exact : true
            },
            {
                component : requiredAllAuth(CommitteeCreate),
                path : '/committee/create',
                exact : true
            },
            {
                component : requiredAllAuth(CommitteeDetail),
                path : '/committee/:id',
                exact : true
            },
            {
                component : requiredAllAuth(CommitteeEdit),
                path : '/committee/update/:id',
                exact : true
            },
            
            {
                component : requiredAllAuth(School),
                path : '/school',
                exact : true
            },
            {
                component : requiredAllAuth(SchoolCreate),
                path : '/school/create',
                exact : true
            },
            {
                component : requiredAllAuth(SchoolDetail),
                path : '/school/:id',
                exact : true
            },
            {
                component : requiredAllAuth(SchoolEdit),
                path : '/school/update/:id',
                exact : true
            },
            {
                component : requiredAllAuth(Clinic),
                path : '/clinic',
                exact : true
            },
            {
                component : requiredAllAuth(ClinicCreate),
                path : '/clinic/create',
                exact : true
            },
            {
                component : requiredAllAuth(ClinicDetail),
                path : '/clinic/:id',
                exact : true
            },
            {
                component : requiredAllAuth(ClinicEdit),
                path : '/clinic/update/:id',
                exact : true
            },
            {
                component : requiredAllAuth(Post),
                path : '/post',
                exact : true
            },
            {
                component : requiredAllAuth(PostCreate),
                path : '/post/create',
                exact : true
            },
            {
                component : requiredAllAuth(PostDetail),
                path : '/post/:id',
                exact : true
            },
            {
                component : requiredAllAuth(PostEdit),
                path : '/post/update/:id',
                exact : true
            },
            {
                component : requiredAllAuth(ProductType),
                path : '/productType',
                exact :true
            },
            {
                component : requiredAllAuth(ProductTypeCreate),
                path : '/productType/create',
                exact :true
            },
            {
                component :requiredAllAuth(ProductTypeDetail),
                path :'/productType/:id',
                exact : true
            },
            {
                component :requiredAllAuth(ProductTypeEdit),
                path : '/productType/update/:id',
                exact : true
            },
            {
                component : requiredAllAuth(StudentList),
                path : '/studentList',
                exact :true
            },
            {
                component : requiredAllAuth(StudentListCreate),
                path : '/studentList/create',
                exact :true
            },
            {
                component :requiredAllAuth(StudentListDetail),
                path :'/studentList/:id',
                exact : true
            },
            {
                component :requiredAllAuth(StudentListEdit),
                path : '/studentList/update/:id',
                exact : true
            },
            ,
            {
                component : requiredAllAuth(SocietyMember),
                path : '/societyMember',
                exact :true
            },
            {
                component : requiredAllAuth(SocietyMemberCreate),
                path : '/societyMember/create',
                exact :true
            },
            {
                component :requiredAllAuth(SocietyMemberDetail),
                path :'/societyMember/:id',
                exact : true
            },
            {
                component :requiredAllAuth(SocietyMemberEdit),
                path : '/societyMember/update/:id',
                exact : true
            },
            {
                component : requiredAllAuth(Announcement),
                path : '/announce',
                exact :true
            },
            {
                component : requiredAllAuth(AnnouncementCreate),
                path : '/announce/create',
                exact :true
            },
            {
                component :requiredAllAuth(AnnouncementDetail),
                path :'/announce/:id',
                exact : true
            },
            ,
            {
                component :requiredAllAuth(AnnouncementEdit),
                path : '/announce/update/:id',
                exact : true
            },

            {
                component : requiredAllAuth(AccountList),
                path : '/accountcreate',
                exact :true
            },
            {
                component : requiredAllAuth(AccountCreate),
                path : '/accountcreate/create',
                exact :true
            },
            {
                component :requiredAllAuth(AccountDetail),
                path :'/accountcreate/:id',
                exact : true
            },
            {
                component :requiredAllAuth(AccountEdit),
                path : '/accountcreate/update/:id',
                exact : true
            },
            {
                component: requiredAllAuth(Festival),
                path: '/festival',
                exact : true
            },
            {
                component : requiredAllAuth(FestivalCreate),
                path : '/festival/create',
                exact :true
            },
            {
                component : requiredAllAuth(FestivalDetail),
                path : '/festival/:id',
                exact : true
            },
            {
                component :requiredAllAuth(FestivalEdit),
                path : '/festival/update/:id',
                exact : true
            },
            {
                component: requiredAllAuth(Pagoda),
                path: '/pagoda',
                exact : true
            },
            {
                component : requiredAllAuth(PagodaCreate),
                path : '/pagoda/create',
                exact :true
            },
            {
                component : requiredAllAuth(PagodaDetail),
                path : '/pagoda/:id',
                exact : true
            },
            {
                component :requiredAllAuth(PagodaEdit),
                path : '/pagoda/update/:id',
                exact : true
            },
            {
                component :requiredAllAuth(Contact),
                path : '/contact',
                exact : true
            },
            {
                component :requiredAllAuth(ContactDetail),
                path : '/contact/:id',
                exact : true
            },
             
            {
                component: Notfound
            }
        ]
    }
]