import * as React from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Linking,
} from "react-native";
import { styles } from "./styles/nextpage.style";
import { ButtonTail } from "./buttons/buttons";

import discountIcon from "../assets/view2/discount.svg";
import mapIcon from "../assets/view2/map.svg";
import taxiIcon from "../assets/view2/taxi.svg";
import vacansiaIcon from "../assets/view2/vacansia.svg";
import voiceIcon from "../assets/view2/voice.svg";
import { BlobalyStyles } from "./styles/blobaly.style";
import { AbsTails } from "./abs/absTails";

import WhatSup from "../assets/contact/WhatsApp.svg";
import Telegramm from "../assets/contact/TelegramApp.svg";
import Toast from "react-native-toast-message";

import * as Clipboard from "expo-clipboard";

function DetailsScreen({ navigation }) {
  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Hello",
      text2: "This is some something 👋",
    });
  };

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync("+1 111 111 1111");
    // setCopiedText('+1 111 111 1111');
    showToast();
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setCopiedText(text);
  };

  const openTelegram = () => {
    const telegramUsername = "DavidRadchenko";
    Linking.openURL(`tg://resolve?domain=${telegramUsername}`);
  };
  const openWhatsApp = () => {
    const WhatAppUsername = "+34691624964";
    Linking.openURL(`whatsapp://send?phone=${WhatAppUsername}`);
  };

  return (
    <ImageBackground
      style={styles.BackImage}
      source={require("../assets/view2/background.jpg")}
    >
      <ScrollView style={styles.scrollView}>
        <SafeAreaView style={styles.AndroidSafeArea}>
          {/* Heder */}
          <View style={{ paddingTop: 29 }}>
            <Text style={styles.textWrapper}>TorreLive</Text>
          </View>
          {/* Tails */}
          <View style={styles.mainTails}>
            <View style={styles.TailsLittle}>
              <ButtonTail
                size={140}
                title="Вакансии"
                TypeOfIcon={vacansiaIcon}
              />
              <ButtonTail size={140} title="Скидки" TypeOfIcon={discountIcon} />
            </View>
            <View style={styles.TailsLittle}>
              <ButtonTail size={140} title="Такси" TypeOfIcon={taxiIcon} />
              <ButtonTail size={140} title="События" TypeOfIcon={voiceIcon} />
            </View>
            <View style={styles.TailsLittle}>
              <ButtonTail
                size={300}
                title="Наши умельцы"
                TypeOfIcon={mapIcon}
              />
            </View>
          </View>
          {/* ABS */}

          <AbsTails />

          <View style={[styles.contact, BlobalyStyles.text_Bold600_s16]}>
            <Text style={[BlobalyStyles.text_Bold600_s16, { fontSize: 13 }]}>
              Связаться с нами
            </Text>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
                marginBottom: 5,
              }}
            >
              <TouchableOpacity onPress={copyToClipboard}>
                <Text
                  selectable={true}
                  style={[BlobalyStyles.text_Bold600_s16]}
                >
                  +1 111 111 1111 (с 8:00 - 15:00)
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{ marginTop: 5, marginBottom: 10, flexDirection: "row" }}
            >
              <TouchableOpacity
                onPress={openWhatsApp}
                activeOpacity={0.7}
                style={styles.buttonContainer}
              >
                <WhatSup style={{ width: 25, height: 25, marginRight: 70 }} />
              </TouchableOpacity>

              <TouchableOpacity onPress={openTelegram}>
                <Telegramm style={{ width: 35, height: 25 }} />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </ImageBackground>
  );
}

export default DetailsScreen;

{
  /* <View style={{position:'absolute',backgroundColor:'black',top:0,width:2,height:214,zIndex: 1}}></View>  */
}
