import { Marker, useMapEvents, MapContainer, TileLayer, Popup } from "react-leaflet";
import React, { useState, useContext } from "react";
import { LocationPoint } from "../../pages/MapPage/Destination";
import { LatLng } from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';  //marker壊れたの直すよう
import markerIcon from "leaflet/dist/images/marker-icon.png";   //marker壊れたの直すよう
import markerShadow from 'leaflet/dist/images/marker-shadow.png';   //marker壊れたの直すよう
import L from 'leaflet';
import { BaseButton } from "../atoms/button/baseButton";
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src,
});

const position = new LatLng(38.72311671577611, 141.0346841825174);
const zoomlebel = 18;


const ClickMarker = () => {
    const { point, setPoint } = useContext(LocationPoint);
    const map = useMapEvents({
        click(e) {
            setPoint((prevValues) => {
                const newValue = [...prevValues, e.latlng];
                console.log('newValue', newValue);
                return newValue
            });
        }
    })
    return (
        <React.Fragment>
            {point.map((point, index) => <Marker position={point} key={index}></Marker>)}
        </React.Fragment>
    )
}

const DestinationLook = () => {

    return (
        <MapContainer center={position} zoom={zoomlebel} >

            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ClickMarker />
        </MapContainer>
    )
}
export default DestinationLook;
