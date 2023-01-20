import { Box } from '@mui/material'
import React from 'react'

export default function Header({label}) {
  return (
      <Box className='header'>{label}</Box>
  )
}
