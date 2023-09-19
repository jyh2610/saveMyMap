"use client";
import { Map, MapMarker } from "react-kakao-maps-sdk";

function Kakao() {
  return (
    <Map center={{ lat: 33.5563, lng: 126.79581 }} style={{ width: "500px", height: "360px" }}>
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
        <div style={{ color: "#000" }}>Hello World!</div>
      </MapMarker>
    </Map>
  );
}

export default Kakao;
