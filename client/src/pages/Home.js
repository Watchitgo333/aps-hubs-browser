import { AppBar, Toolbar, Box, Typography, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Home = () => {

    return(
        <div className='viewer-home'>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        M&E Consulting
                    </Typography>
                    <Button color="inherit">Update</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Home;
