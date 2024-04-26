import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" style={{textAlign:'left'}} component="div" sx={{ flexGrow: 1 }}>
BlogApp
          </Typography>
        
          <Button > <Link to={'/view'} style={{color:"white" , textDecoration:'none'}}>View</Link></Button>
          <Button > <Link to={'/add'} style={{color:"white"  , textDecoration:'none'}}>Add</Link></Button>
          <Button > <Link to={'/sign'} style={{color:"white"  , textDecoration:'none'}}>Log Out</Link></Button>
          <Button > <Link to={'/my'} style={{color:"white"  , textDecoration:'none'}}>My Profile</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )                           
}

export default Navbar
