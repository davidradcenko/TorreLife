// List.js
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { stylesMapCity } from "../MapCyty.style";
import { BlobalyStyles } from "../../../styles/blobaly.style";

import MapIcon from "@assets/icons/Map.svg"
// definition of the Item, which will be rendered in the FlatList

const List = ({ searchPhrase, setClicked, data,markersRef,openModal,mapViewRef }) => {
  const Item = ({ discount, Tags, model }) => (
    <TouchableOpacity
      onPress={() => {
        console.log("Click")
        openModal(model);
        const marker = markersRef.current[model.id];
        if (marker) {
          mapViewRef.current?.animateToRegion({
            latitude: model.latitude,
            longitude: model.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
          marker.showCallout();
        }
      }}
    >
      <View style={stylesMapCity.item}>
      <MapIcon/>
        <Text style={[BlobalyStyles.text_Bold600_s16,stylesMapCity.title]}>{discount}</Text>
        <Text style={[BlobalyStyles.text_Bold600_s16,stylesMapCity.details]}>{Tags}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    if (!data) {
      return ;
    }
    if (data) {
      return <Item discount={item.discount} Tags={item.matchingTags} model={item} />;
    }
    
  };
 
  return (
    <View
      onStartShouldSetResponder={() => {
        setClicked(false);
      }}
      style={data ? styles.list__container : styles.list__empty }
    >
      <FlatList
      keyboardShouldPersistTaps = "always"
        data={data}
        style={{ borderRadius:15}}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    flexDirection:'column',
    elevation: 14,
    width: "90%",
    borderWidth: 0.3,
    borderColor:'#0AC8BE',
    top:0,
    borderRadius:15,
    height:150,
    backgroundColor: "#d9dbda",
  },
  list__empty:{
    borderWidth: 0,
  },
  
});
