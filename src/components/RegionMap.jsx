import React from 'react';
import { MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet';
import { IoMdExit } from "react-icons/io";


export default function RegionMap({ cityName, onClose, name }) {
    let regions = {};
    if (name === "Japan-2023") {
        regions = {
            Tokyo: {
                bounds: [35.7690, 139.7332],
                markers: [
                    /* before leaving Tokyo initially */
                    { name: "Ueno", coordinates: [35.7138, 139.7770] },
                    { name: "Chiyoda", coordinates: [35.6938, 139.7530] },
                    { name: "Shinjuku", coordinates: [35.6938, 139.7036] },
                    { name: "Sumida", coordinates: [35.7101, 139.8016] },
                    { name: "Edogawa", coordinates: [35.7061, 139.8690] },
                    { name: "Shibuya", coordinates: [35.6595, 139.7005] },
                    { name: "Saitama", coordinates: [35.8427, 139.6517] },

                    /* after */
                    { name: "Roppongi", coordinates: [35.6628, 139.7310] },
                    { name: "Koto", coordinates: [35.6684, 139.8175] },
                ],
                zoom: 10.8,
            },
            Kyoto: {
                bounds: [35.0116, 135.7681],
                markers: [
                    { name: "Gion", coordinates: [35.0035, 135.7750] },
                    { name: "Fukakusa", coordinates: [34.9644, 135.7701] },
                    { name: "Nijojocho", coordinates: [35.01419, 135.74967] },
                    { name: "Arashiyama", coordinates: [35.01521, 135.68269] },
                    { name: "Kinkakujicho", coordinates: [35.03256, 135.76269] },
                    { name: "Kiyomizu", coordinates: [34.9943, 135.7844] },
                ],
                zoom: 12,
            },
            Osaka: {
                bounds: [34.6937, 135.5023],
                markers: [
                    { name: "Osakajo", coordinates: [34.6857, 135.5216] },
                    { name: "Dotombori", coordinates: [34.6687, 135.5041] },
                ],
                zoom: 12,
            },
            Hiroshima: {
                bounds: [34.3853, 132.4553],
                markers: [
                    { name: "Motomachi", coordinates: [34.3997, 132.4597] },
                ],
                zoom: 12,
            },
            Miyajima: {
                bounds: [34.2955, 132.3197],
                markers: [
                    { name: "Miyajimacho", coordinates: [34.2981, 132.3210] },
                ],
                zoom: 14,
            },
        };

    }
    else if (name === "Japan-2024-25") {
        regions = {
            Tokyo: {
                bounds: [35.7138, 139.7770],
                markers: [
                    /* before leaving Tokyo initially */
                    { name: "Asakusa", coordinates: [35.7147, 139.7967] },
                    { name: "Yoyogi", coordinates: [35.671975, 139.697685] },
                    { name: "Ginza", coordinates: [35.671217, 139.765] },
                    { name: "Shinkoiwa", coordinates: [35.717, 139.867] },
                    { name: "Chiba", coordinates: [35.60472, 140.12333] },
                    { name: "Chuo", coordinates: [35.67057158, 139.77198757] },
                    { name: "Ikebokuro", coordinates: [35.7248, 139.7068] },
                    { name: "Ueno", coordinates: [35.7138, 139.7770] },
                    { name: "Chiyoda", coordinates: [35.6938, 139.7530] },
                    { name: "Shinjuku", coordinates: [35.6938, 139.7036] },
                    { name: "Sumida", coordinates: [35.7101, 139.8016] },
                    { name: "Edogawa", coordinates: [35.7061, 139.8690] },
                    { name: "Shibuya", coordinates: [35.6595, 139.7005] },

                    /* after */
                    { name: "Koto", coordinates: [35.6684, 139.8175] },
                ],
                zoom: 11,
            },
            Kyoto: {
                bounds: [35.0116, 135.7681],
                markers: [
                    { name: "Gion", coordinates: [35.0035, 135.7750] },
                    { name: "Fukakusa", coordinates: [34.9644, 135.7701] },
                    { name: "Arashiyama", coordinates: [35.01521, 135.68269] },
                    { name: "Kinkakujicho", coordinates: [35.03256, 135.76269] },
                    { name: "Kiyomizu", coordinates: [34.9943, 135.7844] },
                    { name: "Higashishiokojicho", coordinates: [34.987182, 135.758744] },
                    { name: "Kankobokocho", coordinates: [35.0035, 135.7681] },
                ],
                zoom: 12,
            },
            Osaka: {
                bounds: [34.6937, 135.5023],
                markers: [
                    { name: "Chayamachi", coordinates: [34.7099, 135.4992] },
                    { name: "Osakajo", coordinates: [34.6857, 135.5216] },
                    { name: "Dotombori", coordinates: [34.6687, 135.5041] },
                ],
                zoom: 12,
            },
            Nara: {
                bounds: [34.6851, 135.8048],
                markers: [
                    { name: "Noboriojicho", coordinates: [34.684151, 135.829941] },
                ],
                zoom: 12,
            },
            Kamakura: {
                bounds: [35.3167, 139.5500],
                markers: [
                    { name: "Hase", coordinates: [35.3075, 139.5264] },
                    { name: "Yuigahama", coordinates: [35.3050, 139.5407] },
                    { name: "Sakanoshita", coordinates: [35.3078, 139.5336] },
                ],
                zoom: 12,
            },
        };

    }

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
            <div style={{ position: 'relative', width: '100%', height: '100%' }} >
                <IoMdExit
                    onClick={onClose}
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
                    minZoom={region.zoom - 1}
                    maxZoom={region.zoom + 1}
                    dragging={false}
                    scrollWheelZoom={false}
                    doubleClickZoom={false}

                    touchZoom={false}
                    keyboard={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    />
                    {region.markers.map((marker, index) => (
                        marker.coordinates.length === 2 && (
                            <Marker
                                key={index}
                                position={marker.coordinates}
                                eventHandlers={{
                                    mouseover: (e) => {
                                        e.target.setZIndexOffset(1000);
                                        
                                        const tooltip = e.target.getTooltip();
                                        if (tooltip) {
                                            const el = tooltip.getElement();
                                            if (el) el.style.zIndex = 1001;
                                        }
                                    },
                                    mouseout: (e) => {
                                        e.target.setZIndexOffset(0);
                                        const tooltip = e.target.getTooltip();
                                        if (tooltip) {
                                            const el = tooltip.getElement();
                                            if (el) el.style.zIndex = '';
                                        }
                                    }
                                }}
                            >
                                <Tooltip
                                    direction="top"
                                    offset={[-15, -10]}
                                    permanent
                                    interactive 
                                >
                                    {marker.name}
                                </Tooltip>
                            </Marker>
                        )
                    ))}

                </MapContainer>
            </div>
        </div>
    );
}
