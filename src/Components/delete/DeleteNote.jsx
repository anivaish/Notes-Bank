import { useContext } from 'react';

import { Card, CardContent, CardActions, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { RestoreFromTrashOutlined as Restore, DeleteForeverOutlined as Delete } from '@mui/icons-material';

import { DataContext } from '../../Context API/DataProvider';

const StyledCard = styled(Card)`
    border: 1px solid #e0e0e0;  
    border-radius: 8px;
    width: 240px;
    margin: 8px;
    box-shadow: none;
`

const DeleteNote = ({ deleteNote }) => {

    const {deleteNotes, setNotes, setAcrchiveNotes, setDeleteNotes } = useContext(DataContext);

    const restoreNote = (deleteNote) => {
        const updatedNotes = deleteNotes.filter(data => data.id !== deleteNote.id);
        setDeleteNotes(updatedNotes);
        setNotes(prevArr => [deleteNote, ...prevArr]);
    }

    const removeNote = (deleteNote) => {
        const updatedNotes = deleteNotes.filter(data => data.id !== deleteNote.id);
        setDeleteNotes(updatedNotes);
    }

    return (
        <StyledCard>
                <CardContent>
                    <Typography>{deleteNote.heading}</Typography>
                    <Typography>{deleteNote.text}</Typography>
                </CardContent>
                <CardActions>
                    <Delete 
                        fontSize="small"
                        onClick={() => removeNote(deleteNote)}  
                        style={{cursor: 'pointer' }}
                    />
                    <Restore
                        fontSize="small" 
                        style={{cursor: 'pointer'  }} 
                        onClick={() =>restoreNote(deleteNote)}
                    />  
                </CardActions>
        </StyledCard>
    )
}

export default DeleteNote;