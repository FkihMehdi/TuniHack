import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for missing marker icons
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Define a custom icon
const customIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41], // Default Leaflet size
  iconAnchor: [12, 41], // Adjust to position correctly
  popupAnchor: [1, -34],
});

const Map = () => {
  const position = [33.8869, 9.5375]; // Tunisia coordinates

  return (
    <MapContainer
      center={position}
      zoom={6}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>Welcome to Tunisia!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
