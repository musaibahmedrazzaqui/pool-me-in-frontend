import React from "react";
import { StyleSheet, View, Text } from "react-native";
import TomtomMaps from "react-native-tomtom-maps";
const ReferScreen = () => {
  return (
    <TomtomMaps
      onMapReady={() => alert("Map is ready!")}
      markers={[
        { lat: 40.9175, lng: 38.3927, label: "Giresun" },
        { lat: 40.9862, lng: 37.8797, label: "Ordu" },
      ]}
      mapZoom={15}
      mapCenter={{ lat: 40.9175, lng: 38.3927 }}
      mapOptions={{
        tilesType: "VECTOR",
        lang: "tr-TR",
        perspective: "3D",
      }}
      style={StyleSheet.absoluteFillObject}
    />
  );
};

export default ReferScreen;

const styles = StyleSheet.create({});
