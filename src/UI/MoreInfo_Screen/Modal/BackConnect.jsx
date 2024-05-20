import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  Pressable,
} from "react-native";

import IconClose from "@assets/icons/close.svg";
import Phone_Input from "./Phone_Input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { BlobalyStyles } from "../../../styles/blobaly.style";

import PhoneActive from "@assets/contact/BackConnect/PhoneActive.svg";
import PhoneNoActive from "@assets/contact/BackConnect/PhoneNoActive.svg";
import TelegramActive from "@assets/contact/BackConnect/TelegramActive.svg";
import TelegramNoActive from "@assets/contact/BackConnect/TelegramNoActive.svg";
import ViberActive from "@assets/contact/BackConnect/ViberActive.svg";
import ViberNoActive from "@assets/contact/BackConnect/ViberNoActive.svg";
import WhatsAppActive from "@assets/contact/BackConnect/WhatsAppActive.svg";
import WhatsAppNoActive from "@assets/contact/BackConnect/WhatsAppNoActive.svg";
import { ButtonTail } from "../../Buttons/buttons";

export const SlidingModal = ({ visible, onClose }) => {
  const [animatedValue] = useState(new Animated.Value(0));

  const [Phone, setPhone] = useState(false);
  const [Telegram, setPTelegram] = useState(false);
  const [Viber, setViber] = useState(false);
  const [WhatsApp, setWhatsApp] = useState(false);

  const slideIn = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const slideOut = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start(onClose);
  };

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [300, 0],
  });

  const [keyboardStatus, setKeyboardStatus] = useState();
  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  return (
    <ScrollView>
      <Animated.View style={[{ transform: [{ translateY }] }]}>
        <Modal
          statusBarTranslucent
          transparent
          visible={visible}
          animationType="slide"
          onRequestClose={slideOut}
        >
          <View style={styles.modalContainer}>
            <View
              style={
                keyboardStatus
                  ? styles.modalContent_Active
                  : styles.modalContent_NoActive
              }
            >
              {/* Close Model Icon */}
              <TouchableOpacity style={styles.InputClose} onPress={slideOut}>
                <IconClose />
              </TouchableOpacity>

              {/* Content Model */}
              <Text
                style={[
                  { textAlign: "center" },
                  BlobalyStyles.text_Bold600_s16,
                ]}
              >
                Оставьте свой номер телефона и с вами свяжется владелиц
              </Text>

              <Phone_Input />

              <Text
                style={[
                  { textAlign: "center", marginTop: 20 },
                  BlobalyStyles.text_Bold600_s16,
                ]}
              >
                Выбирите, как с вами связаться
              </Text>

              {/* Icon connect */}
              <View style={styles.BackConnectIcon}>
                <Pressable onPress={() => setPhone(!Phone)}>
                  {Phone ? <PhoneActive /> : <PhoneNoActive />}
                </Pressable>
                <Pressable onPress={() => setPTelegram(!Telegram)}>
                  {Telegram ? <TelegramActive /> : <TelegramNoActive />}
                </Pressable>
                <Pressable onPress={() => setViber(!Viber)}>
                  {Viber ? <ViberActive /> : <ViberNoActive />}
                </Pressable>
                <Pressable onPress={() => setWhatsApp(!WhatsApp)}>
                  {WhatsApp ? <WhatsAppActive /> : <WhatsAppNoActive />}
                </Pressable>
              </View>

              <ButtonTail
                title={"Записаться"}
                size={275}
                ButtonHeight={45}
              />
            </View>
          </View>
        </Modal>
      </Animated.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Затемнение фона
  },
  InputClose: {
    position: "absolute",
    right: 0,
    top: -20,
  },
  BackConnectIcon: {
    marginTop: 20,
    flexDirection: "row",
    width: 300,
    alignItems: "center",
    justifyContent: "space-around",
  },
  modalContent_NoActive: {
    // position: "absolute",
    // bottom: 240,
    width: "100%",
    height: 340,
    backgroundColor: "white",
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent_Active: {
    position: "absolute",
    bottom: 240,
    width: "100%",
    height: 340,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
