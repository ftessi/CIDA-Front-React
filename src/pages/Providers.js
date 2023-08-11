import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid } from '@mui/material';
// import ProviderList from './ProviderList';
import MediaCard from '../components/Card';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router-dom';
import Product from "../components/Product";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


const StyledButton = styled(Button)({
    backgroundColor: '#1976d2',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#115293',
    },
    '& .MuiButton-label': {
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
    },
});

function AddProviderButton() {
    return (
        <StyledButton variant="contained">
            <AddCircleIcon sx={{ fontSize: 40 }} /> Añadir Proveedor
        </StyledButton>
    );
}



const ProvidersList = () => {
    //   const [providers, setProviders] = useState([]);

    //   useEffect(() => {
    //     // Fetch provider information here and set it to the state
    //     const fetchProviders = async () => {
    //       const response = await fetch('https://example.com/providers');
    //       const data = await response.json();
    //       setProviders(data.providers);
    //     };

    //     fetchProviders();
    //   }, []);
    const [openModal, setOpenModal] = useState(false);

    const product = {
        name: 'Filtro de Fiat 600',
        description: 'para modelos D-H',
        categoria: 'categoria filtros de auto',
        codigo: 'A432B21',
        sku: '132219320',
        EAN: '1291302131',
        price: '$2510.99',
    };

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };


    return (
        <Container maxWidth="lg">
            <Grid container spacing={2} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'left' }}>
                {/* Use the Grid component with display: 'flex', flexWrap: 'wrap', and justifyContent: 'center' */}
                {/* This will create a flexbox layout with centered items and wrap them */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Link to={"./id"} >
                        <MediaCard />
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <MediaCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <MediaCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <MediaCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <MediaCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <span onClick={handleOpenModal}>

                        <AddProviderButton />
                    </span>
                </Grid>
            </Grid>
            <Product
                open={openModal}
                handleClose={handleCloseModal}
                product={product}
            />
        </Container>
    );
};

export default ProvidersList;