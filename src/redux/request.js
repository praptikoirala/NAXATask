import axios from 'axios';

export const requestGetData = () => {

    return axios.get('https://admin.naxa.com.np/api/services')
    
}