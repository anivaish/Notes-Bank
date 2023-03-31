import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';
import { useContext } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

//components
import Form from "./Form";
import Singlenote from "./Singlenote";
import BgLine from "./BgLine";
import { DataContext } from '../../Context API/DataProvider';

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
  };

const Notes = () => {

    const { notes,setNotes} = useContext(DataContext);

    const onDragEnd = (result) => {
        if (!result.destination)
            return;

        const items = reorder(notes, result.source.index, result.destination.index);
        setNotes(items);
    }

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box sx={{ flexGrow: 1, p: 3, width: '100%' }}>
                <DrawerHeader></DrawerHeader>
                <Form />
                {
                    (notes.length > 0) ?
                        <DragDropContext onDragEnd={onDragEnd}>
                            <Droppable droppableId="droppable">
                                {(provided, snapshot) => (
                                    <Grid container style={{ marginTop: 16 }}
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                    >
                                        {
                                            notes.map((note, index) => (
                                                <Draggable key={note.id} draggableId={note.id} index={index}>
                                                    {(provided, snapshot) => (
                                                        <Grid item
                                                        ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                        >
                                                            <Singlenote note={note} />
                                                        </Grid>
                                                    )}
                                                </Draggable >
                                            ))
                                        }
                                    </Grid>
                                )}
                            </Droppable >
                        </DragDropContext>
                    : <BgLine />
                }
            </Box>
        </Box>
    )
}

export default Notes;