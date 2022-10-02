import axios from 'axios';
import * as types from './timer.actionType';

export const getTimeAPI = ()=> async (dispatch)=> {
    const token= localStorage.getItem("getharvesttoken")
    dispatch({type: types.GET_TIME_LOADING});
    try {
        const res = await axios.get('http://localhost:8080/project',{
            headers:{
                'authorization':`Bearer ${token}`
            }
        });
        dispatch({type: types.GET_TIME_SUCCESS, payload: res.data});
    } catch {
        dispatch({type: types.GET_TIME_ERROR});        
    }
};

export const postTimeAPI = (data)=> async (dispatch)=> {
    const token= localStorage.getItem("getharvesttoken")
    dispatch({type: types.POST_TIME_LOADING});
    try {
        const res = await axios.post(`http://localhost:8080/project/create`, data,{
            headers:{
                'authorization':`Bearer ${token}`
            }
        });       
        dispatch({type: types.POST_TIME_SUCCESS, payload: res.data});
    } catch {
        dispatch({type: types.POST_TIME_ERROR});        
    }
};

