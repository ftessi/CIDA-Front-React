import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { InputBase, IconButton, Stack, Container, Box, Paper } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import BarcodeScan from '../utils/BarcodeScan.png';
import Table from "../components/Table";
import ButtonBar from '../components/ButtonBar';


const SearchContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    borderRadius: '24px',
    padding: '4px 12px',
    width: '100%',
    maxWidth: '400px', /* Add a maximum width for the search container */
    height: '48px',
    margin: '0 auto',
    '&:hover': {
        backgroundColor: '#e1e3e4',
    },
});

const Input = styled(InputBase)({
    marginLeft: '8px',
    flex: 1,
});

const SearchButton = styled(IconButton)({
    padding: '10px',
});

const ImageContainer = styled(Container)({
    display: 'flex',
    justifyContent: 'center', /* Center the image horizontally */
    marginBottom: '16px', /* Add some spacing between the image and the search container */
});

const Image = styled('img')({
    maxWidth: '100%',
    maxHeight: '100%',
    height: 'auto',
    width: 'auto'
});

function Inventory() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Search for ${searchTerm}`);
        // replace with your search logic
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
            <Table />
        </>
    );
}

export default Inventory;