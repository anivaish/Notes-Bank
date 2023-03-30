import { useState, useRef, useContext } from 'react';
import { Box, TextField, ClickAwayListener } from '@mui/material';
import { styled } from '@mui/material/styles';
import {v4 as uuid} from "uuid";

import { DataContext } from '../../Context API/DataProvider';

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    box-shadow: 0px 2px 5px 1px rgb(60 64 67 / 30%), 0 1px 8px 3px rgb(60 64 67 / 15%);
    border-color: #e0e0e0;
    width: 600px;
    border-radius: 8px;
    min-height: 30px;
    padding: 10px 15px;
    margin-left: 350px;
    min-height: 30px;
`

const note = {
    id: '',
    heading: '',
    text: ''
}

const Form = () => {
    const containRef = useRef();

    const {notes, setNotes}=useContext(DataContext);
    
    const [addnote, setAddnote] = useState({...note,id: uuid()})

    const [showTextField, setshowTextField] = useState(false);

    const onTextAreaClick = () => {
        setshowTextField(true);
        containRef.current.style.minHeight = '90px';
    }

    const handleClickAway = () => {
        setshowTextField(false);
        containRef.current.style.minHeight = '30px';

        if (addnote.heading || addnote.text) {
            setNotes(prevArr => [addnote, ...prevArr])
        }
        console.log(notes);
    }

    const onTextChange=(e)=>{
        const changedNote={
            ...addnote,[e.target.name]:e.target.value
        }
        setAddnote(changedNote);
    }   

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Container ref={containRef}>
                {
                    showTextField &&
                    <TextField
                        placeholder="Title"
                        variant="standard"
                        InputProps={{ disableUnderline: true }}
                        style={{ marginBottom: 10, }}
                        onChange={(e) => onTextChange(e)}
                        name='heading'
                    value={addnote.heading}
                    />
                }

                <TextField
                    placeholder="Take a note..."
                    multiline
                    maxRows={Infinity}
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                    onClick={onTextAreaClick}
                    onChange={(e) => onTextChange(e)}
                    name='text'
                value={addnote.text}
                />
            </Container>
        </ClickAwayListener>
    )
}

export default Form