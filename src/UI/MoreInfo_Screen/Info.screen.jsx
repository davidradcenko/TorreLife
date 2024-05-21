import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import { stylesInfo } from "./Info.styles";
import { View } from "react-native-animatable";
import Swiper from "react-native-swiper";
import { BlobalyStyles } from "../../styles/blobaly.style";

import GoBack from "@assets/icons/GoBack.svg";
import IconLocation from "@assets/icons/Info_Screen/Location.svg";
import IconMap from "@assets/icons/Info_Screen/GoogleMapsOld.svg";
import IconAcesst from "@assets/icons/Info_Screen/PocketWatch.svg";

import IconWWW from "@assets/contact/Website.svg";
import IconFaceBook from "@assets/contact/Facebook.svg";
import IconWhatSup from "@assets/contact/WhatsApp.svg";
import IconInstagram from "@assets/contact/Instagram.svg";
import IconTelegram from "@assets/contact/TelegramApp.svg";

import IconSportTest from "@assets/view2/4723250.jpg";

import IconBottleofWater from "@assets/comfort/BottleofWater.svg";
import IconParking from "@assets/comfort/Parking.svg";
import IconShower from "@assets/comfort/Shower.svg";
import IconTowel from "@assets/comfort/Towel.svg";
import { ButtonTail } from "../Buttons/buttons";
import { SlidingModal } from "./Modal/BackConnect";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";

