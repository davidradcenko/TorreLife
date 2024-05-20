import { Dimensions, StyleSheet } from "react-native";

console.log(Dimensions.get('window').width,Dimensions.get('window').height)


export const stylesMapCity = StyleSheet.create({
  BackImage: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  Text_SemiBolt: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 16,
    color: "#333333",
  },
  item: {
    backgroundColor: "#d9dbda",
    width: "100%",
    flexDirection: "row",
    padding: 5,
    borderRadius:15,
  },
  title: {
    fontSize: 10,
    marginBottom: 5,
    color: "rgba(245, 3, 3, 1)",
    transform: [{rotate:'38.212deg'}],
    position: "absolute",
    left: 15,
    top: 3,
  },
  details:{
    marginLeft:20,
    color: "#333",
    paddingRight:5
  }
});
