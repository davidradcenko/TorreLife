import { LinearGradient } from "expo-linear-gradient";
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Easing,
} from "react-native";
import * as Animatable from "react-native-animatable";
import CloseButton from "@assets/icons/close.svg";
import SwipeUp from "@assets/icons/SwipeUp.svg";
import { useEffect, useRef, useState } from "react";
import { BlobalyStyles } from "../../../styles/blobaly.style";
import {
  GestureHandlerRootView,
  PanGestureHandler,
  State,
} from "react-native-gesture-handler";
import {
  createNavigationContainerRef,
  useNavigation,
} from "@react-navigation/native";

export const MapAnimatable = ({
  isModalVisible,
  selectedLocation,
  closeModal,
}) => {
  const navigation = useNavigation();
  const modalRef = useRef(null);
  let offset = 0;

  const onGestureEvent = (event) => {
    offset = event.nativeEvent.translationY;
  };

  const onHandlerStateChange = (event) => {
    if (event.nativeEvent.state === State.END) {
      if (offset < -50) {
        console.log("Свайпнуто вверх!");
        modalRef.current.slideInUp(800);
        navigation.navigate("Home");
        // navigate('Home')
        // navigationRef.navigate('Home')
      }
      offset = 0;
    }
  };

  const [blinkAnimation] = useState(new Animated.Value(1));
  const [bounceAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    const blink = Animated.loop(
      Animated.sequence([
        Animated.timing(blinkAnimation, {
          toValue: 0,
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
    <PanGestureHandler
      onGestureEvent={onGestureEvent}
      onHandlerStateChange={onHandlerStateChange}
    >
      <Animatable.View
        animation="slideInUp"
        duration={500}
        ref={modalRef}
        style={[
          styles.modalContainer,
          { display: isModalVisible ? "flex" : "none" },
        ]}
      >
        <LinearGradient
          width={"100%"}
          style={styles.modalContent}
          colors={["#FFF", "#C5DCDA"]}
        >
          {/* Blink element */}
          <Animated.View
            style={[
              styles.blinkingElement,
              {
                opacity: blinkAnimation,
                transform: [
                  {
                    translateY: bounceAnimation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -10], // Регулируйте высоту подпрыгивания
                    }),
                  },
                ],
              },
            ]}
          >
            <SwipeUp/>
          </Animated.View>
          {/*/////////// discount //////////*/}
          <Text style={styles.discount}>
            {selectedLocation?.discount ? selectedLocation?.discount : ""}
          </Text>
          {/*/////////// type_connect //////////*/}
          <Text style={styles.modalTitle}>
            {selectedLocation?.type_connect}
          </Text>
          {/*/////////// Image //////////*/}
          {selectedLocation?.photos?.length != 0 ? (
            <View style={{ width: "100%", alignItems: "center" }}>
              <Image
                style={{
                  width: "90%",
                  height: 156,
                  borderRadius: 12,
                }}
                source={require("@assets/view2/SportImageTest.png")}
              />
            </View>
          ) : (
            <></>
          )}
          {/*/////////// description //////////*/}
          <Text style={[BlobalyStyles.text_Bold600_s16, styles.TextTag]}>
            <Text style={{ fontStyle: "italic", fontSize: 16 }}>
              Описание:{" "}
            </Text>{" "}
            {selectedLocation?.description?.length > 150
              ? [selectedLocation?.description?.slice(0, 150), "..."]
              : selectedLocation?.description}
          </Text>
          {/*/////////// TextTag //////////*/}
          <Text style={[BlobalyStyles.text_Bold600_s16, styles.TextTag]}>
            <Text style={{ fontStyle: "italic", fontSize: 16 }}>Тэги: </Text>{" "}
            {selectedLocation?.tags?.join(" · ")?.length > 100
              ? [selectedLocation?.tags?.join(" · ")?.slice(0, 100), "..."]
              : selectedLocation?.tags?.join(" · ")}
          </Text>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <CloseButton />
          </TouchableOpacity>
        </LinearGradient>
      </Animatable.View>
    </PanGestureHandler>
  );
};

export const styles = StyleSheet.create({
  blinkingElement: {
    position: "absolute",
    top: -5,
    left:"50%" // Регулируйте положение в соответствии с вашим дизайном
  },
  TextTag: {
    fontSize: 12,
    textAlign: "left",
  },
  discount: {
    position: "absolute",
    top: 4,
    transform: [{ rotate: "-38.212deg" }],
    fontSize: 18,
    color: "rgba(245, 3, 3, 1)",
  },
  modalContainer: {
    // backgroundColor: "white",
    // padding: 16,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    // width: "100%",
  },
  modalContent: {
    borderTopWidth: 0.3,
    borderColor: "#0AC8BE",
    backgroundColor: "#016c80",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 15,
    // alignItems:'center'
  },
  modalTitle: {
    textAlign: "right",
    fontSize: 18,
    fontWeight: "bold",
  },
  closeButton: {
    position: "absolute",
    top: -30,
    right: 0,
    marginTop: 10,
  },
});
