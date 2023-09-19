import Kakao from "@/components/KakaoMap";
import Script from "next/script";
import { Map, MapMarker } from "react-kakao-maps-sdk";
function Home() {
  const url = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_RESTKEY}&libraries=services,clusterer&autoload=false`;
  return (
    <>
      <Script src={url} async />
      <Kakao />
      <Map center={{ lat: 33.5563, lng: 126.79581 }} style={{ width: "100%", height: "360px" }}>
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
          <div style={{ color: "#000" }}>Hello World!</div>
        </MapMarker>
      </Map>
    </>
  );
}

export default Home;
