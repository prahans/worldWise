import { useNavigate, useSearchParams } from 'react-router-dom';
import {MapContainer, TileLayer, Marker, Popup, useMap, useMapEvent} from "react-leaflet";
import styles from './Map.module.css'
import { useEffect, useState } from 'react';
import { useCities } from '../contexts/CitiesProvider';
import {useGeolocation} from '../hooks/geoLocation.js';
import Button from './Button.jsx';
import { useUrlPosition } from '../hooks/useUrlPosition.js';


function Map() {
    const {cities} = useCities();
    const [mapLat, mapLng] = useUrlPosition();
    const [mapPosition, setMapPosition] = useState([40,0]);

    const {isLoading: isLoadingPosition , position: geoLocationPosition, getPosition } = useGeolocation();

    useEffect(function(){
        if(mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    }, [mapLat, mapLng])

    useEffect(function(){
        if(geoLocationPosition) setMapPosition([geoLocationPosition.lat, geoLocationPosition.lng]);
    }, [geoLocationPosition])

    return (
        <div className={styles.mapContainer} >
            {!geoLocationPosition && <Button type="position" onClick={getPosition}>{isLoadingPosition ? "Loading..." : "Use your position"}</Button>}
            <MapContainer center={mapPosition} zoom={6} scrollWheelZoom={true} className={styles.map}>
            <TileLayer
               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
            />
            {cities.map(city => <Marker position={[city.position.lat, city.position.lng]} key={city.id}>
            <Popup>
              <span><img src={city.emoji} /></span>
              <span>{city.cityName}</span>
            </Popup>
           </Marker>)}
           <ChangeCenter position={mapPosition} />
           <DetectClick />
           </MapContainer>
        </div>
    )
}

function ChangeCenter({position}){
    const map = useMap();
    map.setView(position);
    return null;
}

function DetectClick(){
    const navigate = useNavigate();
    useMapEvent({
        click: (e) => {
            navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
        }
    })
}

export default Map
