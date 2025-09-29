import { Card, CardActionArea, Typography, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteEmployeeData } from '../services/apiServices';
import { useState } from 'react';
import Message from './Message';
import Popup from './Popup';

export default function EmployeeCard({ employeeData, handleChange }) {
    const [successMessage, setSuccessMessage] = useState('');
    const [alertPopup, setAlertPopup] = useState(false);
    const [openPopUp, setOpenPopup] = useState(false);

    const handleEdit = () => {
        setOpenPopup(true);
    }

    const handleMessage = (message) => {
        setSuccessMessage(message);
        setAlertPopup(true);
        setTimeout(() => {
            setAlertPopup(false)
            handleChange();
        }, 1000);
    }

    const handleClosePopup = () => {
        setOpenPopup(false);
    }

    const handleDelete = async () => {
        const response = await deleteEmployeeData(employeeData.employeeId);
        // setSuccessMessage(response.message);
        // setAlertPopup(true);
        // setTimeout(() => {
        //     setAlertPopup(false)
        //     handleChange();
        // }, 1050);
        handleMessage(response.message)
    }

    return (
        <>
            {alertPopup && <Message message={successMessage} />}
            {openPopUp && <Popup
                open={openPopUp}
                closePopup={handleClosePopup}
                data={employeeData}
                displayMessage={handleMessage}
                addOrUpdate={'Update'}

            />}
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