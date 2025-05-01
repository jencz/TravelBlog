// components/RegionMapModal.jsx
import React from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { IoMdExit } from "react-icons/io";

const regions = {
    Tokyo: {
        bounds: [35.6895, 139.6917],
        markers: [
            { name: "Asakusa", coordinates: [] },
            { name: "Shibuya", coordinates: [] },
            { name: "Shinjuku", coordinates: [] },
            { name: "Harajuku", coordinates: [] },
            { name: "Akihabara", coordinates: [] },
        ],
        zoom: 11,
    },
    Kyoto: {
        bounds: [35.0116, 135.7681],
        markers: [],
        zoom: 12,
    },
    Osaka: {
        bounds: [34.6937, 135.5023],
        markers: [],
        zoom: 12,
    },
    Hiroshima: {
        bounds: [34.3853, 132.4553],
        markers: [],
        zoom: 12,
    },
    Miyajima: {
        bounds: [34.2955, 132.3197],
        markers: [],
        zoom: 14,
    },
    Nara: {
        bounds: [34.6851, 135.8048],
        markers: [],
        zoom: 12,
    },
    Kamakura: {
        bounds: [35.3167, 139.5500],
        markers: [],
        zoom: 12,
    },
};


export default function RegionMap({ cityName, onClose }) {
    const region = regions[cityName];

    if (!region) return null;

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
            center={region.bounds}
            zoom={region.zoom}
            style={{ height: '100%', width: '100%' }}
            minZoom={region.zoom}
            maxZoom={region.zoom}
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
            <Marker position={region.bounds} />
        </MapContainer>
    </div>
</div>
    );
}
