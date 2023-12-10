import * as React from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
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

function DetailsScreen({ navigation }) {
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
            <Text style={BlobalyStyles.text_Bold600_s16}>
              torrelive.gp@gmail.com
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
             
                <View>
                  <Text
                    selectable={true}
                    style={[BlobalyStyles.text_Bold600_s16]}
                  >
                    +1 111 111 1111 (с 8:00 - 15:00)
                  </Text>
                </View>
              

              <WhatSup />
              <Telegramm />
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
