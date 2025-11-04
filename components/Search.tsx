"use client"

import { TextField, Button, Box} from "@mui/material";
import { useState } from "react";

export default function Search() {
    const [search, setSearch] = useState("");

    function handleSearch() {
        console.log("searching for: ", search);
    }

    return (
        <Box sx={{display: "flex", justifyContent: "center", gap: "1%"}}>
            <TextField 
                id="search" 
                label="Search GIFs" 
                variant="outlined" 
                value={search} 
                onChange={(e) => setSearch(e.target.value)}

            />
            <Button variant="contained" onClick={handleSearch}>Search</Button>
        </Box>
    )
}