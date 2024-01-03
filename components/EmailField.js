import React, { useMemo, memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const EmailField = memo(
  ({ emailInputLabel, propPosition, propTop, propLeft }) => {
    const groupView1Style = useMemo(() => {
      return {
        ...getStyleValue("position", propPosition),
        ...getStyleValue("top", propTop),
        ...getStyleValue("left", propLeft),
      };
    }, [propPosition, propTop, propLeft]);

    return (
      <View style={[styles.emailInputParent, groupView1Style]}>
        <View style={[styles.emailInput, styles.emailLayout]}>
          <Image
            style={[styles.emailIcon, styles.subtitlePosition]}
          
            source={require("../assets/email.png")}
          />
          <Text style={[styles.yournamegmailcom, styles.subtitleFlexBox]}>
            Yourname@gmail.com
          </Text>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
        </View>
        <Text style={[styles.subtitle, styles.subtitleFlexBox]}>
          {emailInputLabel}
        </Text>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  emailLayout: {
    height: 55,
    width: 367,
    position: "absolute",
  },
  subtitlePosition: {
    top: 0,
    left: 0,
  },
  subtitleFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  emailIcon: {
    height: 55,
    width: 367,
    position: "absolute",
  },
  yournamegmailcom: {
    top: 17,
    left: 47,
    fontSize: FontSize.size_smi,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorDarkgray,
    width: 197,
  },
  vectorIcon: {
    height: "27.27%",
    width: "5.45%",
    top: "36.36%",
    right: "89.65%",
    bottom: "36.36%",
    left: "4.9%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  emailInput: {
    top: 32,
    left: 0,
    height: 55,
  },
  subtitle: {
    fontSize: FontSize.size_xs,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorWhite,
    top: 0,
    left: 0,
  },
  emailInputParent: {
    top: 116,
    height: 87,
    width: 350,
    left: 0,
    position: "absolute",
  },
});

export default EmailField;
