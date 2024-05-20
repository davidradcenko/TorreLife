import {
  Button,
  ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { setMessage } from "src/slices/postsSlice";
import * as Animatable from "react-native-animatable";
import { useFonts } from "expo-font";
// import { RootState } from "src/store/store";
// const MyIcon = require("@assets/view1/image29.svg");
import MyIcon from "@assets/view1/image29.svg";
import { useEffect } from "react";
import { fetchUsers } from "src/slices/postsSlice";

function HomeScreen({ navigation }) {
  const [loaded] = useFonts({
    "Montserrat-ExtraBold": require("@assets/fonts/Montserrat-ExtraBold.ttf"),
  });

  return (
    <ImageBackground
      source={require("@assets/view1/background-sea.png")}
      style={styles.BackImage}
    >
      <SafeAreaView style={styles.AndroidSafeArea}>
        <MyIcon style={styles.turtle} />
        <View style={styles.label}>
          {loaded ? (
            <Animatable.Text
              animation="fadeInDown" // Выберите нужную анимацию, например, fadeIn, bounce, slideInDown и другие
              iterationCount={1} // Количество повторений
              duration={3000} // Продолжительность анимации в миллисекундах
            >
              <Text style={styles.textWrapper}>TorreLive</Text>
            </Animatable.Text>
          ) : null}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

export default HomeScreen;
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
