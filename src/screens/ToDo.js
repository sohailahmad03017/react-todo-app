import React, { useState } from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Box } from '@mui/material';
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';

export default function Todo() {

  let [val, setVal] = useState('');
  let [todos, setTodos] = useState([]);
  let [isEditing, setIsEditing] = useState(false);
  let [indexToEdit, setIndexToEdit] = useState(''); 

  const addItem = () => {
    let newItem = {
      text: val,
      isChecked: false,
    }
    setTodos([...todos, newItem]);
    setVal('');
  }

  const checkItem = (e) => {
    e.isChecked = !e.isChecked;
    setTodos([...todos]);
  }

  const delItem = (i) => {
    todos.splice(i, 1);
    setTodos([...todos]);
  }

  const editItem = (e,i) => {
    setIsEditing(true);
    setIndexToEdit(i);
    setVal(e.text);
  }

  const saveChange = () => {
    todos[indexToEdit].text = val;
    setVal('');
    setTodos([...todos]);
    setIsEditing(false);
  }

  const delAll = () => {
    setTodos([]);
  }

  return (
    <Box className='mainBox'>
      <Header label='TO DO APP' />

      <Box className='dataBox'>

        <Box className='inputBox'>
            <Input value={val} onChange={(e)=>setVal(e.target.value)}/>
            <Button onClick={isEditing ? saveChange : addItem} label={isEditing ? "Save " : "Add"} className='addBtn'/>
        </Box>

        <Box className='itemsBox'>
          {
            todos.map((e, i) => {
              return (
                <Box className={e.isChecked ? 'item green' : 'item'} key={i} >
                      
                  <Box className='textStyle '>
                    <TaskAltIcon onClick={isEditing? null : () => checkItem(e)} className='icon'/>
                    <span>{e.text}</span>
                  </Box>
                      
                  <Box>
                    <ModeEditIcon onClick={e.isChecked || isEditing ? null : () => editItem(e,i)} className='icon bgBlue' />
                    <HighlightOffIcon  onClick={e.isChecked || isEditing ? null : () => delItem(i)} className='icon bgRed' />
                  </Box>
                </Box>)
            })
          }
        </Box>
        <Button onClick={isEditing? null: delAll} label='Delete All' className='delAllBtn' />
      </Box>

    </Box >
  )
}
