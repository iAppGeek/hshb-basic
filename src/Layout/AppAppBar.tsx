import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    backdropFilter: 'blur(24px)',
    border: '1px solid',
    borderColor: theme.palette.divider,
    backgroundColor: alpha(theme.palette.background.default, 0.4),
    boxShadow: theme.shadows[1],
    padding: '8px 12px',
}));

const scrollTo = (id: string) => {
    const yOffset = -30; 
    const element = document.getElementById(id);
    if(element){
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }
}

export default function AppAppBar() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    return (
        <AppBar
            position="fixed" sx={{ boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none', mt: 2 }}
        >
            <Container maxWidth="lg">
                <StyledToolbar variant="dense" disableGutters>
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
                    <Box
                                component="img"
                                sx={{
                                    height: 60,
                                    width: 60,
                                    maxHeight: { xs: 60, md: 60 },
                                    maxWidth: { xs: 60, md: 60 },
                                }}
                                alt="HSHB Logo"
                                src="assets/icons/logo.png"
                            />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Button variant="text" color="primary" size="small" onClick={() => scrollTo("ourSchool")}>
                                Our School?
                            </Button>
                            <Button variant="text" color="primary" size="small" onClick={() => scrollTo("ourPeople")}>
                                Our People
                            </Button>
                            <Button variant="text" color="primary" size="small" onClick={() => scrollTo("jobs")}>
                                Vacancies
                            </Button>
                            <Button variant="text" color="primary" size="small" onClick={() => scrollTo("contact")}>
                                Get in Touch
                            </Button>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            gap: 1,
                            alignItems: 'center',
                        }}
                    >
                        <IconButton
                            color="primary"
                            aria-label="Facebook"
                            onClick={() => window.open('https://www.facebook.com/eastbarnetgreekschool/')}
                        >
                            <FacebookIcon />
                        </IconButton>
                        <IconButton
                            color="primary"
                            aria-label="Instagram"
                            onClick={() => window.open('https://www.instagram.com/eastbarnet_hellenic/')}
                        >
                            <InstagramIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
                        <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
                            <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <IconButton onClick={toggleDrawer(false)}>
                                        <CloseRoundedIcon />
                                    </IconButton>
                                </Box>
                                <Divider sx={{ my: 3 }} />
                                <MenuItem>Our School</MenuItem>
                                <MenuItem>Our Staff</MenuItem>
                                <MenuItem>Calendar</MenuItem>
                                <MenuItem>Contact Details</MenuItem>
                                <MenuItem>Vacancies</MenuItem>
                                <MenuItem>
                                    <IconButton
                                        color="primary"
                                        aria-label="Facebook"
                                        onClick={() => window.open('https://www.facebook.com/eastbarnetgreekschool/')}
                                    >
                                        <FacebookIcon />
                                    </IconButton>
                                </MenuItem>
                                <MenuItem>
                                    <IconButton
                                        color="primary"
                                        aria-label="Instagram"
                                        onClick={() => window.open('https://www.instagram.com/eastbarnet_hellenic/')}
                                    >
                                        <InstagramIcon />
                                    </IconButton>
                                </MenuItem>
                            </Box>
                        </Drawer>
                    </Box>
                </StyledToolbar>
            </Container>
        </AppBar>
    );
}