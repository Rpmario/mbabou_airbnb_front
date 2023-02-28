import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const GoogleMap = ({ latitude, longitude }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyCqbU0clj-rSwIw2ucTDc-QHplxxvbxQ2Q",
      version: "weekly",
    });

    loader.load().then(() => {
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: latitude, lng: longitude },
        zoom: 16,
      });

      const marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
      });
    });
  }, []);

  return <div ref={mapRef} style={{ height: "500px" }}></div>;
};

export default GoogleMap;
