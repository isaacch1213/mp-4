"use client"

import Search from "@/components/Search"
import { Box, Container } from "@mui/material";

export default function GifSearch() {
    return (
        <Box sx={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Container maxWidth="lg" sx={{ width: "100%", height: "100%", textAlign: "center", display: "flex", flexDirection: "column", gap: "2%", justifyContent: "center"}}>
                <Search />
            </Container>
        </Box>
    );
}