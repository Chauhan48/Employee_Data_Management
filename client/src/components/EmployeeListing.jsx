import { useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard";
import { getEmployeeListing } from "../services/apiServices";
import { Button, Grid } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Popup from "./Popup";
import Message from "./Message";
import FilterComponent from "./FilterComponent";

export default function EmployeeListing() {
    const [employeeListing, setEmployeeListing] = useState([]);
    const [openPopup, setOpenPopup] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [alertPopup, setAlertPopup] = useState(false);
    const [positions, setPositions] = useState([]);

    const handleMessage = (message) => {
        setSuccessMessage(message);
        setAlertPopup(true);
        setTimeout(() => {
            setAlertPopup(false)
            handleChildComponent();
        }, 1000);
    }

    const handleClosePopup = () => {
        setOpenPopup(false);
    }

    const handleChildComponent = () => {
        window.location.reload();
    }

    const handleFilter = () => {
        setOpenPopup(true);
    }

    const updatedEmployeeListing = (empList) => {
        setEmployeeListing(empList)
    }

    useEffect(() => {
        async function apiData() {
            const res = await getEmployeeListing();
            setEmployeeListing(res.employees);
            setPositions(res.positions);
        }
        apiData();
    }, [])

    return (
        <>
            {alertPopup && <Message message={successMessage} />}
            <Button
                variant='contained'
                color="secondary"
                startIcon={<AddIcon />}
                sx={{ borderRadius: 1, textTransform: 'none', fontWeight: '500' }}
                onClick={handleFilter}
            >Add Employee</Button>
            {openPopup && <Popup
                open={openPopup}
                closePopup={handleClosePopup}
                data={{}}
                displayMessage={handleMessage}
                addOrUpdate={'Add'}
            />}
            <Grid container spacing={2}>
                <Grid size={2} sx={{ borderRight: '1px solid' }}>
                    <FilterComponent positionListing={positions} handleFilterData={updatedEmployeeListing} />
                </Grid>
                <Grid container size={10} spacing={4} sx={{ padding: 4 }}>
                    {employeeListing.map(it =>
                        <Grid item key={it.employeeId} xs={12} sm={6} md={4}>
                            <EmployeeCard employeeData={it} handleChange={handleChildComponent} />
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </>
    )
}

const data = {
    employeeId: 1,
    name: 'Anshit Chauhan',
    email: 'anshit@gmail.com',
    position: 'SD1'
}