import React, { useEffect, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import PhoneInput from "react-native-phone-number-input";

const Phone_Input = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const handleChangePhoneNumber = (number) => {
    setPhoneNumber(number);
  };

  const handleSelectCountry = (country) => {
    setCountryCode(country.callingCode[0]);
  };

  return (
    <View style={styles.container}>
      <PhoneInput
        defaultCode="ES"
        layout="first"
        onChangeText={handleChangePhoneNumber}
        // withDarkTheme
        withShadow
        // autoFocus
        // flagButtonStyle={{ marginLeft: 10 }}
        onSelectCountry={handleSelectCountry}
        containerStyle={styles.phoneInputContainer}
        textInputStyle={styles.phoneInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerRR: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  container: {
    // flex: 1,
    marginTop:20,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  label: {
    marginBottom: 10,
    fontSize: 16,
  },
  phoneInputContainer: {
    width: 300,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 5,
  },
  phoneInput: {
    fontSize: 16,
  },
  resultText: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default Phone_Input;
