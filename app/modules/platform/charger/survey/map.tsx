"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
// import { useQuery } from "@tanstack/react-query";
// import { getChargerSurvey } from "@/service/charger/chargerSurveyCallAPI";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// const MapContainer = dynamic(
//   () => import("react-leaflet").then((mod) => mod.MapContainer),
//   { ssr: false }
// );
// const TileLayer = dynamic(
//   () => import("react-leaflet").then((mod) => mod.TileLayer),
//   { ssr: false }
// );
// const Marker = dynamic(
//   () => import("react-leaflet").then((mod) => mod.Marker),
//   { ssr: false }
// );
// const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
//   ssr: false,
// });
const Maps = ({ surveyLocations }: any) => {


  // const surveyLocations = locationServey?.data?.rows.map((item: any) => {
  //   return [
  //     {
  //       name: item.pjth,
  //       lat: item.latitude.split(",")[0],
  //       lng: item.longitude.split(",")[1],
  //     },
  //   ];
  // });
  console.log("maps", surveyLocations);
  // const surveyLocations = [
  //   { name: "Site A", lat: 13.7563, lng: 100.5018 },
  //   { name: "Site B", lat: 13.7469, lng: 100.5386 },
  //   { name: "Site C", lat: 13.7279, lng: 100.5247 },
  // ];
  useEffect(() => {
    // เช็คว่ากำลังทำงานบน client
    if (typeof window !== "undefined") {
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png",
        iconUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
      });
    }
  }, []);

  return (
    <>
      <MapContainer
        center={[13.7563, 100.5018]}
        zoom={12}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {surveyLocations?.map((location: any, index: any) => (
          <Marker key={index} position={[location?.lat, location?.lng]}>
            <Popup>{location?.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default Maps;
