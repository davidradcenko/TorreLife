import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  BackImage: {
    flex: 1,
    resizeMode: "cover",
  },
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textWrapper: {
    width: "100%", 
    textAlign: "center",
    color: "#A7D1D0",
    fontFamily: "Montserrat-ExtraBold",
    fontSize: 48,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  mainTails: {
    paddingTop: 82,
  },
  TailsLittle: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  Tail: {
    width: 140,
    height: 80,
    flexShrink: 0,
    borderRadius: 20,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 16,
  },

  TailViewText: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 16,
    color: "#14213D",
  },
  // contact
  contact:{
    marginTop:34,
    alignItems:'center'
  },
  buttonContainer: {
    borderRadius: 10,
    overflow: 'hidden', // Обрезать дочерние элементы по границам родительского
  },
});















// autoplayLoop
//         index={1}
//         data={colors}
//         widthSlider={314}
//         heightSlider={214}
//         autoplay
//         autoplayDelay={4}
//         renderItem={({ item }) => (
//           <View style={[styles.ABSchild]}>
//             <LinearGradient
//               width={314}
//               height={"100%"}
//               style={[styles.TailView]}
//               colors={["#ACD3D2", "rgba(150, 255, 252, 0.00)"]}
//             >
//               <Text
//                 style={[styles.absHeadText, BlobalyStyles.text_Bold600_s16]}
//               >
//                 Водитель-курьер
//               </Text>
//               <View style={styles.container}>
                
//                     <View style={[styles.child]}>
//                     <Text style={[styles.AbsTimeDiscount,BlobalyStyles.text_Bold600_s11,{color:'#000',fontStyle:'italic'}]}>Только с 6 по 12 Декабря</Text>
//                       <View style={styles.AbsDiscountLabel}>
//                         <Text
//                           style={[
//                             styles.AbsDiscountLabel_Text,
//                             BlobalyStyles.text_Bold600_s11,
//                           ]}
//                         >
//                           OFF 20%
//                         </Text>
//                       </View>
//                       <Image
//                         style={{
//                           width: 300,
//                           height: 156,
//                           borderRadius: 12,
//                         }}
//                         source={require("../../assets/view2/SportImageTest.png")}
//                       />
//                     </View>
//               </View>
//               <Text style={BlobalyStyles.text_Bold500_s11}>
//                 · Документы · Испанский · Англиский · Русский · Машина
//               </Text>
//             </LinearGradient>
//           </View>
//         )}