import { useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard";
import { getEmployeeListing } from "../services/apiServices";
import { Grid } from "@mui/material";

export default function EmployeeListing(){
    const [employeeListing, setEmployeeListing] = useState([]);

    useEffect(() => {
        async function apiData(){
            const res = await getEmployeeListing();
            setEmployeeListing(res.employees)
            console.log(res);
        }
        apiData();
    }, [])

    return (
        <>
            <Grid>
                {employeeListing.map(it =>
                    <EmployeeCard employeeData={it} />
                 )}
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