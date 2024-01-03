import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import FooterMain from "../components/FooterMain";
import { useNavigation } from "@react-navigation/native";
import Logo from "../components/Logo";
import EmailField from "../components/EmailField";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <LinearGradient
        style={styles.backgroundImage}
        locations={[0, 1]}
        colors={["#240b48", "rgba(49, 15, 92, 0)"]}
      >
        <ImageBackground
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/backgroundimage.png")}
        />
      </LinearGradient>
      <View style={[styles.footer, styles.footerLayout]}>
        <View style={[styles.copyright, styles.footerLayout]}>
          <Text style={[styles.copyrightByTester, styles.login1Typo]}>
            Copyright by TESTER
          </Text>
        </View>
        <FooterMain
          continueWithGoogleAndFbPosition="absolute"
          continueWithGoogleAndFbTop={-146}
          continueWithGoogleAndFbLeft={32}
        />
      </View>
      <View style={styles.dologin}>
        <View style={styles.loginbuttonPosition}>
          <LinearGradient
            style={[styles.loginrectangle, styles.loginbuttonPosition]}
            locations={[0, 1]}
            colors={["#501794", "#3e70a1"]}
          />
          <Text style={[styles.login1, styles.login1Typo]}>Login</Text>
        </View>
        <Image
          style={[styles.seperatorIcon, styles.lockiconLayout]}
          contentFit="cover"
          source={require("../assets/seperator.png")}
        />
      </View>
      <Text style={[styles.login2, styles.textTypo]}>LOGIN</Text>
      <LinearGradient
        style={styles.header}
        locations={[0, 1]}
        colors={["#000", "rgba(0, 0, 0, 0)"]}
      />
      <View style={styles.header1}>
        <Pressable
          style={styles.dosignuptext}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={[styles.text, styles.textTypo]}>
            <Text style={styles.dontHaveAn}>DON’T HAVE AN ACCOUNT?</Text>
            <Text style={styles.signUp}> SIGN UP</Text>
          </Text>
        </Pressable>
        <Logo
          logoPosition="absolute"
          logoWidth="25.64%"
          logoHeight="100%"
          logoTop="0%"
          logoRight="74.36%"
          logoBottom="0%"
          logoLeft="0%"
        />
      </View>
      <View style={[styles.inputfields, styles.login2Position]}>
        <EmailField
          emailInputLabel="Login with email address"
          propPosition="relative"
          propTop="unset"
          propLeft="-3%"
        />
        <View style={styles.password}>
          <View style={[styles.passwordinput, styles.passwordinputLayout]}>
            <Image
              style={[styles.passwordboxIcon, styles.passwordinputLayout]}
              contentFit="cover"
              source={require("../assets/email.png")}
            />
            <Text style={styles.yourPassword}>Your Password</Text>
            <Image
              style={[styles.lockicon, styles.lockiconLayout]}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
          </View>
          <Text style={[styles.enterpassword, styles.textTypo]}>
            Enter Password
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerLayout: {
    height: 17,
    width: 436,
    left: 0,
    position: "absolute",
  },
  login1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  loginbuttonPosition: {
    height: 50,
    width: 367,
    left: 0,
    top: 0,
    position: "absolute",
  },
  lockiconLayout: {
    maxHeight: "100%",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
  },
  login2Position: {
    flex:1,
    left: "9%",
    position: "absolute",
  },
  passwordinputLayout: {
    height: 55,
    width: 367,
    left: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    backgroundColor: "transparent",
    width: "100%",
  },
  backgroundImage: {
    left: -420,
    width: 857,
    height: 571,
    top: 0,
    position: "absolute",
  },
  copyrightByTester: {
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_xs_3,
    textTransform: "uppercase",
    color: Color.colorDarkslateblue,
    width: "100%",
  },
  copyright: {
    top: 0,
  },
  footer: {
    top: 897,
  },
  loginrectangle: {
    borderRadius: Border.br_mini,
    backgroundColor: "transparent",
  },
  login1: {
    top: 12,
    left: 6,
    fontSize: FontSize.size_mid_9,
    width: 361,
    color: Color.colorWhite,
  },
  seperatorIcon: {
    top: 83,
    width: 367,
    left: 0,
  },
  dologin: {
    top: 651,
    left: 29,
    height: 83,
    width: 367,
    position: "absolute",
  },
  login2: {
    top: 301,
    fontSize: FontSize.size_43xl,
    textAlign: "left",
    left: 32,
    position: "absolute",
    color: Color.colorWhite,
  },
  header: {
    left: -49,
    width: 601,
    height: 134,
    backgroundColor: "transparent",
    top: 0,
    position: "absolute",
  },
  dontHaveAn: {
    color: Color.colorSilver,
  },
  signUp: {
    color: Color.colorWhite,
  },
  text: {
    fontSize: FontSize.size_3xs,
    letterSpacing: 0.8,
    textAlign: "left",
  },
  dosignuptext: {
    left: "48.21%",
    top: "19.35%",
    position: "absolute",
  },
  header1: {
    top: 20,
    left: 27,
    width: 390,
    height: 31,
    position: "absolute",
  },
  passwordboxIcon: {
    top: 0,
  },
  yourPassword: {
    top: 17,
    left: 52,
    fontSize: FontSize.size_smi,
    color: Color.colorDarkgray,
    width: 196,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  lockicon: {
    height: "34.55%",
    width: "4.09%",
    top: "30.91%",
    right: "89.65%",
    bottom: "34.55%",
    left: "6.27%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  passwordinput: {
    top: 32,
  },
  enterpassword: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorWhite,
    left: 0,
    top: 0,
    position: "absolute",
  },
  password: {
    height: 87,
    marginTop: 22,
    width: 367,
  },
  inputfields: {
    top: 419,
    alignItems: "center",
    justifyContent: "center",
  },
  login: {
    backgroundColor: Color.colorMidnightblue,
    flex: 1,
    height: 932,
    overflow: "visible",
    width: "100%",
  },
});

export default Login;