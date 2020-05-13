import { GET_CHAMBRES, GET_CHAMBRE, EDIT_CHAMBRE, ADD_CHAMBRE, DELETE_CHAMBRE, URL_API} from "../keys"
import axios from "axios"

export const getChambres = () => (dispatch) => {
    axios.get(URL_API + "/chambre/all")
        .then(res=>{
            console.clear()  
            console.log(res.data)
        })
        .catch(error=>console.log(error))
    dispatch({
        type:GET_CHAMBRES,
        data : ''
    })
}

export const getUser = (id) => async (dispatch) =>{
    await dispatch({
        type:GET_CHAMBRE,
        data:id
    })
    
}
export const editUser = (id) => async (dispatch) =>{
    await dispatch({
        type:EDIT_CHAMBRE,
        data:id
    })
}
export const addUser = (u) => (dispatch) =>{
    dispatch({
        type:ADD_CHAMBRE,
        data:u
    })
}

export const deleteUser = (id) => (dispatch) =>{
    dispatch({
        type:DELETE_CHAMBRE,
        data:id
    })
}