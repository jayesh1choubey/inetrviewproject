import React, { useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios'
import { useState } from 'react';

export const Post=()=>{
    return async(dispatch) =>
    {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch({type:'FETCH_SUCCESSFULLY', payload:resp.data});
    }
}