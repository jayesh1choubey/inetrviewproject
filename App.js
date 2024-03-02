import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route }  from 'react-router-dom';
import Card from './Card';
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios'
import { useState } from 'react';
import {useDispatch,useSelector } from 'react-redux';
import post from './Action';
import Remove from './Remove';



function App() {


  const loading = useSelector((state)=> state.post.loading);

  const post = useSelector((state)=> state.post.post);
  const dispatch = useDispatch();
  const [currentpage,setCurrentpage] = useState(1);
  const [cardpage] = useState(6);

  useEffect(()=>
  {
    dispatch(post());
  })

  //   const [data,setData] =useState()
// useEffect(()=>{

//   axios.get(' https://jsonplaceholder.typicode.com/posts').then((res)=>{
//     setData(res.data);
//       })

// },[])
const firstcard = currentpage*cardpage;
const lastcard = currentpage-cardpage;
const servecard = post.slice(firstcard,lastcard);




const nextpage=()=>
{
  setCurrentpage(currentpage+1);
}

const prevpage=()=>
{
  setCurrentpage(currentpage-1);
}

const removed=(info)=>
{
  dispatch(Remove(info));
}

const chpage=(pno)=>
{
  setCurrentpage(pno);
}

 const showcard=()=>
 {
  return servecard.map((data)=>(

<div>   <h1>{data.title}</h1> <p>{data.body}</p><button onClick={()=>removed(data.id)}>remove</button></div>

  ))
 }

 const showpagination=()=>
 {
  const handlenum=[];
for(let i=1;i<Math.ceil(post.length / cardpage);i++)
{
  handlenum.push(
    <button onClick={()=>chpage(i)}>{i}</button>
  );
}
return
(
  <div>{currentpage !==1 && <button onClick={prevpage}>previos</button>}
  {handlenum}
  {currentpage!==Math.ceil(post.length / cardpage) && <button onClick={nextpage()}></button>}
  </div>
);
 };



}

export default App;











