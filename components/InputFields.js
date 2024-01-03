import React, { memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import PasswordField from "./PasswordField";
import EmailField from "./EmailField";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const InputFields = memo(() => {
  return (
    <View style={[styles.inputfields, styles.inputfieldsLayout]}>
      <PasswordField
        passwordLabel="Your Password"
        passwordInputLabel="Enter  Password"
        propTop={232}
      />
      <PasswordField
        passwordLabel="Confirm your password"
        passwordInputLabel="Confirm  Password"
        propTop={348}
      />
      <EmailField
        emailInputLabel="Enter Your Email Address"
        propPosition="absolute"
        propTop={116}
        propLeft={0}
      />
      <View style={[styles.emailInputParent, styles.subtitlePosition]}>
        <View style={[styles.emailInput, styles.emailLayout]}>
          <Image
            style={[styles.emailIcon, styles.emailLayout]}
            contentFit="cover"
            source={require("../assets/email.png")}
          />
          <Text style={[styles.yourUsername, styles.subtitleFlexBox]}>
            Your username
          </Text>
        </View>
        <Text style={[styles.subtitle, styles.subtitleFlexBox]}>
          Enter Username
        </Text>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  inputfieldsLayout: {
    width: 367,
    position: "absolute",
  },
  subtitlePosition: {
    left: 0,
    top: 0,
  },
  emailLayout: {
    height: 55,
    left: 0,
    width: 367,
    position: "absolute",
  },
  subtitleFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  emailIcon: {
    top: 0,
    height: 55,
  },
  yourUsername: {
    top: 17,
    left: 47,
    fontSize: FontSize.size_smi,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorDarkgray,
    width: 196,
  },
  emailInput: {
    top: 32,
  },
  subtitle: {
    fontSize: FontSize.size_xs,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorWhite,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    left: 0,
    top: 0,
  },
  groupIcon: {
    height: "24.48%",
    width: "5.45%",
    top: "56.32%",
    right: "89.65%",
    bottom: "19.2%",
    left: "4.9%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  emailInputParent: {
    height: 87,
    width: 367,
    position: "absolute",
  },
  inputfields: {
    top: 192,
    left: 32,
    height: 435,
  },
});

export default InputFields;
