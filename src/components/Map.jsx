import { MapContainer, GeoJSON } from 'react-leaflet';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { useParams } from 'react-router-dom';
import RegionMap from './RegionMap';
import { TileLayer } from 'react-leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

export default function JapanOnlyMap() {
    const { name } = useParams();

    const [japanData, setJapanData] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);

    let destinations = [];

    if (name === "Japan-2023") {
        destinations = [
            { name: "Tokyo", coordinates: [35.6895, 139.6917] },
            { name: "Kyoto", coordinates: [35.0116, 135.7681] },
            { name: "Osaka", coordinates: [34.6937, 135.5023] },
            { name: "Hiroshima", coordinates: [34.3853, 132.4553] },
            { name: "Miyajima", coordinates: [34.2955, 132.3197] }];
    }
    else if (name === "Japan-2024-25") {
        destinations = [
            { name: "Tokyo", coordinates: [35.6895, 139.6917] },
            { name: "Kyoto", coordinates: [35.0116, 135.7681] },
            { name: "Osaka", coordinates: [34.6937, 135.5023] },
            { name: "Nara", coordinates: [34.6851, 135.8048] },
            { name: "Kamakura", coordinates: [35.3167, 139.5500] }];
    }

    useEffect(() => {
        fetch(process.env.PUBLIC_URL + '/japan.geojson') // Place the file in /public
            .then((res) => res.json())
            .then((data) => setJapanData(data));
    }, []);

    const bounds = [
        [24.396308, 122.93457],
        [45.551483, 153.986672],
    ];

    return (
        <div id='map-container'>
            <MapContainer
                bounds={bounds}
                zoom={5}
                zoomControl={false}
                attributionControl={false}
                className='map'
                maxBounds={bounds}
                minZoom={4}
            >
                {japanData && (
                    <GeoJSON
                        data={japanData}
                        style={{
                            color: '#666666',
                            weight: 1.5,
                            fillColor: '#C3ECB2',
                            fillOpacity: 1,
                        }}
                    />
                )}

                {destinations.map(({ name, coordinates }) => (
                    <Marker
                        key={name}
                        position={coordinates}
                        eventHandlers={{
                            click: () => setSelectedCity(name),
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
                            {name}
                        </Tooltip>
                    </Marker>
                ))}


            </MapContainer>
            {selectedCity && (
                <RegionMap
                    cityName={selectedCity}
                    onClose={() => setSelectedCity(null)}
                    name={name}
                />
            )}
        </div>
    );
}
