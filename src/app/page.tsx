import Kakao from "@/components/KakaoMap";

import Script from "next/script";

function Home() {
  const url = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_RESTKEY}&libraries=services,clusterer&autoload=false`;
  return (
    <>
      <Script src={url} defer />
      <Kakao />
    </>
  );
}

export default Home;
