import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const FileUploadModal = () => {
    const [open, setOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSend = () => {
        // Perform your send logic here
        console.log('Selected Option:', selectedOption);
        console.log('Selected File:', selectedFile);
        handleClose();
    };

    return (
        <div>
            <Button variant="contained" onClick={handleOpen}>
                Open Modal
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Modal Title</DialogTitle>
                <DialogContent>
                    <FormControl fullWidth>
                        <InputLabel>Select Option</InputLabel>
                        <Select value={selectedOption} onChange={handleOptionChange}>
                            <MenuItem value="option1">Option 1</MenuItem>
                            <MenuItem value="option2">Option 2</MenuItem>
                            <MenuItem value="option3">Option 3</MenuItem>
                        </Select>
                    </FormControl>
                    <input type="file" onChange={handleFileChange} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSend}>Send</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default FileUploadModal;