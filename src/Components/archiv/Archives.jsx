import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';
import { useContext } from 'react';

//components
import Archive from './Archive';
import { DataContext } from '../../Context API/DataProvider';

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const Archives = () => {

    const { archiveNotes } = useContext(DataContext);

    return (
        <Box sx={{ display: 'flex', width: '100%'}}>
            <Box sx={{ flexGrow: 1, p: 3, width: '100%'}}>
                <DrawerHeader></DrawerHeader>
                        <Grid container style={{ marginTop: 16 }}>
                            {
                                archiveNotes.map(arhive=> (
                                    <Grid item>
                                        <Archive note={arhive} />
                                    </Grid>
                                ))
                            } 
                        </Grid>
            </Box>
        </Box>
    )
}

export default Archives;