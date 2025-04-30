import React from "react";
import { useParams } from 'react-router-dom';
import JP2023 from "../assets/thumbnails/JP2023_Thumbnail.jpg"
import JP2025 from"../assets/thumbnails/JP2025_Thumbnail.png"
import JapanOnlyMap from "../components/Map";

export default function TripDetailPage() {
  const { name } = useParams();
  let newName = name.replaceAll("-", " ");

  if (name === "Japan-2024-25") {
    newName = "Japan 2024-25";
  }

  return (
    <div id="tripdetails-content">
      <h1>{newName}</h1>
      <JapanOnlyMap name={name}/>
    </div>
  );
}