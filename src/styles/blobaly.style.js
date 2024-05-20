import { StyleSheet,Platform } from "react-native";

export const BlobalyStyles = StyleSheet.create({

text_Bold600_s16:{
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16, 
    color: '#14213D'
},
text_Bold600_s11:{
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 11, 
    color: '#F50303'
},
text_Bold500_s11:{
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 11, 
    color: '#14213D'
},
text_BoldReal500_s12:{
    fontFamily: 'Montserrat-Medium',
    fontSize: 12, 
    color: '#14213D'
},
AndroidSafeArea:{
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
},
textWrapper: {
    // width: "100%", 
    // textAlign: "center",
    color: "#A7D1D0",
    fontFamily: "Montserrat-ExtraBold",
    // fontSize: 48,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  }
})


