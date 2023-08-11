import React, { useState } from 'react';
import {
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Checkbox,
    FormControlLabel,
    FormGroup,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon, Settings } from '@mui/icons-material';



const initialUsers = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'admin',
        isActive: true,
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        role: 'user',
        isActive: true,
    },
    {
        id: 3,
        name: 'Bob Johnson',
        email: 'bob.johnson@example.com',
        role: 'user',
        isActive: false,
    },
];

const AdminSettings = () => {
    const [users, setUsers] = useState(initialUsers);
    const [selectedUser, setSelectedUser] = useState(null);
    const [editMode, setEditMode] = useState(false);

    const handleEdit = (user) => {
        setSelectedUser(user);
        setEditMode(true);
    };

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user.id !== userId));
    };

    const handleSave = () => {
        // TODO: save changes to the selected user
        setSelectedUser(null);
        setEditMode(false);
    };

    const handleCancel = () => {
        setSelectedUser(null);
        setEditMode(false);
    };

    return (
        <>
            <TableContainer component={Paper}>
                <Table aria-label="users table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell component="th" scope="row">
                                    {user.id}
                                </TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.role}</TableCell>
                                <TableCell>
                                    <Checkbox checked={user.isActive} disabled />
                                </TableCell>
                                <TableCell>
                                    <IconButton aria-label="edit" onClick={() => handleEdit(user)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton aria-label="delete" onClick={() => handleDelete(user.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {selectedUser && (
                <form>
                    <h2>{editMode ? 'Edit User' : 'Create User'}</h2>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" ></input>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={selectedUser.email} disabled />
                    <FormControl >
                        <InputLabel id="role-label">Role</InputLabel>
                        <Select
                            labelId="role-label"
                            id="role"
                            name="role"
                            value={selectedUser.role}
                            onChange={(e) =>
                                setSelectedUser((prevState) => ({ ...prevState, role: e.target.value }))
                            }
                        >
                            <MenuItem value="admin">Admin</MenuItem>
                            <MenuItem value="user">User</MenuItem>
                        </Select>
                    </FormControl>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={selectedUser.isActive}
                                    onChange={(e) =>
                                        setSelectedUser((prevState) => ({ ...prevState, isActive: e.target.checked }))
                                    }
                                />
                            }
                            label="Active"
                        />
                    </FormGroup>
                    <Button variant="contained" color="primary" onClick={handleSave}>
                        Save
                    </Button>
                    <Button variant="contained" color="secondary" onClick={handleCancel}>
                        Cancel
                    </Button>
                </form>
            )}
        </>
    );
};

export default AdminSettings;
