import react from "react";
import Trip from "../components/Trip";
import JP2023 from "../assets/thumbnails/JP2023_Thumbnail.jpg"
import JP2025 from"../assets/thumbnails/JP2025_Thumbnail.png"

export default function TripsPage() {
    return (
        <div id="trips-content">
            <div id="trips">
                <Trip src={JP2023} name={"Japan 2023"}/>
                <Trip src={JP2025} name={"Japan 2024-25"}/>
                
            </div>
        </div>
    )
}