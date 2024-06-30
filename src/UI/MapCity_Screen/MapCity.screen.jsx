import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { stylesMapCity } from "./MapCyty.style";
import { BlobalyStyles } from "../../styles/blobaly.style";
import Iconburger from "@assets/icons/burger.svg";
import { MapComponent2 } from "./Map/Map2.component";
import { useNavigation } from "@react-navigation/native";
import GoBack from "@assets/icons/GoBackLeft.svg";

const MapCityScreen = () => {
  const navigationLink = useNavigation();
  const handelGoBack = () => {
    navigationLink.navigate("Details");
  };
  return (
    <ImageBackground
      style={stylesMapCity.BackImage}
      source={require("@assets/view2/background.jpg")}
    >
      {/* <ScrollView style={stylesMapCity.scrollView}> */}
        <SafeAreaView style={BlobalyStyles.AndroidSafeArea}>


          <View style={{ paddingTop: 22, display:'flex', width:'100%', height:75, flexDirection:'row',alignItems:'center', justifyContent:'space-between'}}>
            <TouchableOpacity style={{marginLeft:18,paddingBottom:20}} onPress={handelGoBack}>
              <GoBack />
            </TouchableOpacity>
            <Text style={[BlobalyStyles.textWrapper, { fontSize: 32, paddingBottom:10}]}>
              TorreLive
            </Text>
            <TouchableOpacity style={{marginRight:18}} onPress={() => {}}>
              <Iconburger style={{display:'none'}} />
            </TouchableOpacity>
           
          </View>

          {/* <MapComponent/> */}
          <MapComponent2/>

          
        </SafeAreaView>
      {/* </ScrollView> */}
    </ImageBackground>
  );
};

export default MapCityScreen;
