import React, { useMemo, memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FooterMain = memo(
  ({
    continueWithGoogleAndFbPosition,
    continueWithGoogleAndFbTop,
    continueWithGoogleAndFbLeft,
  }) => {
    const continueWithGoogleAndFbStyle = useMemo(() => {
      return {
        ...getStyleValue("position", continueWithGoogleAndFbPosition),
        ...getStyleValue("top", continueWithGoogleAndFbTop),
        ...getStyleValue("left", continueWithGoogleAndFbLeft),
      };
    }, [
      continueWithGoogleAndFbPosition,
      continueWithGoogleAndFbTop,
      continueWithGoogleAndFbLeft,
    ]);

    return (
      <View
        style={[styles.continuewithgoogleandfb, continueWithGoogleAndFbStyle]}
      >
        <View style={styles.continueWith}>
          <Text style={[styles.orContinueWith, styles.orContinueWithPosition]}>
            Or continue with
          </Text>
        </View>
        <View style={styles.terms}>
          <Text
            style={[
              styles.byRegisteringYouContainer,
              styles.orContinueWithPosition,
            ]}
          >
            <Text
              style={styles.byRegisteringYou}
            >{`By registering you with our `}</Text>
            <Text style={styles.termsAndConditions}>Terms and Conditions</Text>
          </Text>
        </View>
        <View style={[styles.buttons, styles.buttonsPosition]}>
          <Image
            style={[styles.cardIcon, styles.cardIconPosition]}
            contentFit="cover"
            source={require("../assets/card.png")}
          />
          <View style={styles.buttonsInner}>
            <View style={[styles.groupParent, styles.groupFlexBox]}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/group-1431.png")}
              />
              <Text style={[styles.facebook, styles.googleTypo]}>Facebook</Text>
            </View>
          </View>
        </View>
        <View style={[styles.buttons1, styles.buttonsPosition]}>
          <Image
            style={[styles.cardIcon, styles.cardIconPosition]}
            contentFit="cover"
            source={require("../assets/card.png")}
          />
          <View style={[styles.groupContainer, styles.groupFlexBox]}>
            <Image
              style={styles.frameItem}
              contentFit="cover"
              source={require("../assets/group-1432.png")}
            />
            <Text style={[styles.google, styles.googleTypo]}>Google</Text>
          </View>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  orContinueWithPosition: {
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  buttonsPosition: {
    bottom: "34.02%",
    top: "28.87%",
    width: "49.05%",
    height: "37.11%",
    position: "absolute",
  },
  cardIconPosition: {
    width: "100%",
    height: "100%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    top: "0%",
  },
  groupFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
  },
  googleTypo: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  orContinueWith: {
    color: Color.colorSilver,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.size_3xs,
  },
  continueWith: {
    width: "22.89%",
    right: "77.11%",
    bottom: "84.54%",
    left: "0%",
    top: "0%",
    height: "15.46%",
    position: "absolute",
  },
  byRegisteringYou: {
    color: Color.colorSilver,
  },
  termsAndConditions: {
    color: Color.colorMediumslateblue,
  },
  byRegisteringYouContainer: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "left",
    fontSize: FontSize.size_3xs,
  },
  terms: {
    width: "67.57%",
    top: "84.54%",
    right: "32.43%",
    bottom: "0%",
    left: "0%",
    height: "15.46%",
    position: "absolute",
  },
  cardIcon: {
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  frameChild: {
    width: 18,
    height: 18,
  },
  facebook: {
    width: 60,
    height: 15,
    marginLeft: 8,
  },
  groupParent: {
    width: "100%",
    height: "100%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    top: "0%",
  },
  buttonsInner: {
    height: "50%",
    width: "47.78%",
    top: "25%",
    right: "26.11%",
    bottom: "25%",
    left: "26.11%",
    position: "absolute",
  },
  buttons: {
    left: "50.95%",
    right: "0%",
    bottom: "34.02%",
    top: "28.87%",
    width: "49.05%",
    height: "37.11%",
  },
  frameItem: {
    width: 15,
    height: 16,
  },
  google: {
    marginLeft: 10,
  },
  groupContainer: {
    height: "44.17%",
    width: "46%",
    top: "27.78%",
    right: "26.78%",
    bottom: "28.06%",
    left: "27.22%",
    alignItems: "center",
  },
  buttons1: {
    right: "50.95%",
    bottom: "34.02%",
    top: "28.87%",
    width: "49.05%",
    height: "37.11%",
    left: "0%",
  },
  continuewithgoogleandfb: {
    width: 367,
    height: 97,
  },
});

export default FooterMain;
