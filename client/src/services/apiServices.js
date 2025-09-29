import axios from 'axios';
import { API } from '../Constants';

export const getEmployeeListing = async () => {
    try{
        const response = await axios.get(`${API}/get-employees`);
        return response.data;
    }catch(err){
        return err;
    }
}