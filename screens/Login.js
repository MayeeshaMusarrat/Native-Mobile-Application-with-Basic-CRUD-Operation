import * as React from "react";
import { View, TextInput, StyleSheet, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <View style={styles.inputfields}>
        <TextInput
          style={[styles.username, styles.emailSpaceBlock]}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          color = "white"
          placeholderTextColor="white"
        />
        <TextInput
          style={[styles.email, styles.emailSpaceBlock]}
          placeholder="Password"
          color = "white"
          placeholderTextColor="white"
        />
      </View>
      <View style={[styles.loginWrapper, styles.headerFlexBox]}>
        <Text style={[styles.login1, styles.textTypo]}>LOGIN</Text>
      </View>
      <View style={[styles.dologin, styles.headerFlexBox]}>
        <View style={styles.loginbuttonLayout}>
          <LinearGradient
            style={[styles.loginrectangle, styles.headerPosition]}
            locations={[0, 1]}
            colors={["#501794", "#3e70a1"]}
          />
          <Text style={styles.login2}>Login</Text>
        </View>
        <Image
          style={styles.seperatorIcon}
          contentFit="cover"
          source={require("../assets/seperator.png")}
        />
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={styles.logo}>
          <View style={styles.titleParent}>
            <Text style={[styles.title, styles.titlePosition]}>Tester..</Text>
            <Text style={styles.title1}>LOGIN</Text>
          </View>
          <Image
            style={[styles.logoIcon, styles.titlePosition]}
            contentFit="cover"
            source={require("../assets/logo.png")}
          />
        </View>
        <Pressable
          style={styles.dosignuptext}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={[styles.text, styles.textTypo]}>
            <Text style={styles.haveAnAccount}>HAVE AN ACCOUNT?</Text>
            <Text style={styles.login3}> LOGIN</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emailSpaceBlock: {
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
  },
  headerFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    width: 294,
  },
  textTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
  },
  headerPosition: {
    top: 0,
    position: "absolute",
  },
  titlePosition: {
    left: "0%",
    position: "absolute",
  },
  username: {
    paddingRight: Padding.p_3xs,
    paddingLeft: Padding.p_9xl,
    width: 294,
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
  },
  email: {
    marginTop: 8,
    paddingRight: Padding.p_3xs,
    paddingLeft: Padding.p_9xl,
    width: 294,
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
  },
  inputfields: {
    top: 229,
    left: 0,
    position: "absolute",
  },
  login1: {
    fontSize: FontSize.size_21xl,
    textAlign: "left",
    color: Color.colorWhite,
  },
  loginWrapper: {
    top: 143,
    paddingLeft: Padding.p_8xl,
    paddingRight: Padding.p_84xl,
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  loginrectangle: {
    borderRadius: Border.br_mini,
    backgroundColor: "transparent",
    height: 50,
    width: 237,
    left: 0,
  },
  login2: {
    top: 12,
    left: 4,
    fontSize: FontSize.size_mid_9,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "center",
    width: 233,
    color: Color.colorWhite,
    position: "absolute",
  },
  loginbuttonLayout: {
    height: 50,
    width: 237,
  },
  seperatorIcon: {
    width: 228,
    marginLeft: 33,
    maxHeight: "100%",
  },
  dologin: {
    top: 377,
    flexWrap: "wrap",
    justifyContent: "center",
    paddingLeft: Padding.p_12xl,
    paddingRight: Padding.p_7xl,
    left: 0,
    position: "absolute",
  },
  title: {
    fontSize: FontSize.size_mid,
    top: "0%",
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  title1: {
    top: "64.52%",
    left: "36.31%",
    fontSize: FontSize.size_6xs,
    letterSpacing: 4.2,
    textTransform: "uppercase",
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  titleParent: {
    height: "100%",
    width: "71.59%",
    right: "-1.54%",
    bottom: "0%",
    left: "29.96%",
    top: "0%",
    position: "absolute",
  },
  logoIcon: {
    height: "65.48%",
    width: "18.17%",
    top: "16.13%",
    right: "81.83%",
    bottom: "18.39%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  logo: {
    width: 91,
    height: 31,
  },
  haveAnAccount: {
    color: Color.colorSilver,
  },
  login3: {
    color: Color.colorWhite,
  },
  text: {
    fontSize: FontSize.size_5xs,
    letterSpacing: 0.6,
    width: 149,
    textAlign: "left",
  },
  dosignuptext: {
    marginLeft: 40,
  },
  header: {
    left: 2,
    height: 93,
    paddingLeft: 14,
    paddingTop: Padding.p_xs,
    paddingRight: 20,
    alignItems: "center",
    flexDirection: "row",
    width: 350,
  },
  login: {
    backgroundColor: Color.colorMidnightblue,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Login;