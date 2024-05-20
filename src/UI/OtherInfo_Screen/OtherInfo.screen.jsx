import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { stylesInfo } from "../MoreInfo_Screen/Info.styles";
import GoBack from "@assets/icons/GoBackLeft.svg";
import { BlobalyStyles } from "src/styles/blobaly.style";
import VacansiaIcon from "@assets/view2/vacansia.svg";
import IconSportTest from "@assets/view2/4723250.jpg";
import IconBackground from "@assets/view2/background.jpg";
import { locations } from "@api/initialData";

const OtherInfo = () => {
  return (
    <View>
      <ImageBackground
        style={[stylesInfo.background]}
        source={require("@assets/view2/background.jpg")}
        //   resizeMode={'cover'}
      >
        {/* Top menu */}
        <View
          style={[
            { position: "absolute", top: 0, width: "100%", zIndex: 2 },
            styles.buttonContainer,
          ]}
        >
          <LinearGradient
            width={"100%"}
            height={80}
            style={[styles.TailView]}
            colors={["rgba(255, 255, 255, 1)", "rgba(252, 243, 228, 1)"]}
          >
            <View style={styles.MenuView}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <GoBack colors={"#307D7A"} />
                <Text style={BlobalyStyles.text_Bold600_s16}>Вакансии</Text>
              </View>
              <View>
                <VacansiaIcon />
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* Content */}
        <ScrollView>
          <View style={styles.ViewScroll}>
            <MoreInfoTitle about={locations[0]} />
            <MoreInfoTitle about={locations[0]} />
            <MoreInfoTitle about={locations[0]} />
            <MoreInfoTitle about={locations[0]} />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const MoreInfoTitle = ({ about }) => {
  return (
    <View style={{ width: "90%", marginTop: 20, alignItems: "center" }}>
      <Text style={[BlobalyStyles.text_Bold600_s16, { textAlign: "center" }]}>
        Водитель курьер
      </Text>
      <Image
        style={{ borderRadius: 12, width: "100%", height: 160 }}
        source={IconSportTest}
      />
      <View style={{ width: "100%" }}>
        <View style={styles.ViewAbout}>
          <Text
            style={[
              BlobalyStyles.text_BoldReal500_s12,
              { marginTop: 5, fontSize: 14,width:'100%', textAlign:'justify' },
            ]}
          >
            {about?.description?.length > 150
              ? [about?.description?.slice(0, 150), "..."]
              : about?.description}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OtherInfo;

const styles = StyleSheet.create({
  TailView: {
    justifyContent: "center",
    alignItems: "center",
  },
  ViewScroll: {
    marginTop: 85,
    width: "100%",
    zIndex: 1,
    alignItems: "center",
  },
  ViewAbout: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  MenuView: {
    width: "100%",
    paddingTop: 25,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.20)",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 28,
  },
});
