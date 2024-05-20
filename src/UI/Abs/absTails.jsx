import React from "react";
import SwiperFlatList from "react-native-swiper-flatlist";
import { Button, View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import BigdiscountIcon from "@assets/view2/BidDiscount.svg";
import { BlobalyStyles } from "../../styles/blobaly.style";
import Swiper from "react-native-swiper";
import { useSelector } from "react-redux";

const CartDiscount = (props) => {
  return (
    <View key={props._id} id={props._id} style={[styles.ABSchild]}>
      <LinearGradient
        width={314}
        height={"100%"}
        style={[styles.TailView]}
        colors={["rgba(153, 249, 247, 1)", "rgba(150, 255, 252, 0.00)"]}
      >
        <Text style={[styles.absHeadText, BlobalyStyles.text_Bold600_s16]}>
          {props.title}
        </Text>
        <View style={styles.container}>
          <View style={[styles.child]}>
            <Text
              style={[
                styles.AbsTimeDiscount,
                BlobalyStyles.text_Bold600_s11,
                { color: "#000", fontStyle: "italic" },
              ]}
            >
              {props.body_text}
            </Text>
            <View style={styles.AbsDiscountLabel}>
              <Text
                style={[
                  styles.AbsDiscountLabel_Text,
                  BlobalyStyles.text_Bold600_s11,
                ]}
              >
                OFF 20%
              </Text>
            </View>
            <Image
              style={{
                width: 300,
                height: 156,
                borderRadius: 12,
              }}
              source={require("@assets/view2/SportImageTest.png")}
            />
          </View>
        </View>
        <Text style={BlobalyStyles.text_Bold500_s11}>
          · Документы · Испанский · Англиский · Русский · Машина
        </Text>
      </LinearGradient>
    </View>
  );
};
export const AbsTails = ({ image, text, discountProcent, time }) => {
  const posts = useSelector((state) => state.posts.posts);
  return (
    <View
      style={[
        {
          // borderWidth: 1,
          width: 314,
          height: 214,
          marginTop: 22,
          marginBottom: 20,
          borderRadius: 20,
        },
      ]}
    >
      <BigdiscountIcon style={styles.bigDiscaunt} />

      <Swiper
        width={314}
        height={214}
        showsPagination={false}
        autoplay
        autoplayTimeout={4}
      >
        {posts.map((item) => (
          <CartDiscount key={item._id} body_text={item.body_text} />
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  TailView: {
    alignItems: "center",
    borderRadius: 24,
  },
  AbsTimeDiscount: {
    position: "absolute",
    top: 0,
    left: 10,
    zIndex: 1,
  },
  ABS: {
    width: 314,
    height: 214,
    borderRadius: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 13,
  },

  card: {
    // borderRadius: 20,
    // width: 314,
    // height: 220,
    // marginVertical: 22,
  },
  absHeadText: {
    marginTop: 3,
  },
  bigDiscaunt: {
    zIndex: 1,
    position: "absolute",
    left: -10,
    top: -11,
  },

  container: {
    marginTop: 3,
    width: 300,
    height: 156,
    borderTopRightRadius: 12,
  },
  ABSchild: {
    width: 314,
    height: 214,
    justifyContent: "center",
    borderRadius: 20,
  },
  child: {
    width: 300,
    height: 156,
    justifyContent: "center",
    borderRadius: 12,
  },
  text: { fontSize: 12, textAlign: "center" },

  AbsDiscountLabel: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 37,
    height: 31,
    backgroundColor: "rgba(0, 0, 0, 0.54)",
    borderWidth: 0.5,
    zIndex: 1,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 7.4,
  },
  AbsDiscountLabel_Text: {
    marginLeft: 8,
    marginTop: 2,
    transform: [{ rotate: "37deg" }],
  },
});
