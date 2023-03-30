import { Box } from '@mui/material';
import Drawer from './SlideDrawer';
import Notes from './notes/Notes'
import DeleteNotes from './delete/DeleteNotes';
import Archives from './archiv/Archives';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Main = () => {
    return (
        <Box style={{ display: 'flex', width: '100%',}}>
            <Router>
                <Drawer />
                <Routes>        
                    <Route path='/' element={<Notes />} />
                    <Route path='/archive' element={<Archives />} />
                    <Route path='/delete' element={<DeleteNotes />} />
                </Routes>
            </Router>
        </Box>
    )
}

export default Main;