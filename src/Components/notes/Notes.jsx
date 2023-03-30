import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';
import { useContext } from 'react';

//components
import Form from "./Form";
import Singlenote from "./Singlenote";
import BgLine from "./BgLine";
import { DataContext } from '../../Context API/DataProvider';

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const Notes = () => {

    const { notes } = useContext(DataContext);

    return (
        <Box sx={{ display: 'flex', width: '100%'}}>
            <Box sx={{ flexGrow: 1, p: 3, width: '100%'}}>
                <DrawerHeader></DrawerHeader>
                <Form />
                {
                    (notes.length > 0) ?
                        <Grid container style={{ marginTop: 16 }}>
                            {
                                notes.map(note => (
                                    <Grid item>
                                        <Singlenote note={note} />
                                    </Grid>
                                ))
                            }
                        </Grid>
                        : <BgLine />
                }
            </Box>
        </Box>
    )
}

export default Notes;