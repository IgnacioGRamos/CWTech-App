import React, {useState, useEffect} from 'react';
import './App.css';
import { useSelector ,useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { getText } from './Actions/index.js'


function App() {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const words = useSelector((state) => state.words);

  


  function handleChange(e) {
    setInput(e.target.value)
  };

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getText(input))
  };


  return (
    <div className="App">
      <Box
        sx={{
          backgroundColor: 'red',
        }}
        >
      <form onSubmit={(e) => handleSubmit(e)}>
        <TextField name='text' sx={{ m: 1, width: "50%", backgroundColor: 'white' }} label="Insert Text" variant="filled" onChange={(e) => handleChange(e)}  />
        <Button sx={{ m: 1.8 }} variant="contained" type="submit">Send</Button> 
      </form>
      
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          backgroundColor: 'gray',
          opacity: 0.5,
          display: "flex",
          justifyContent: "center",
          
        }}
      >
        <Box
          sx={{
            width: "60%",
            marginTop: "50px",
            backgroundColor: "white"
          }}
        >
          <div className='div'>
            <p className='p'>
              Results:
            </p>
          </div>
          <div>
            <ul class="list">
              {words.map( word => (<ol class="item">{word}</ol>))}
            </ul>
          </div>
          
        </Box>
      </Box>
    </div>
  );
}

export default App;
