import { Button, TextField } from "@mui/material";
import Dropdown from "./Dropdown";
import ClearIcon from '@mui/icons-material/Clear';
import FilterListAltIcon from '@mui/icons-material/FilterListAlt';
import { useEffect, useState } from "react";

export default function FilterComponent({positionListing}) {
    const [positions, setPositions] = useState([]);
    const [position, setPosition] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        setPositions(positionListing)
    }, positionListing)

    const handleFilter = (field, option) => {
        setPosition(option)
    }

    const removeFilterListing = () => {

    }

    const updateeEmployeeListing = () => {

    }

    return (
        <>
            <TextField
                label="Name"
                value={name}
                onChange={(e) =>
                    setName(e.target.value)
                }
                fullWidth
            />
            <Dropdown filterList={positions} field={'position'} applyFilter={handleFilter} />
            <Button variant="contained" sx={{ m: 1 }} startIcon={<FilterListAltIcon />} onClick={updateeEmployeeListing}>Filter</Button>
            <Button variant="outlined" color="warning" sx={{ m: 1 }} startIcon={<ClearIcon />} onClick={removeFilterListing}>Reset Filters</Button>
        </>
    )
}