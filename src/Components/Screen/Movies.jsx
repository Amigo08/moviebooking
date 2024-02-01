import { Button, TextField } from '@mui/material'
import React from 'react'

function Movies() {
  return (
    <div>
    <h1> Add Movie</h1>   <br/>
      <TextField id="outlined-basic" label="Movie Name" variant="outlined" /><br></br><br></br> 
      <TextField id="outlined-basic" label="Movie description" variant="outlined" /><br></br><br></br> 
      <TextField id="outlined-basic" label="Releasing date" variant="outlined" /><br></br><br></br>
      <TextField id="outlined-basic" label="Duration" variant="outlined" /><br></br><br></br>
      
      <TextField id="outlined-basic" label="price" variant="outlined" /><br></br><br></br>
      <Button variant="contained" color="success">
  Submit
</Button><br></br>
    </div>
  )
}

export default Movies