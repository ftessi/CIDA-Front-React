import { Container, Grid, Paper, useTheme } from "@mui/material";
import Search from "../components/Search";


export default function Home() {
    // const [openModal, setOpenModal] = useState(false);
    // const product = {
    //     name: 'Product Name',
    //     description: 'Product description goes here',
    //     image: '/path/to/product/image.jpg',
    //     price: '$10.99',
    // };

    // const handleOpenModal = () => {
    //     setOpenModal(true);
    // };

    // const handleCloseModal = () => {
    //     setOpenModal(false);
    // };

    const theme = useTheme();

    return (
        <>
            <Paper sx={{ p: 2, minHeight: '100vh' }}>
                <Container maxWidth="" sx={{ mt: theme.spacing(8), mb: 0 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Search />
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </>
    );
}