import api from '../apis';
import {
    SIGN_IN,
    SIGN_UP,
    SIGN_OUT,
    CURRENT_USER,
    LOADING
} from './types';
import { noti,setUserInfo,getUserInfo,setUserToken,getUserToken } from '../utils';

export const signIn = (data) => async dispatch => {
    dispatch({ type: LOADING, isloaded: true })
    try{
        const res = await api.post(`/auth/login`, data);
            if(res.data.status=='success') {
                dispatch({ type: SIGN_IN, payload: res.data.data })
                dispatch({ type: LOADING, isloaded: false })
                setUserInfo(res.data.data)
                setUserToken(res.data.token)                
                noti('close')
                noti('success','Successfully!',res.data.msg)
            }else{
                //Alert message
                noti('error','Unsuccessfully!',res.data.msg)
                dispatch({ type: LOADING, isloaded: false })
            }
        }catch (error) {
                noti('error','Unsuccessfully','Connection Time Out!!!')     
                dispatch({ type: LOADING, isloaded: false })
        }   
}

export const currentUser = () => async dispatch => {    
    try{
        var saveData = getUserInfo() 
        console.log("data",saveData)
        if(saveData!==null) {
            //  axios.defaults.headers.common['Authorization'] = `Bearer ${saveToken}`
            const res = await api.get(`/users/CurrentUser?id=${saveData.id}`)
            if(res.data.status === "success") {
                dispatch({ type: CURRENT_USER, payload: res.data.data,isloaded:false })
                setUserInfo(res.data.data)
            }else{
                //Alert message
                localStorage.clear()
                dispatch({type: SIGN_OUT})
            }
        }else{
            localStorage.clear()
            dispatch({type: SIGN_OUT})
        }
    }
    catch(error){
        localStorage.clear()
        dispatch({type: SIGN_OUT})
    }
}
export const signOut = () => async dispatch => {
    localStorage.clear()
    dispatch({ type: SIGN_OUT })
    noti('success','Successfully!','Successfully sign out')
}