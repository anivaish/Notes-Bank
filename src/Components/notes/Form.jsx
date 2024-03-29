import { useState, useRef, useContext } from 'react';
import { Box, TextField, ClickAwayListener } from '@mui/material';
import { styled } from '@mui/material/styles';
import { v4 as uuid } from "uuid";
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { DataContext } from '../../Context API/DataProvider';

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    margin: auto;
    box-shadow: 0px 2px 5px 1px rgb(60 64 67 / 30%), 0 1px 8px 3px rgb(60 64 67 / 15%);
    border-color: #e0e0e0;
    width:540px;
    border-radius: 8px;
    padding: 5px 20px;
    min-height: 20px;
    @media only screen and (max-width: 600px)
    {
    width:90%;
    }
`
const Container2 = styled(Box)`
    display: flex;
    flex-direction: row;
`;

const Check = styled(CheckCircleOutlinedIcon)`
    position: relative;
    color: #5f6368;
    left: 64%;
    cursor: pointer;
    @media only screen and (max-width: 600px)
    {
        left: 18%;
        padding-left: 1px;
    }
`;
const note = {
    id: '',
    heading: '',
    text: ''
}

const Form = () => {
    const containRef = useRef();

    const { setNotes } = useContext(DataContext);
    const [pos, setPos] = useState('4px');
    const [addNote, setAddNote] = useState({ ...note, id: uuid() })

    const [showTextField, setshowTextField] = useState(false);

    const onTextAreaClick = () => {
        setshowTextField(true);
        setPos('18px');
        containRef.current.style.minHeight = '90px';
    }

    const handleClickAway = () => {
        setshowTextField(false);
        setPos('4px');
        containRef.current.style.minHeight = '30px';
        if (addNote.heading || addNote.text) {
            setNotes(prevArr => [addNote, ...prevArr])
        }
        setAddNote({ ...note, id: uuid() })
    }

    const onTextChange = (e) => {
        const changedNote = {
            ...addNote, [e.target.name]: e.target.value
        }
        setAddNote(changedNote);
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Container ref={containRef} >
                {
                    showTextField &&
                    <TextField
                        placeholder="Title"
                        variant="standard"
                        InputProps={{ disableUnderline: true }}
                        style={{ marginBottom: 10 }}
                        onChange={(e) => onTextChange(e)}
                        name='heading'
                        value={addNote.heading}
                    />
                }
                <Container2>
                    <TextField
                        placeholder="Take a note..."
                        multiline
                        maxRows={Infinity}
                        variant="standard"
                        InputProps={{ disableUnderline: true, }}
                        onClick={onTextAreaClick}
                        onChange={(e) => onTextChange(e)}
                        name='text'
                        value={addNote.text}
                    >
                    </TextField>
                    <Check style={{top:pos}}onClick={handleClickAway}/>
                </Container2>
            </Container>
        </ClickAwayListener>
    )
}

export default Form;