import { Box, Button, FormControl, InputLabel, MenuItem } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import styled from '@emotion/styled';


const Language = () => {
    const [Language, setLanguage] = React.useState('');
    
    const handleChange = (event) => {
        setLanguage(event.target.value);
    };
    var [inputs, setInputs] = useState({
        Courseid: "",
        Course: "",
        Status: "Active",
    });
    const inputHandler = (event) => {
        const { name, value } = event.target;
        setInputs((inputs) => ({ ...inputs, [name]: value }));
    };
    const addHandler = () => {
        axios.post("http://localhost:3005/newcourse", inputs)
            .then((response) => {
                alert("record saved");
            })
            .catch((err) => console.log(err));
    };
    return (
        <div>
            <h1>Language</h1>

            <StyledBox sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FormControl >
                    <InputLabel id="demo-simple-select-label">Language</InputLabel>
                    <Select sx={{ width: '120px' }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={Language}
                        label="Language"
                        onChange={handleChange}
                    >
                        <MenuItem value={'English'}>English</MenuItem>
                        <MenuItem value={'Malayalam'}>Malayalam</MenuItem>
                        <MenuItem value={'Hindi'}>Hindi</MenuItem>
                    </Select>
                </FormControl>
            </StyledBox>


            <br></br>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                value={inputs.Status}
                name="Status"
                onChange={inputHandler}>

                <MenuItem value={"Active"}>Active</MenuItem>
                <MenuItem value={"Inactive"}>Inactive</MenuItem>
            </Select>
            <br></br>
            <br></br>
            <Button variant="contained" onClick={addHandler}>
                SUBMIT
            </Button>
        </div>
    )
}

const StyledBox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})

export default Language