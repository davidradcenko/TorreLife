import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, TouchableOpacity, Text, Image, View } from "react-native";
import { BlobalyStyles } from "../../styles/blobaly.style";
import ShadowGenerator from "react-native-shadow-generator";
TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

export const ButtonTail = ({ onPress, title, size, TypeOfIcon,ButtonHeight }) => (
  // <ShadowGenerator style={styles.container}>
  <TouchableOpacity
    onPress={onPress}
    style={[styles.appButtonContainer, { width: size + 0.6, height:ButtonHeight+ 0.6 },styles.buttonContainer]}
    activeOpacity={0.7}
    delayPressIn={50}
    delayPressOut={50}
  >
    <LinearGradient
      width={size}
      height={ButtonHeight}
      style={[styles.TailView]}
      colors={["#ACD3D2", "rgba(150, 255, 252, 1)"]}
    >
      {TypeOfIcon ? <TypeOfIcon style={styles.imageIcon} /> : null}
      <Text style={BlobalyStyles.text_Bold600_s16}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
  // </ShadowGenerator>
);

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor:"rgba(0, 0, 0, 0.20)",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  appButtonContainer: {
    marginRight: 20,
    marginLeft: 20,
    marginTop: 16,
    // borderWidth: 0.3,
    borderRadius: 20,
  },
  TailView: {
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  imageIcon: {
    width: 44,
    height: 44,
  },
});
