import history from '../router/history';
import { noti,getUserInfo } from '../utils/index';
import {
    FETCH_ROLES,
    FETCH_ROLE,
    FETCH_ROLE_PERMISSION,
} from './types';

import api from '../apis';
import { encryptId } from '../utils'

export const fetchRole = () => async dispatch => {
   let isAdmin=getUserInfo().role=='super-admin'?1:0;
    try {
        const res = await  api().get(`role?isSuperAdmin=${isAdmin}`);
        if (res.data.status=='success') {
            dispatch({ type: FETCH_ROLES, payload: res.data.data })
            return 'success';
        } else {
            //Alert message
        }
    }
    catch (error) {
        noti('error', 'Error', 'Cannot get data from server!!!')
    }
}

export const putRole = (data,id) => async dispatch => {
    try {
        const res = await api().put(`role/${id}`, data);
        let isAdmin=getUserInfo().role=='super-admin'?1:0;
        if (res.data.status=="success") {
            const disres = await api().get(`role?isSuperAdmin=${isAdmin}`)
            if (disres.data.status=='success') {
                dispatch({ type: FETCH_ROLES, payload: disres.data.data })
                noti('success', 'Successfully!', 'Role has been updated successfully.') 
            }
                 
        } else {
            noti('error', 'Unsuccessfully', res.data.message)
        }
    }
    catch (error) {
        noti('error', 'Error', 'Cannot get data from server!!!')
    }

}

export const postRole = (data) => async dispatch => {
    try {
        const res = await api().post(`role`, data);
        let isAdmin=getUserInfo().role=='super-admin'?1:0;
        if (res.data.status=="success") {
            const disres = await api().get(`role?isSuperAdmin=${isAdmin}`)
            if (disres.data.status=='success') {
                dispatch({ type: FETCH_ROLES, payload: disres.data.data })
                noti('success', 'Successfully!', 'Role has been created Successfully.')
            }    
        } else {
            noti('error', 'Unsuccessfully', res.data.message)
        }
    }
    catch (error) {
        noti('error', 'Error', 'Cannot get data from server!!!')
    }
}

export const deleteRole = (id) => async dispatch => {
    try {
        const res = await api().put(`role/del/${id}`);
        let isAdmin=getUserInfo().role=='super-admin'?1:0;
        if (res.data.status=='success') {
            const disres = await  api().get(`role?isSuperAdmin=${isAdmin}`);
            if (disres.data.status=='success') {
                dispatch({ type: FETCH_ROLES, payload: disres.data.data })
                noti('success', 'Successfully!', 'Role has been deleted successfully.')
            }
        } else {
            //Alert message
            noti('error', 'Unsuccessfully!', 'Fail to delete.')
        }
    }
    catch (error) {
        noti('error', 'Error', 'Cannot get data from server!!!')
    }
}



export const postRolePermission = (data) => async dispatch =>{
    try{
        const res = await  api().post(`role/set-permission`,data);
        if (res.data.status=='success') {
            noti('success', 'Successfully!', 'Permission has been added successfully');
            history.push(`/usermanagement/role`);
        } else {
            //Alert message
        }
    }
    catch (error) {
        noti('error', 'Error', 'Cannot get data from server!!!')
    }
}

export const fetchRolePermission = (id) => async dispatch =>{
    try{
        const res = await  api().get(`role/get-permission/${id}`);
        if (res.data.status=='success') {
            dispatch({ type: FETCH_ROLE_PERMISSION, payload: res.data.data })
        } else {
            //Alert message
        }
    }
    catch (error) {
        noti('error', 'Error', 'Cannot get data from server!!!')
    }
}

export const addUserRole = (data) => async dispatch =>{
    try{
        const res = await  api().post(`role/add-user-role`,data);
        if (res.data.status=='success') {
            return 'success';
        } else {
            //Alert message
        }
    }
    catch (error) {
        noti('error', 'Error', 'Cannot create Account!!!')
    }
}

export const getRoleById = id => async dispatch => {
    try{
        const res = await api().get(`role/${id}`)
        if(res.data.status === "success"){
            dispatch({
                type:FETCH_ROLE,
                payload: res.data.data
            })
        }else{
             // noti("error", "Unsuccessfully", "Fail to fetch.");
        }
        return null;
    }catch(error){
        // noti("error", "Error", "Cannot get data from server!!!");
    }
}