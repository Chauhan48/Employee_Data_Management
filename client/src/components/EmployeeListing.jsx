import { useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard";
import { getEmployeeListing } from "../services/apiServices";
import { Grid } from "@mui/material";

export default function EmployeeListing() {
    const [employeeListing, setEmployeeListing] = useState([]);

    const handleChildComponent = () => {
        window.location.reload();
    }

    useEffect(() => {
        async function apiData() {
            const res = await getEmployeeListing();
            setEmployeeListing(res.employees)
            console.log(res);
        }
        apiData();
    }, [])

    return (
        <>
            <Grid container spacing={2}>
                <Grid size={2} sx={{ borderRight: '1px solid' }}>

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