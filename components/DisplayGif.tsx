import { Grid, Typography } from "@mui/material";
import { GifResult } from "@/types/GifResult";

export default function DisplayGif({gifs}: {gifs: GifResult[]}) {
    return (
        <Grid container spacing={3} sx={{width: "100%", height: "100%", mt: 2}}>
            {gifs.length === 0 ? (
                <Grid size={12} sx={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Typography variant="h6">No GIF results. Try searching for something!</Typography>
                </Grid>
            ) : (
                gifs.map((gif) => (
                <Grid key={gif.id} size={{xs: 12, sm: 6, md: 4, lg: 3}}>
                    <img src={gif.url} alt={gif.title} className="w-full h-auto block"/>
                </Grid>
                ))
            )}
        </Grid>
    )
}