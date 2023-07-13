import React from 'react'
import {FaRegTrashAlt} from 'react-icons/fa';

const style={
    liComplete:'flex justify-between bg-gray-400 p-4 my-2 capitalize ',
    textComplete:'ml-2 cursor-pointer line-through',
    li:'flex justify-between bg-gray-600 p-4 my-2 capitalize',
}


const Todo = ({todo, toggleComplete, deleteTodo}) => {
  return (
      <li className={todo.completed ? style.liComplete : style.li}>
        <div className='flex'>
            <input onChange={()=> toggleComplete(todo)}  type="checkbox" checked={todo.completed ? 'checked' : ''}/>
            <p onClick={()=>toggleComplete(todo)} className={todo.completed ? style.textComplete :'ml-2 cursor-pointer'}>{todo.text}</p>
        </div>
        <button onClick={()=>deleteTodo(todo.id)} className='cursor-pointer flex items-center '>{<FaRegTrashAlt />}</button>
      </li>
  )
};

export default Todo
