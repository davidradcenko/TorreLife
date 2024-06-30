import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import {
  ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import Toast from "react-native-toast-message";
import MapCityScreen from "src/UI/MapCity_Screen/MapCity.screen";
import Info from "src/UI/MoreInfo_Screen/Info.screen";
import OtherInfo from "src/UI/OtherInfo_Screen/OtherInfo.screen";

import DetailsScreen from "./src/UI/Menu_Screen/Menu.component";
import { store } from "src/store/store";
import { Provider } from "react-redux";
import HomeScreen from "src/UI/Home_Screen/Home.screen";
import { useDispatch } from "react-redux";
import { fetchUsers } from "src/slices/locationsSlice";

const Stack = createNativeStackNavigator();

export default function App() {
  console.log("App has been reload");
  return (
    <Provider store={store}>
      <TorreLifeApp />
    </Provider>
  );
}

export const TorreLifeApp = () => {
  const [isReady, setIsReady] = useState(false);
  const dispatch = useDispatch();

  console.log("TorreLifeApp has been reload");

  const [fontsLoaded] = useFonts({
    "Montserrat-ExtraBold": require("./assets/fonts/Montserrat-ExtraBold.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
  });

  useEffect(() => {
    console.log("TorreLifeApp useEffect");
    dispatch(fetchUsers());
    async function prepareApp() {
      let n = setTimeout(() => cinsol(), 5000);
      function cinsol() {
        setIsReady(true);
      }
    }

    if (fontsLoaded) {
      prepareApp();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded || !isReady) {
    return <HomeScreen />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Details"
      >
        {/* Previos loading screen ToreLive */}
        <Stack.Screen name="Home" component={HomeScreen} />

        {/* Main menu wis navigation */}
        <Stack.Screen name="Details" component={DetailsScreen} />

        {/* Click more info about location or post */}
        <Stack.Screen name="Info" component={Info} />

        {/* List of posts */}
        <Stack.Screen name="OtherInfo" component={OtherInfo} />

        {/* Map wis locations */}
        <Stack.Screen name="MapCityScreen" component={MapCityScreen} />




        {/* <Stack.Screen name="Details" component={Test} /> */}
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
};
