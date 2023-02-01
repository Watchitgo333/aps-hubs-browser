import { AppBar, Toolbar, Box, Typography, IconButton, Button, responsiveFontSizes } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import axios from 'axios'
import { useEffect, useState } from 'react';
const Home = () => {

    const [profile, setProfile] = useState({});
    const [loaded, setLoaded] = useState(false);

    async function login(){        
        return axios.get('http://localhost:8080/api/auth/login')
        .then((response)=>{
            console.log(response.data)
            window.location.replace(response.data);
            setLoaded(true);
            return response.data;
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    
    

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
                    <Button color="inherit" onClick={login}>
                    {
                        loaded ? 'Logout' : 'Login'
                    }
                    </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Home;
