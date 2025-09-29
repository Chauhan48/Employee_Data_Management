import { Card, CardActionArea, Typography, Button } from '@mui/material'

export default function EmployeeCard({ employeeData }) {
    return (
        <>
            <Card sx={{ maxWidth: 345, margin: 'auto', m: 2, boxShadow: 4 }}>
                <CardActionArea sx={{ p: 4, height: '100%' }}>
                    <Typography variant="h5" component="div" gutterBottom>{employeeData.name}</Typography>
                    <Typography variant="body1" color="text.secondary">Employee ID: {employeeData.employeeId}</Typography>
                    <Typography variant="body1" color="text.secondary">Email: {employeeData.email}</Typography>
                    <Typography variant="body1" color="text.secondary">Position: {employeeData.position}</Typography>
                </CardActionArea>
                <Button>Edit</Button>
                <Button>Delete</Button>
            </Card>
        </>
    )
}