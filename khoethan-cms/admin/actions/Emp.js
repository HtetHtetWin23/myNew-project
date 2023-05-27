import history from '../router/history';
import { noti } from '../utils/index';
import {
    FETCH_EMPS,
} from './types';

import api from '../apis';

export const fetchEmp = () => async dispatch => {
    try {
        const res = await api.get(`emp`)
        if (res.data) {
            dispatch({ type: FETCH_EMPS, payload: res.data.data })
        }
    }
    catch (error) {
        noti('error', 'Error', 'Cannot get data from server!!!')
    }
}

export const putEmp = (data,id) => async dispatch => {
    try {
        const res = await api.put(`emp/${id}`, data);
        if (res.data.status=="success") {
                const dep=await api.get(`emp`)
                if(dep.data.status=="success"){
                dispatch({ type: FETCH_EMPS, payload: dep.data.data })
                noti('success', 'Successfully!', 'Position has been updated successfully.')   
                }      

        } else {
            noti('error', 'Unsuccessfully!', 'Fail to update.')
        }
    }
    catch (error) {
        noti('error', 'Error', 'Cannot get data from server!!!')
    }

}

export const postEmp = (data) => async dispatch => {
    try {
        const res = await api.post(`emp`, data)
        if (res.data.status=="success") {
            const disres = await api.get('emp')
            if (disres.data.status=='success') {
                dispatch({ type: FETCH_EMPS, payload: disres.data.data })
                noti('success', 'Successfully!', 'Posiiton has been created Successfully.')
            }
        } else {
            noti('error', 'Unsuccessfully', 'Fail to create.')
        }
    }
    catch (error) {
        noti('error', 'Error', 'Cannot get data from server!!!')
    }
}

export const deleteEmp = (id) => async dispatch => {
    try {
        const res = await api.delete(`emp/${id}`)
        if (res.data.status=='success') {
            const disres = await  api.get('emp')
            if (disres.data.status=='success') {
                dispatch({ type: FETCH_EMPS, payload: disres.data.data })
                noti('success', 'Successfully!', 'Position has been deleted successfully.')
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

