import React from 'react'
import { Menu } from 'antd';

import  { MenuList,getDefaultSelectedKeys,getDefaultOpenKeys } from './menulist'

export default ({onselect}) => {
    const list = MenuList
    return (
        <Menu 
           onSelect = {onselect}
           theme ="light"
            mode="inline" 
            selectedKeys={getDefaultSelectedKeys()}
            defaultOpenKeys={getDefaultOpenKeys()}
            >
            {list}
        </Menu>
    )
}

