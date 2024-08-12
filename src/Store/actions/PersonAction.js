export {removePerson} from "../reducers/PersonSlice";
import axios from "../../utils/axios";
import { loadPerson } from "../reducers/PersonSlice";

export const asyncLoadPerson =(id) => async (dispatch) =>{
    try{
        const result  = await axios.get(`/person/${id}`);
        dispatch(loadPerson(result));
    }catch(error){
        console.error(error);
    }
 };


