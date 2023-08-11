import { Container, Grid, Button, Paper } from "@mui/material";
import Search from "../components/Search";
import Product from "../components/Product";
import { useState } from "react";
import CollapsibleTable from "../components/CollapsibleTable";
import EnhancedTable from "../components/Table"

export default function Home() {

    const [openModal, setOpenModal] = useState(false);
    const product = {
        name: 'Product Name',
        description: 'Product description goes here',
        image: '/path/to/product/image.jpg',
        price: '$10.99',
    };

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (

        <>
            <Container maxWidth="" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            <Search />

                            <Button onClick={handleOpenModal}>Open Product Modal</Button>
                            <Product
                                open={openModal}
                                handleClose={handleCloseModal}
                                product={product}
                            />
                            <CollapsibleTable />
                            <EnhancedTable />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

        </>





    )
}