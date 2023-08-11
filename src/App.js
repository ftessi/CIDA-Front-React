import './App.css';
import Home from './pages/Home';
import Dashboard from './layout/Dashboard';
import Login from './pages/Login';
import Inventory from './pages/Inventory';
import { Container, Box, Grid, Paper, CssBaseline, Typography, Link } from '@mui/material'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import Search from './components/Search';
import AdminSettings from './pages/Settings';
import ProvidersList from './pages/Providers';



function App() {

  const mdTheme = createTheme({
    palette: {
      mode: 'light', //Probar con Dark después BANANA 
    },
  });

  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const CopyrightContainer = styled('div')({
    position: 'absolute',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    padding: '8px',
  });

  const isAuthenticated = true;

  return (
    <>
      <Router>
        <ThemeProvider theme={mdTheme}>
          <Box sx={{ display: 'flex' }}>
            <CssBaseline />


            <Box
              component="main"
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
              }}
            >
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="login" element={<Login />} />
                <Route path="admin" element={<Dashboard />}>
                  <Route path="buscar" element={<Search />} />
                  <Route path="inventario" element={<Inventory />} />
                  <Route path="configuracion" element={<AdminSettings />} />
                  <Route path="proveedores" element={<ProvidersList />} />
                  {/* <Route path="EditarProveedor" element={<EditarProveedor />} /> */}

                </Route>
              </Routes>
            </Box>
          </Box>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
