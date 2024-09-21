import { AppBar, Toolbar, Typography, Box, Button, ThemeProvider, createTheme } from "@mui/material";
import { Link } from 'react-router-dom';
import './Header.css';
const HeaderComp = () => {
    const theme = createTheme({
        palette: {
            customColor: {
                main: ' #b554b4',
                light: '#034078',
                dark: '#F5D042'
            }
        },
        gradients: {
        customGradient: 'linear-gradient(45deg,#da6a6d,#a24ad7)' 
             
            // #7f5d8b,#625494,#a340d3
            // #3e548b,#da6a6d,#a24ad7

        }
    });

    return (
        <>
            <ThemeProvider theme={theme}>
                <AppBar
                    sx={{
                        background: theme.gradients.customGradient, 
                        width: '100%',
                        padding: '2%',
                    }}
                >
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
                        <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
                            <Typography variant='h3' color="white" sx={{ textAlign: 'center' }}>Smart Entry</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2, marginLeft: 'auto' }}>
                            <Button color="white" sx={{fontSize:'15px'}} component={Link} to='/TableCal'>Home</Button>
                            <Button color="white" sx={{fontSize:'15px'}} component={Link} to='/'>About</Button>
                            <Button color="white" sx={{fontSize:'15px'}} component={Link} to='/ChartComponent'>Blogs</Button>
                            <Button color="white" sx={{ fontSize: '15px' }} component={Link} to='/RangeCal'>Forecast</Button>
                            <Button color="white" sx={{fontSize:'15px'}} component={Link} to='/AlphaFinder'>AlphaFinder</Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </>
    );
};

export { HeaderComp };
