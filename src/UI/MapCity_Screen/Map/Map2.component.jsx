import React, { Component, useRef, useState } from "react";
import {
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MapViewComponent } from "./MapView.component";
import { MapAnimatable } from "./MapAnimatable.component";
import { SearchButton } from "../Search/Search.component";
import { GestureHandlerRootView  } from "react-native-gesture-handler";
import { locations } from "../../../api/initialData";
import SetMyLocationImg from "@assets/icons/SetMyLocation.svg";

import { getLocation } from "./Get_Current_User_Location";

export const MapComponent2 = () => {
  // for map
  const mapViewRef = useRef(null);
  const markersRef = useRef({});
  const inputRef = useRef(null);

  //  Modal view
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  //   search input
  const [query, setQuery] = useState("");
  const [fakeData, setFakeData] = useState();
  // set current user location
  const [currentUserLocation, setCurentLocationUser] = useState({
    coords: { latitude: null, longitude: null },
  });

  // show user location function
  const showUserCurrentLocation = async () => {
    const resivedLocation = await getLocation();
    setCurentLocationUser({
      coords: {
        latitude: resivedLocation.coords.latitude,
        longitude: resivedLocation.coords.longitude,
      },
    });
    const marker = markersRef.current[-1];
    if (marker) {
      mapViewRef.current?.animateToRegion({
        latitude: currentUserLocation.coords.latitude,
        longitude: currentUserLocation.coords.longitude,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0221,
      });
    }
  };

  //  Modal view
  const openModal = (location) => {
    setSelectedLocation(location);
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  //   search input
  const findLocations = (text) => {
    if (text === "") {
      setQuery(text);
      setFakeData("");
      return [];
    }

    const filteredLocations = locations
      .map((location) => {
        const matchingTags = location.tags
          .filter((tag) => tag.toLowerCase().includes(text.toLowerCase()))
          .slice(0, 4) // Ограничиваем количество совпадающих тэгов до 4
          .map((tag) => ` · ${tag}`) // Добавляем точку перед каждым тэгом и пробел после
          .join("");

        return { ...location, matchingTags };
      })
      .sort((a, b) => {
        // Сортируем локации по убыванию количества совпадающих тэгов
        return b.matchingTags.length - a.matchingTags.length;
      })
      .filter((locations) => locations.matchingTags.length > 0);

    setQuery(text);
    Object.keys(filteredLocations).length !== 0
      ? setFakeData(filteredLocations)
      : setFakeData("");

    console.log(filteredLocations);
    return filteredLocations;
  };

  // refresh blur
  const handlePressOutside = () => {
    // Сбрасываем фокус при нажатии вне компонента
    inputRef.current.blur();
  };

  return (
    <View style={styles.conteiner}>
      <SearchButton
        mapViewRef={mapViewRef}
        openModal={openModal}
        markersRef={markersRef}
        dataResalte={fakeData}
        query={query}
        findLocations={findLocations}
        setQuery={setQuery}
        inputRef={inputRef}
      />
      
      
        {/* <TouchableWithoutFeedback onPress={handlePressOutside}> */}
          <MapViewComponent
            handlePressOutside={handlePressOutside}
            mapViewRef={mapViewRef}
            locations={locations}
            markersRef={markersRef}
            openModal={openModal}
            Currentlocation={currentUserLocation}
          />
        {/* </TouchableWithoutFeedback> */}
        {/* <GestureHasndlerRootView > */}
        <View
          style={{
            position: "absolute",
            top: "50px",
            right: 0,
            backgroundColor: "white",
            width: 50,
            height: 50,
            borderRadius: 100,
             zIndex: 1000,
            borderWidth: 0.3,
            borderColor: "#0AC8BE",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity onPress={() => showUserCurrentLocation()}>
            <SetMyLocationImg />
          </TouchableOpacity>
        </View>

        {/* <MapAnimatable
          isModalVisible={isModalVisible}
          selectedLocation={selectedLocation}
          closeModal={closeModal}
        /> */}
      {/* </GestureHandlerRootView> */}
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    border: 1
  },
  map: {
    flex: 1,
  },
});

// //       let status = 'null'
// //       if (Platform.OS === 'ios') {
// //         status = await Geolocation.requestAuthorization();
// //         Geolocation.setRNConfiguration({
// //           skipPermissionRequests: false,
// //          authorizationLevel: 'whenInUse',
// //        });
// //       }

// //       if (Platform.OS === 'android') {
// //         status = await await PermissionsAndroid.request(
// //           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
// //         );
// //       }
// // console.log('status = '+status)

//     // try {

//     //   if (Platform.OS === 'android') {
//     //     await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,) // Для Android
//     //   }
//     //   if (Platform.OS === 'ios') {
//     //     await Geolocation.requestAuthorization('whenInUse'); // Для iOS
//     //   }

//     //   // Получение текущего местоположения
//     //   const currentLocation = await Geolocation.getCurrentPosition(
//     //     (position) => {
//     //       const { latitude, longitude } = position.coords;
//     //       console.log( "latitude "+latitude +  "longitude "+ longitude );
//     //     },
//     //     (error) => {
//     //       console.error('Error getting location:', error);

//     //     },
//     //     { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     //   );
//     // } catch (error) {
//     //   console.error('Error requesting location permission:', error);
//     // }

//     // let { status } = await LocationUser.requestForegroundPermissionsAsync()
//     // // console.log("status = " + status);
//     try {
//       //   if (Platform.OS === 'android') {
//       //     // Запрос разрешения на использование геолокации для Android
//       //     const granted = await PermissionsAndroid.request(
//       //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
//       //     );
//       //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       //       // Разрешение получено, теперь можно получить текущее местоположение
//       //       const currentLocation = await Geolocation.getCurrentPosition(
//       //         (position) => {
//       //           const { latitude, longitude } = position.coords;
//       //           console.log('Latitude:', latitude, 'Longitude:', longitude);
//       //         },
//       //         (error) => {
//       //           console.error('Error getting location:', error);
//       //         },
//       //         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//       //       );
//       //     } else {
//       //       console.log('Location permission denied.');
//       //     }
//       //   }

//         // if (Platform.OS === 'ios') {
//         //   // Запрос разрешения на использование геолокации для iOS
//         //   await Geolocation.requestAuthorization('whenInUse');

//         //   // Теперь можно получить текущее местоположение
//         //   const currentLocation = await Geolocation.getCurrentPosition(
//         //     (position) => {
//         //       const { latitude, longitude } = position.coords;
//         //       console.log('Latitude:', latitude, 'Longitude:', longitude);
//         //     },
//         //     (error) => {
//         //       console.error('Error getting location:', error);
//         //     },
//         //     { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//         //   );
//         // }

//       let { status } = await LocationUser.requestForegroundPermissionsAsync()
//       console.log("status = " + status);

//       if (status !== "granted") {
//         console.log("Permission to access location was denied");
//         return;
//       }

//         // Разрешение получено, теперь можно получить текущее местоположение
//         // const currentLocation = await Geolocation.getCurrentPosition(
//         Geolocation.getCurrentPosition(
//           position => {
//             const { latitude, longitude } = position.coords;
//             console.log('Latitude:', latitude, 'Longitude:', longitude);
//           },
//           error => {
//             console.error('Error getting location:', error);
//           },
//           {})

//         // if(takeLocal?.coords == undefined) takeLocal = getlocalint()

//         // console.log("Approved!"+takeLocal.coords.latitude);
//         // setCurentLocationUser(takeLocal);

//       } catch (error) {
//         console.error('Error requesting location permission:', error);
//       }
