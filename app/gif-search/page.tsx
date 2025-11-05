import GifSearch from "@/components/GifSearch";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Search | GIF Finder",
};

export default function GifSearchPage() {
    return (
        <GifSearch />
    );
}