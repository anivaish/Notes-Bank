import { Box } from '@mui/material';
import Drawer from './SlideDrawer';
import Notes from './notes/Notes'

const Main = () => {
    return (
        <Box style={{ display: 'flex', width: '100%',}}>
            <Drawer />
            <Notes />
        </Box>

    )
}

export default Main;