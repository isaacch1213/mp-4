"use client"

import { TextField, Button, Box} from "@mui/material";
import { useState } from "react";
import { GifResult } from "@/types/GifResult";
import getGif from "@/lib/getGif";

export default function Search({onGifsLoaded}: {onGifsLoaded: (gifs: GifResult[]) => void }) {
    const [search, setSearch] = useState("");

    function handleSearch() {
        if (!search.trim()) return;

        console.log("searching for: ", search);

        getGif({search})
            .then((gifs) => {
                console.log("GIFs fetched successfully:", gifs);
                onGifsLoaded(gifs)
            })
            .catch((e: Error) => console.log("There was an error:", e.message));
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