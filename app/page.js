"use client"  // to show it is a fronted code (next.js)
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault() //prevent from reloading the page
    setMainTask([...mainTask, { title , desc}]);
    settitle("")
    setdesc("")
  };

  const deleteHandler = (index) => {
    let copyTask = [...mainTask]
    copyTask.splice(index,1)
    setMainTask(copyTask)
  }
  let renderTask = <h2>No Task Available</h2>
  if(mainTask.length > 0){
    renderTask = mainTask.map((task, index) => {
      return (
        <li key={index} className='flex items-center justify-between mb-8'>
      <div className='flex items-center justify-between mb-5 w-2/3'>
        <h5 className='text-2xl font-semibold'>{task.title}</h5>
        <h6 className='text-lg font-medium'>{task.desc}</h6>
      </div>
      <button onClick={() =>{
        deleteHandler(index)
      }}
      className='bg-red-400 text-white rounded font-bold px-4 py-2'>Delete Task</button>
      </li>
      );
    });
  }
  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>Dimpi's Todo List</h1>
    <form onSubmit={submitHandler}>
      <input type='text' className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' placeholder='Enter Title here...' value={title} onChange={(e) => {
        settitle(e.target.value)
      }}></input>
      <input type='text' className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' placeholder='Enter Description here...' value={desc} onChange={(e) => {
        setdesc(e.target.value)
      }}></input>
      <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m--5'>Add Task</button>
    </form>
    <hr/>

    <div className='p-8 bg-slate-200'>
      <ul>{renderTask}</ul>
    </div>
    </>
  );
};

export default page