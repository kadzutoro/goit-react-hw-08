import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthToken = token => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

const clearAuthToken = () => {
    axios.defaults.common['Authorization'] = '';
}

export const register = createAsyncThunk('auth/register', async( credentials, thunkAPI ) => {
    try {
        const {data} = await axios.post('users/signup', credentials);
        setAuthToken(data.token);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const login = createAsyncThunk('auth/login', async ( credentials, thunkAPI ) => {
    try {
       const {data} = await axios.post('users/login', credentials);
       setAuthToken(data.token);
       return data; 
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const logout = createAsyncThunk('auth/logout', async ( _ , thunkAPI) => {
    try {
        await axios.post('users/logout');
        clearAuthToken();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const refreshUser = createAsyncThunk('auth/refresh', async( _, thunkAPI) =>{
    try {
        const { auth: { token },  } = thunkAPI.getState(); setAuthToken(token);
        const { data } = await axios.get('users/current');
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
},
{
    condition: (_, api ) => {
        const {
            auth: {token},
        } = api.getState();
        return token ? true : false;
    }
})