import { Dimensions, StyleSheet } from "react-native";

export const stylesInfo = StyleSheet.create({
  background: {
    zIndex: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  contactMargin: {
    marginHorizontal: 15,
  },
  ComfortDisplay: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});


