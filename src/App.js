import React, { useState } from 'react'
import './App.css'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function App() {

  let [val, setVal] = useState('');
  let [todos, setTodos] = useState([]);

  const addItem = () => {
    let newItem = {
      text: val,
      isChecked: false,
    }
    setTodos([...todos, newItem]);
    setVal('');
  }

  const checkItem = (e) => {
    e.isChecked = true;
    setTodos([...todos]);
  }

  const delItem = (i) => {
    todos.splice(i, 1);
    setTodos([...todos]);
  }

  const editItem = (e) => {
    let newtxt = prompt("Please, Enter new value", e.text);
    e.text = newtxt;
    setTodos([...todos]);
  }

  const delAll = () => {
    setTodos([]);
  }

  return (
    <div className='mainBox'>
      <div className='header'>
        TO DO APP
      </div>

      <div className='dataBox'>

        <div className='inputBox'>
          <input value={val} onChange={(e) => { setVal(e.target.value); }} type='text' className='inputStyling'></input>
          <button onClick={addItem} className='addBtn'><AddCircleOutlineIcon /> Add </button>
        </div>

        <div className='itemsBox'>
          {
            todos.map((e, i) => {
              return (
                <div className={e.isChecked ? 'item green' : 'item'} style={{}} key={i} >
                  <div className='textStyle '>
                    <TaskAltIcon onClick={() => checkItem(e)} className='icon' />
                    <span>{e.text}</span>
                  </div>
                  <div>
                    <ModeEditIcon onClick={() => editItem(e)} className='icon bgBlue' />
                    <HighlightOffIcon onClick={() => delItem(i)} className='icon bgRed' />
                  </div>
                </div>
              )
            })
          }
        </div>

        <div>
          <button onClick={delAll} className='delAllBtn'>Delete All</button>
        </div>
      </div>

    </div >
  )
}
