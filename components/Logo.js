import React, { useMemo, memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Logo = memo(
  ({
    logoPosition,
    logoWidth,
    logoHeight,
    logoTop,
    logoRight,
    logoBottom,
    logoLeft,
  }) => {
    const logoStyle = useMemo(() => {
      return {
        ...getStyleValue("position", logoPosition),
        ...getStyleValue("width", logoWidth),
        ...getStyleValue("height", logoHeight),
        ...getStyleValue("top", logoTop),
        ...getStyleValue("right", logoRight),
        ...getStyleValue("bottom", logoBottom),
        ...getStyleValue("left", logoLeft),
      };
    }, [
      logoPosition,
      logoWidth,
      logoHeight,
      logoTop,
      logoRight,
      logoBottom,
      logoLeft,
    ]);

    return (
      <View style={[styles.logo, logoStyle]}>
        <View style={styles.titleParent}>
          <Text style={[styles.title, styles.titleFlexBox]}>Tester..</Text>
          <Text style={[styles.title1, styles.titleFlexBox]}>Memon</Text>
        </View>
        <Image
          style={styles.logoIcon}
          contentFit="cover"
          source={require("../assets/logo.png")}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  titleFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  title: {
    fontSize: FontSize.size_mid,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    left: "0%",
    top: "0%",
  },
  title1: {
    top: "64.52%",
    left: "37.14%",
    fontSize: FontSize.size_6xs,
    letterSpacing: 4.2,
    textTransform: "uppercase",
    fontFamily: FontFamily.poppinsRegular,
  },
  titleParent: {
    height: "100%",
    width: "70%",
    right: "0%",
    bottom: "0%",
    left: "30%",
    top: "0%",
    position: "absolute",
  },
  logoIcon: {
    height: "65.48%",
    width: "18.2%",
    top: "16.13%",
    right: "81.8%",
    bottom: "18.39%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    left: "0%",
    position: "absolute",
  },
  logo: {
    width: 100,
    height: 31,
  },
});

export default Logo;
