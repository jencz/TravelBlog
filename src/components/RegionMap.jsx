// components/RegionMapModal.jsx
import React from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { IoMdExit } from "react-icons/io";

const cityCoordinates = {
    Tokyo: [35.6895, 139.6917],
    Kyoto: [35.0116, 135.7681],
    Osaka: [34.6937, 135.5023],
    Hiroshima: [34.3853, 132.4553],
    Miyajima: [34.2955, 132.3197],
    Nara: [34.6851, 135.8048],
    Kamakura: [35.3167, 139.5500],
};

export default function RegionMap({ cityName, onClose }) {
    const coordinates = cityCoordinates[cityName];

    if (!coordinates) return null;

    return (
        <div
    style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
    }}
>
    <div style={{ position: 'relative', width: '100%', height: '100%' }} onClick={onClose}>
        <IoMdExit
            
            style={{
                position: 'absolute',
                top: 10,
                right: 10,
                zIndex: 1100,
                cursor: 'pointer',
            }}
            size={35}
        >
        </IoMdExit>
        <MapContainer
            center={coordinates}
            zoom={11}
            style={{ height: '100%', width: '100%' }}
            minZoom={11}
            maxZoom={11}
            dragging={false}
            scrollWheelZoom={false}
            doubleClickZoom={false}
            zoomControl={false}
            touchZoom={false}
            keyboard={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
            <Marker position={coordinates} />
        </MapContainer>
    </div>
</div>
    );
}
