import {useState} from 'react';
import { BACKEND_URL } from '../config/constants';

const useFetch = () => {
    // states
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    // function request
    const request = async (url, method, body, headers) => {
        try {
            setError(null);
            setLoading(true);
            // adding needed headers
            headers['Content-Type'] = 'application/json';
            if (method === 'GET'){
                const response = await fetch(`${BACKEND_URL}${url}`, {method, headers});
                const res = await response.json();
                setData(res.data); 
                setLoading(false);
                return res.data;  
            }
            const response = await fetch(`${BACKEND_URL}${url}`, {method, headers, body: JSON.stringify(body)});
            const res = await response.json();
            setLoading(false);
            return res;
        }
        catch (err){
            console.log(err, 'err')
            setError(err);
            setLoading(false);
            return err;
        }
    }

    // function for clearing the error
    const clearError = () => {
        setError(null);
    }
    
    return {loading, data, error, request, clearError };
} 


export default useFetch;