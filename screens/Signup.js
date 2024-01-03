import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import InputFields from "../components/InputFields";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Signup = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signup}>
      <Image
        style={styles.backgroundImageIcon}
        contentFit="cover"
        source={require("../assets/background-image.png")}
      />
      <View style={[styles.footer, styles.footerPosition]}>
        <Text style={[styles.copyrightByTester, styles.signUpTypo]}>
          Copyright by TESTER
        </Text>
      </View>
      <View style={[styles.group, styles.groupLayout]}>
        <View style={styles.continueWith}>
          <Text style={styles.orContinueWith}>Or continue with</Text>
        </View>
        <View style={styles.terms}>
          <Text style={[styles.byRegisteringYouContainer, styles.signUpTypo]}>
            <Text
              style={styles.byRegisteringYou}
            >{`By registering you with our `}</Text>
            <Text style={styles.termsAndConditions}>Terms and Conditions</Text>
          </Text>
        </View>
        <View style={[styles.buttons, styles.buttonsLayout]}>
          <Image
            style={[styles.cardIcon, styles.buttonsLayout]}
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
        <View style={[styles.buttons1, styles.buttonsLayout]}>
          <Image
            style={[styles.cardIcon, styles.buttonsLayout]}
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
      <Text style={[styles.signup1, styles.textTypo]}>SIGN UP</Text>
      <LinearGradient
        style={styles.headerFade}
        locations={[0, 1]}
        colors={["#000", "rgba(0, 0, 0, 0)"]}
      />
      <Pressable
        style={styles.dologintext}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={[styles.text, styles.textTypo]}>
          <Text style={styles.byRegisteringYou}>HAVE AN ACCOUNT?</Text>
          <Text style={styles.login}> LOGIN</Text>
        </Text>
      </Pressable>
      <View style={[styles.logo, styles.logoPosition]}>
        <View style={[styles.titleParent, styles.signUpLayout]}>
          <Text style={[styles.title, styles.textTypo]}>{`Tester.. `}</Text>
          <Text style={[styles.title1, styles.logoPosition]}>Memon</Text>
        </View>
        <Image
          style={styles.logoIcon}
          contentFit="cover"
          source={require("../assets/logo.png")}
        />
      </View>
      <InputFields />
      <View style={[styles.dosignup, styles.groupLayout]}>
        <View style={styles.signupPosition}>
          <LinearGradient
            style={[styles.signupButtonChild, styles.signupPosition]}
            locations={[0, 1]}
            colors={["#501794", "#3e70a1"]}
          />
          <Text style={[styles.signUp, styles.signUpLayout]}>Sign up</Text>
        </View>
        <Image
          style={[styles.seperatorIcon, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/seperator.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerPosition: {
    width: 436,
    left: 0,
    position: "absolute",
  },
  signUpTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  groupLayout: {
    width: 367,
    position: "absolute",
  },
  buttonsLayout: {
    height: 36,
    width: 180,
    position: "absolute",
  },
  groupFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
  },
  googleTypo: {
    fontSize: FontSize.size_xs,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
  },
  logoPosition: {
    top: 20,
    position: "absolute",
  },
  signUpLayout: {
    width: 70,
    position: "absolute",
  },
  signupPosition: {
    height: 50,
    width: 367,
    left: 0,
    top: 0,
    position: "absolute",
  },
  backgroundImageIcon: {
    left: -420,
    width: 857,
    height: 571,
    top: 0,
    position: "absolute",
  },
  copyrightByTester: {
    fontSize: FontSize.size_xs_3,
    color: Color.colorDarkslateblue,
    textAlign: "center",
    textTransform: "uppercase",
    width: 436,
    left: 0,
    position: "absolute",
    top: 0,
  },
  footer: {
    top: 897,
    height: 17,
  },
  orContinueWith: {
    textAlign: "left",
    color: Color.colorSilver,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  continueWith: {
    width: 84,
    height: 15,
    left: 0,
    top: 0,
    position: "absolute",
  },
  byRegisteringYou: {
    color: Color.colorSilver,
  },
  termsAndConditions: {
    color: Color.colorMediumslateblue,
  },
  byRegisteringYouContainer: {
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  terms: {
    top: 82,
    width: 248,
    height: 15,
    left: 0,
    position: "absolute",
  },
  cardIcon: {
    left: 0,
    top: 0,
  },
  frameChild: {
    width: 18,
    height: 18,
  },
  facebook: {
    width: 60,
    marginLeft: 8,
    color: Color.colorWhite,
    height: 15,
  },
  groupParent: {
    left: 0,
    top: 0,
  },
  buttonsInner: {
    top: 9,
    left: 47,
    width: 86,
    height: 18,
    position: "absolute",
  },
  buttons: {
    left: 187,
    top: 28,
    height: 36,
    width: 180,
  },
  frameItem: {
    width: 15,
    height: 16,
  },
  google: {
    marginLeft: 10,
    color: Color.colorWhite,
  },
  groupContainer: {
    top: 10,
    left: 49,
    width: 83,
    alignItems: "center",
    height: 16,
  },
  buttons1: {
    top: 28,
    height: 36,
    width: 180,
    left: 0,
  },
  group: {
    top: 770,
    height: 97,
    left: 32,
  },
  signup1: {
    top: 91,
    fontSize: FontSize.size_43xl,
    color: Color.colorWhite,
    left: 32,
    position: "absolute",
  },
  headerFade: {
    left: -49,
    width: 601,
    height: 134,
    backgroundColor: "transparent",
    top: 0,
    position: "absolute",
  },
  login: {
    color: Color.colorWhite,
  },
  text: {
    letterSpacing: 0.8,
    fontSize: FontSize.size_3xs,
  },
  dologintext: {
    left: 251,
    top: 26,
    position: "absolute",
  },
  title: {
    fontSize: FontSize.size_mid,
    color: Color.colorWhite,
    left: 0,
    top: 0,
    position: "absolute",
  },
  title1: {
    left: 26,
    fontSize: FontSize.size_6xs,
    letterSpacing: 4.2,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorWhite,
    textAlign: "left",
    textTransform: "uppercase",
  },
  titleParent: {
    left: 30,
    height: 31,
    top: 0,
  },
  logoIcon: {
    top: 5,
    height: 20,
    width: 18,
    left: 0,
    position: "absolute",
  },
  logo: {
    left: 27,
    width: 100,
    height: 31,
  },
  signupButtonChild: {
    borderRadius: Border.br_mini,
    backgroundColor: "transparent",
  },
  signUp: {
    top: 12,
    left: 148,
    fontSize: FontSize.size_mid_9,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  seperatorIcon: {
    top: 83,
    maxHeight: "100%",
    left: 0,
  },
  dosignup: {
    top: 666,
    height: 83,
    left: 32,
  },
  signup: {
    backgroundColor: Color.colorMidnightblue,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Signup;