"use client"

import Search from "@/components/Search"
import { Box, Container } from "@mui/material";
import { useState } from "react";
import { GifResult } from "@/types/GifResult";
import DisplayGif from "@/components/DisplayGif";

export default function GifSearch() {
    const [gifs, setGifs] = useState<GifResult[]>([]);

    return (
        <Box sx={{ width: "100vw", height: "90vh", display: "flex", flexDirection: "column" }}>
            <Container maxWidth="lg" sx={{ mt: 2, mb: 2 }}>
                <Search onGifsLoaded={setGifs} />
            </Container>
            <Container maxWidth="md" sx={{ border: "black solid", maxHeight: "80%", flex: 1, overflow: gifs.length === 0 ? "hidden" : "auto" }}>
                <DisplayGif gifs={gifs} />
            </Container>
        </Box>
    );
}