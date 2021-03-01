import React , {useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import './index.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const MapaFarmacia = (farmacia) => {

  farmacia = farmacia.farmacia;
  const mapContainerRef = useRef(null);

  useEffect(() => {
    
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [farmacia.longitudLocal, farmacia.latitudLocal ],
      zoom: 16,
      attributionControl: false
    });

    new mapboxgl.Marker()
    .setLngLat([farmacia.longitudLocal, farmacia.latitudLocal ])
    .addTo(map);

    // clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div className="map-container" ref={mapContainerRef} />;
}

export default MapaFarmacia;