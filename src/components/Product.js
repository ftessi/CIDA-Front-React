import { makeStyles } from '@mui/styles';
import { Button, Card, CardContent, CardMedia, Container, Modal, Typography } from '@mui/material';
import { Skeleton } from '@mui/lab';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        display: 'flex', // Add display:flex to the card container
        width: 1000,
        backgroundColor: '#f0f0f0',
        border: '2px solid orange', // Add orange border to the card
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between', // Adjust the content to be distributed vertically
        padding: theme.spacing(2),
        flex: '1', // Allow the content to take the available space
    },
    price: {
        alignSelf: 'flex-end', // Align the price to the bottom right of the card
        marginTop: 'auto',
        marginBottom: 'auto',
        color: 'red',
        border: '2px solid black'
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // Adjust the content to be distributed vertically
        flex: '1', // Allow the content to take the available space
        paddingLeft: '50px',
        paddingRight: '50px'
    },
}));

function ProductModal(props) {
    const classes = useStyles();
    const { open, handleClose, product } = props;

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="product-modal-title"
            aria-describedby="product-modal-description"
            className={classes.modal}
        >
            <Card className={classes.card}>
                {/* <CardMedia>
                    <Skeleton variant="rectangular" height={350} />
                </CardMedia> */}
                <CardContent className={classes.cardContent}>
                    <div className={classes.column}>
                        <Typography variant="body1" id="product-modal-title">
                            Nombre:
                        </Typography>
                        <Typography variant="h4" id="product-modal-title">
                            {product.name}
                        </Typography>
                        <Typography variant="body1" id="product-modal-title">
                            Descripción:
                        </Typography>
                        <Typography variant="h5" id="product-modal-description">
                            {product.description}
                        </Typography>
                        <Typography variant="body1" id="product-modal-title">
                            Código:
                        </Typography>
                        <Typography variant="h5" id="product-modal-description">
                            {product.codigo}
                        </Typography>
                        <Typography variant="body1" id="product-modal-title">
                            SKU:
                        </Typography>
                        <Typography variant="h5" id="product-modal-description">
                            {product.sku}
                        </Typography>
                        <Typography variant="body1" id="product-modal-title">
                            EAN:
                        </Typography>
                        <Typography variant="h5" id="product-modal-description">
                            {product.EAN}
                        </Typography>
                    </div>
                    <div className={classes.column}>

                        <Typography variant="h2" className={classes.price}>
                            {product.price}
                        </Typography>
                    </div>
                    {/* <Button variant="contained" color="primary" onClick={handleClose}>
                        Añadir
                    </Button> */}
                </CardContent>
            </Card>
        </Modal >
    );
}

export default ProductModal;