"use client"

import { Box, Container, Button } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <Box sx={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Container maxWidth="lg" sx={{ width: "100%", height: "100%", textAlign: "center", display: "flex", flexDirection: "column", gap: "2%", justifyContent: "center"}}>
        <h1 className="text-4xl">Find your GIF now.</h1>
        <Link href="/gif-search">
          <Button variant="contained">Explore</Button>
        </Link>
      </Container>
    </Box>
  );
}
