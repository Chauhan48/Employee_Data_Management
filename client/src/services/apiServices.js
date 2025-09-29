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

export const deleteEmployeeData = async (employeeId) => {
    try{
        const response = await axios.delete(`${API}/delete-employee?employeeId=${employeeId}`);
        return response.data;
    }catch(err){
        return err;
    }
}

export const updateEmployeeData = async (employeeData) => {
    try{
        const response = await axios.put(`${API}/update-employee`, employeeData);
        return response.data;
    }catch(err){
        return err;
    }
}

export const addEmployeeData = async (employeeData) => {
    try{
        const response = await axios.post(`${API}/add-employee`, employeeData);
        return response.data;
    }catch(err){
        return err;
    }
}