const Info = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const [blinkAnimation] = useState(new Animated.Value(1));
  const [bounceAnimation] = useState(new Animated.Value(0));

  const navigationLink = useNavigation();
  const handelGoBack = () => {
    navigationLink.navigate("Details");
  };
  useEffect(() => {
    const blink = Animated.loop(
      Animated.sequence([
        Animated.timing(blinkAnimation, {
          toValue: 1000,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(blinkAnimation, {
          toValue: 1,
          duration: 1400,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    );

    const bounce = Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnimation, {
          toValue: 1,
          duration: 600,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnimation, {
          toValue: 0,
          duration: 600,
          easing: Easing.in(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    );

    blink.start();
    bounce.start();

    return () => {
      blink.stop();
      bounce.stop();
    };
  }, [blinkAnimation, bounceAnimation]);
  return (
    <ImageBackground
      style={[stylesInfo.background, { flex: 1 }]}
      source={require("@assets/view2/background.jpg")}
    >
      <View
        style={{ position: "absolute", top: 30, left: 15, zIndex: 2 }}
        
      >
        <Animated.View
          style={[
            styles.blinkingElement,
            {
              opacity: blinkAnimation,
              transform: [
                {
                  translateX: bounceAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -10], // Регулируйте высоту подпрыгивания
                  }),
                },
              ],
            },
          ]}
        >
          <GoBack onPress={handelGoBack} />
        </Animated.View>
      </View>

      <ScrollView>
        {/* swiper */}
        <View style={{ width: "100%", height: 300 }}>
          <Swiper
            // width={'100%'}
            // height={"100%"}
            showsPagination={true}
            autoplay={false}
            // loop={false}

            //  showsPagination={false}
            renderPagination={renderPagination}
          >
            <InfoSlider />
            <InfoSlider />
          </Swiper>
        </View>

        {/* button go back */}
        <View style={{ paddingHorizontal: 15, marginTop: 20 }}>
          {/* Main image */}
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Image
              style={{ width: 70, height: 60, borderRadius: 10 }}
              source={IconSportTest}
            />
            <Text style={[{ marginLeft: 10 }, BlobalyStyles.text_Bold600_s16]}>
              Outlet El Corte Inglés
            </Text>
          </View>
          {/* info */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text>
              <IconLocation /> Юбилейная Улица 30, Москва
            </Text>
            <IconMap />
          </View>

          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <IconAcesst />
            <Text  style={{ marginLeft: 5 }}>Приём по записи</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <IconWWW style={stylesInfo.contactMargin} />
            <IconFaceBook style={stylesInfo.contactMargin} />
            <IconWhatSup
              style={[{ width: 28, height: 28 }, stylesInfo.contactMargin]}
            />
            <IconInstagram
              style={[{ width: 28, height: 28 }, stylesInfo.contactMargin]}
            />
            <IconTelegram
              style={[{ width: 28, height: 28 }, stylesInfo.contactMargin]}
            />
          </View>

          <View style={{ marginTop: 30, alignItems: "center" }}>
            <View
              style={{ width: 300, height: 1, backgroundColor: "black" }}
            ></View>
          </View>
        </View>
        {/* About Info */}
        <View style={{ marginTop: 20, paddingHorizontal: 15 }}>
          <Text style={BlobalyStyles.text_Bold600_s16}>О нас</Text>
          <Text
            style={[
              BlobalyStyles.text_BoldReal500_s12,
              { marginTop: 5, fontSize: 14 },
            ]}
          >
            {" "}
            Estuve hoy en la tienda outlet del Corte Inglés en Torrevieja, y no
            tengo queja ninguna de la Estuve hoy en la tienda outlet del Corte
            Inglés en Torrevieja, y no tengo queja ninguna de la tienda outlet
            del Corte In tien
          </Text>
          <Text style={[BlobalyStyles.text_Bold600_s16, { marginTop: 15 }]}>
            Примечание
          </Text>
          <Text
            style={[
              BlobalyStyles.text_BoldReal500_s12,
              { marginTop: 5, fontSize: 14 },
            ]}
          >
            {" "}
            Estuve hoy en la tienda outlet del Corte Inglés en Torrevieja, y no
            tengo queja ninguna de la Estuve hoy en la tienda outlet del Corte
            Inglés en Torrevieja, y no tengo queja ninguna de la tienda outlet
            del Corte In tien
          </Text>

          <View style={{ marginTop: 30, alignItems: "center" }}>
            <View
              style={{ width: 300, height: 1, backgroundColor: "black" }}
            ></View>
          </View>
        </View>

        {/* Comfort */}
        <View style={{ marginTop: 20, paddingHorizontal: 15 }}>
          <Text style={BlobalyStyles.text_Bold600_s16}>Удобство</Text>
          {/* line 1 */}
          <View style={stylesInfo.ComfortDisplay}>
            <View style={[stylesInfo.ComfortDisplay, { marginRight: 50 }]}>
              <IconParking />
              <Text> парковка</Text>
            </View>
            <View style={stylesInfo.ComfortDisplay}>
              <IconBottleofWater />
              <Text> вода</Text>
            </View>
          </View>
          {/* line 2 */}
          <View style={stylesInfo.ComfortDisplay}>
            <View style={[stylesInfo.ComfortDisplay, { marginRight: 50 }]}>
              <IconTowel />
              <Text> парковка</Text>
            </View>
            <View style={stylesInfo.ComfortDisplay}>
              <IconShower />
              <Text> душ</Text>
            </View>
          </View>
        </View>
        {/* Button */}
        <View style={{ alignItems: "center", paddingBottom: 10 }}>
          <ButtonTail
            onPress={openModal}
            title={"Записаться"}
            size={275}
            ButtonHeight={45}
          />

          <SlidingModal visible={modalVisible} onClose={closeModal} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{ color: "#FFFFFF" }}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  );
};

const InfoSlider = () => {
  return (
    <View style={styles.slide}>
      <Image
        style={{ width: "100%", height: "100%" }}
        source={IconSportTest}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
    zIndex: 2,
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  paginationStyle: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "rgba(4, 4, 4, 0.27)",
    borderRadius: 5,
    width: 40,
    height: 30,
    alignItems: "center",
    // justifyContent: 'center'
  },
  paginationText: {
    color: "white",
    fontSize: 20,
  },
});

export default Info;
