import React, { useState } from 'react'

const ToDoList = () =>
{
    // Get the current date using the Date object
// Get the current date using the Date object
const currentDate = new Date().toLocaleDateString();


    const [todo , setToDo] = useState(["code","workout","smash"])
    const [newTodo , setnewTodo] = useState("")
    const [updateIndex, setIndex] = useState(null)

    
    const handleAdd = () =>
    {
        if(newTodo.trim() !== "")
        {
            setToDo( t=> [...t,newTodo])
            setnewTodo("")
        }
    }
    const handleRemove = (index) =>
    {
       const updateTodo = todo.filter((_,i)=> i !== index)
       setToDo(updateTodo)
        
    }
    const handleUp = (index) =>
    {
        if(index > 0)
        {
            const updateTask = [...todo];
           [ updateTask[index], updateTask[index-1] ]= [updateTask[index-1],updateTask[index]]
            setToDo(updateTask)
        }
    }

    const handleDown = (index) =>
    {
        if(index < todo.length - 1)
        {
            const updateTask = [...todo];
            [ updateTask[index], updateTask[index+1] ]= [updateTask[index+1],updateTask[index]]
            setToDo(updateTask)
        }
    }

    const handleEdit = (index) =>
    {
      setIndex(index);
      const updateValue = todo[index]
      setnewTodo(updateValue)

    //   const popUp = document.getElementById('input')
    //   popUp.value =  updateValue
      //handleUpdate(updateValue,index)
    }

    const handleUpdate = () =>
    {
       if(updateIndex !== null)
       {
        if(newTodo.trim() !== "")
        {
        const updatedTodo = [...todo];
        updatedTodo[updateIndex] = newTodo;
        setToDo(updatedTodo);
        setnewTodo("");
        setIndex(null);
        }
        
       }
    }


   

    return (
        <div className='to-do-list'>
           <h4>Here is your Task for : {currentDate} </h4> 
            
           
            
            <div className='todo-list-item'>
            <input id='input' type='text' value={newTodo} placeholder='Enter your task...' onChange={(event)=> setnewTodo(event.target.value)}/>
           
            {updateIndex !== null ? <button className='add-btn' onClick={handleUpdate}> Update </button> :  <button className='add-btn' onClick={handleAdd}> Add </button>}

             <ol>
                { todo.map((task,index)=><li key={index}>
                    <span className='text'>{task}</span> 
                    <button className='dlt-btn' onClick={()=>handleRemove(index)}>❌</button>
                    <button id='popup' className='edit-btn' onClick={()=>handleEdit(index)}>📝</button>
                    <button className='move-btn' onClick={()=>handleUp(index)}>⬆</button>
                    <button className='move-btn' onClick={()=>handleDown(index)}>⬇</button>
                    </li>)}
             </ol>
            </div>
        </div>
    )
}

export default ToDoList;