import {
  ImageBackground,
  Platform,
  SafeAreaView,
  SafeAreaViewBase,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { useFonts } from "expo-font";
import MyIcon from "./assets/view1/image29.svg";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "./src/nextpage";
import Profile, { HooksSample } from "./src/abs/testABS";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Montserrat-ExtraBold": require("./assets/fonts/Montserrat-ExtraBold.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Details"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        {/* <Stack.Screen name="Details" component={HooksSample} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  let n = setTimeout(() => cinsol(), 5000);
  function cinsol() {
    // alert('back number')
    // navigation.navigate('Details')
  }
  return (
    <ImageBackground
      source={require("./assets/view1/background-sea.png")}
      style={styles.BackImage}
    >
      <SafeAreaView style={styles.AndroidSafeArea}>
        <MyIcon style={styles.turtle} />
        <View style={styles.label}>
          <Text style={styles.textWrapper}>TorreLive</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  BackImage: {
    flex: 1,
  },
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  turtle: {
    position: "absolute",
    zIndex: 1,
    right: 50,
    top: 70,
    transform: [{ rotate: "-70deg" }],
  },
  crab: {
    padding: 10,
    position: "absolute",
    top: 0,
  },
  text: {
    fontSize: 15,
    fontWeight: "500",
  },
  label: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textWrapper: {
    width: "100%",
    textAlign: "center",
    color: "#016c80",
    fontFamily: "Montserrat-ExtraBold",
    fontSize: 48,
    textShadowColor: "#00000040",
    textShadowOffset: { width: 8, height: 4 },
    textShadowRadius: 9,
  },
});
