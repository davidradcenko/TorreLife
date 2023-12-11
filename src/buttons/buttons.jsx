import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { BlobalyStyles } from "../styles/blobaly.style";

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

export const ButtonTail = ({ onPress, title, size, TypeOfIcon }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.appButtonContainer, { width: size },styles.buttonContainer]}
    activeOpacity={0.7}

  >
    <LinearGradient
      width={size}
      style={[styles.TailView, { width: size - 1 }]}
      colors={["#ACD3D2", "rgba(150, 255, 252, 0.00)"]}
    >
      {TypeOfIcon ? <TypeOfIcon style={styles.imageIcon} /> : null}
      <Text style={BlobalyStyles.text_Bold600_s16}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 10,
    overflow: 'hidden', // Обрезать дочерние элементы по границам родительского
  },
  appButtonContainer: {
    marginRight: 20,
    marginLeft: 20,
    marginTop: 16,
    borderWidth: 0.3,
    borderRadius: 20,
  },
  TailView: {
    borderRadius: 22,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  imageIcon: {
    width: 44,
    height: 44,
  },
});
