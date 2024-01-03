import React, { useMemo, memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PasswordField = memo(({ passwordLabel, passwordInputLabel, propTop }) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.emailInputParent, groupViewStyle]}>
      <View style={[styles.emailInput, styles.emailLayout]}>
        <Image
          style={[styles.emailIcon, styles.subtitlePosition]}
          contentFit="cover"
          source={require("../assets/email.png")}
        />
        <Text style={[styles.yourPassword, styles.subtitleFlexBox]}>
          {passwordLabel}
        </Text>
      </View>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Text style={[styles.subtitle, styles.subtitleFlexBox]}>
        {passwordInputLabel}
      </Text>
    </View>
  );
});

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
  yourPassword: {
    top: 17,
    left: 52,
    fontSize: FontSize.size_smi,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorDarkgray,
    width: 196,
  },
  emailInput: {
    top: 32,
    left: 0,
    height: 55,
  },
  vectorIcon: {
    height: "21.84%",
    width: "4.09%",
    top: "56.32%",
    right: "89.65%",
    bottom: "21.84%",
    left: "6.27%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
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
    top: 232,
    height: 87,
    width: 367,
    left: 0,
    position: "absolute",
  },
});

export default PasswordField;
