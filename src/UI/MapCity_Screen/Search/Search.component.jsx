import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
  View,
} from "react-native";
import SearchBar from "./SearchBar.component";
import List from "./List.component";

export const SearchButton = ({mapViewRef,findLocations,inputRef,setQuery,query,dataResalte , markersRef, openModal}) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();




   // get data from the fake api endpoint
  //  useEffect(() => {
  //   const getData = async () => {
  //     const apiResponse = await fetch(
  //       "https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages"
  //     );
  //     const data = await apiResponse.json();
  //     setFakeData(data);
  //   };
  //   getData();
  // }, []);


  return (
    <View style={styles.root}>
      {/* {!clicked && <Text style={styles.title}>Programming Languages</Text>} */}
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
        inputRef={inputRef}
        findLocations={findLocations}
        setQuery={setQuery}
        query={query}
      />

      <List
        searchPhrase={searchPhrase}
        data={dataResalte}
        setClicked={setClicked}
        markersRef={markersRef}
        openModal={openModal}
        mapViewRef={mapViewRef}
      />
      
    </View>
  );
};
const styles = StyleSheet.create({
    root: {
        position:'absolute',
        top:-10,
        zIndex:1,
    //   justifyContent: "center",
      alignItems: "center",
      width:'100%'
    }
  });