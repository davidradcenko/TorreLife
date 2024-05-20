import {
  Image,
  Text,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { View } from "react-native-animatable";

import LocationSVG from "@assets/icons/map_location_icon_158311.svg";

import Sport from "@assets/icons/Location_Categories/Sport.svg";
import Student from "@assets/icons/Location_Categories/Student.svg";
import Party from "@assets/icons/Location_Categories/Party.svg";
import Question from "@assets/icons/Location_Categories/Question.svg";
import React, { useCallback, useEffect, useMemo, useState } from "react";

import * as LocationUser from "expo-location";
import { locations } from "../../../api/initialData";

const ListOfIcons = [];
mapStyle = [
  {
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.neighborhood",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
];

export const MapViewComponent = ({
  handlePressOutside,
  mapViewRef,
  locations,
  markersRef,
  openModal,
  Currentlocation
}) => {
  const size = useWindowDimensions();
  const height = size.height;


  const defaultLocation = {
    latitude: 37.9838,
    longitude: -0.6746,
  };

  const memoizedOpenModel = useCallback(
    (item) => {
      openModal(item);
    },
    [openModal]
  );


  // console.log("__________________________________________________MapView");
  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
      <MapView
        style={{ width: "100%", height: height - 100 }}
        ref={mapViewRef}
        // customMapStyle={mapStyle}
        initialRegion={{
          latitude: defaultLocation.latitude,
          longitude: defaultLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {locations.map((item) => (
          <Marker
            key={item.id}
            ref={(ref) => (markersRef.current[item.id] = ref)}
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
            title={item.title}
            description={item.type_location}
            onPress={() => memoizedOpenModel(item)}
          >
            <View>
              <LocationSVG
                style={{ width: 35, height: 35, color: "#016c80" }}
              />
              <Question
                style={{
                  position: "absolute",
                  zIndex: 1,
                  top: 6,
                  left: 8,
                }}
              />
            </View>
          </Marker>
        ))}
        {Currentlocation?.coords.latitude !==null ? (
          <Marker
          style={{zIndex:10}}
            key={-1}
            ref={(ref) => (markersRef.current[-1] = ref)}
            coordinate={{
              latitude: Currentlocation.coords.latitude,
              longitude: Currentlocation.coords.longitude,
            }}
            title="Your Location"
          />
        ) : null}

        

      </MapView>
    </TouchableWithoutFeedback>
  );
};
