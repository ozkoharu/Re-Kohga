import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLng } from "leaflet";



//LocationPolylineを入れると動かなくなるらしい
const position = new LatLng(38.72311671577611, 141.0346841825174);
const zoomlebel = 18;
interface Props {
    children?: React.ReactNode,
}


const Map: React.FC<Props> = ({
    children,
}) => {
    return (
        <MapContainer center={position} zoom={zoomlebel} >

            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {children}
        </MapContainer>
    )
}
export default Map;