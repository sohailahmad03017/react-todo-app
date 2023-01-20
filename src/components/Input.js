import React from 'react'

export default function Input({value,onChange}) {
  return (
    <input value={value} onChange={onChange} type='text' className='inputStyling'></input>
  )
}
