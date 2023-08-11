import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { InputBase, IconButton, Stack, Container, Box } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import BarcodeScan from '../utils/BarcodeScan.png';
import EnhancedTable from './Table';
import axios from 'axios';


const SearchContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    border: 'solid 2px',
    borderColor: '#808080',
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
    marginTop: '16px'
});

const Image = styled('img')({
    maxWidth: '100%',
    maxHeight: '100%',
    height: 'auto',
    width: 'auto',
    marginTop: '100px'
});

function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchTest, setSearchTest] = useState(false);
    const [propsdata, setPropsdata] = useState([]); // State to hold the loaded data

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(`Search for ${searchTerm}`);

        try {
            // Replace 'YOUR_ENDPOINT_URL' with the actual endpoint you configure on the server-side
            const response = await axios.get(`http://localhost:5000/search?search=${searchTerm}`);
            setPropsdata(response.data); // Assuming the response contains an array of data
            setSearchTest(true);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };



    return (
        <div id="SearchComponent">
            <form onSubmit={handleSubmit}>
                <Stack>
                    <SearchContainer>
                        <Input
                            placeholder="Buscar"
                            inputProps={{ 'aria-label': 'search' }}
                            value={searchTerm}
                            onChange={handleInputChange}
                            autoFocus={true}
                        />
                        <SearchButton type="submit" aria-label="search">
                            <SearchIcon />
                        </SearchButton>
                    </SearchContainer>
                    {searchTest ? (
                        <ImageContainer>
                            <EnhancedTable data={propsdata} /> {/* Pass the loaded data to the EnhancedTable component */}
                        </ImageContainer>
                    ) : (
                        <ImageContainer>
                            <Image src={BarcodeScan} alt="BarcodeScan" />
                        </ImageContainer>
                    )}
                </Stack>
            </form>
        </div >
    );
}

export default Search;