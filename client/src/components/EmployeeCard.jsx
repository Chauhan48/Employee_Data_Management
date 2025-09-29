import { Card, CardActionArea, Typography, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteEmployeeData } from '../services/apiServices';
import { useState } from 'react';

export default function EmployeeCard({ employeeData, handleChange }) {

    const handleEdit = () => {
    }
    
    const handleDelete = async () => {
        const response = await deleteEmployeeData(employeeData.employeeId);
        // handleChange();
    }

    return (
        <>
            <Card sx={{ maxWidth: 345, margin: 'auto', m: 2, boxShadow: 4 }}>
                <CardActionArea sx={{ p: 4, height: '100%' }}>
                    <Typography variant="h5" component="div" gutterBottom>{employeeData.name}</Typography>
                    <Typography variant="body1" color="text.secondary">Employee ID: {employeeData.employeeId}</Typography>
                    <Typography variant="body1" color="text.secondary">Email: {employeeData.email}</Typography>
                    <Typography variant="body1" color="text.secondary">Position: {employeeData.position}</Typography>
                </CardActionArea>
                <Button
                    variant='outlined'
                    startIcon={<EditIcon />}
                    fullWidth sx={{ mb: 1, borderRadius: 1, textTransform: 'none', fontWeight: '500' }}
                    onClick={handleEdit}>Edit</Button>
                <Button
                    variant='outlined'
                    color="error"
                    startIcon={<DeleteIcon />}
                    fullWidth sx={{ borderRadius: 1, textTransform: 'none', fontWeight: '500' }}
                    onClick={handleDelete}>Delete</Button>
            </Card>
        </>
    )
}