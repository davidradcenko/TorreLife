import { View } from "react-native";
import MapView from "react-native-maps";

export const Test = () => {
  return (
    <View>
      <MapView
        style={{ width: "100%", height: "100%" }}
        // ref={mapViewRef}
        // customMapStyle={mapStyle}
        scrollEnabled={true}
       
      ></MapView>
    </View>
  );
};
