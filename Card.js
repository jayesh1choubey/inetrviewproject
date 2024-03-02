import React from 'react';

import axios from 'axios'
import { useState,useEffect } from 'react';


const Card=()=>
{
    
    const [data,setData] =useState()
    useEffect(()=>{

        axios.get(' https://jsonplaceholder.typicode.com/posts').then((res)=>{
          setData(res.data);
            })
      
      },[])

    return(
        <>
        {
        data && data.map((value) =>{
<div  className='product-div'> {value} </div>
        })
}
       
        
        </>
    )
}
export default Card;