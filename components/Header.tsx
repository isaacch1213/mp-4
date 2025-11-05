import Link from "next/link";
import { Typography } from "@mui/material";

export default function Header() {
    return (
        <header>
            <Typography variant="h5" component="h2" sx={{ height: "10vh", display: "flex", alignItems: "center", paddingLeft: "1%"}}>
                <Link href="/">
                    GIF Finder
                </Link>
            </Typography>
        </header>
    )
}