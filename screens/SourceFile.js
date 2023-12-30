import * as React from "react";
import { Text, StyleSheet, View, TextInput, Pressable } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const SourceFile = () => {
  return (
    <View style={styles.sourceFile}>
      <View style={[styles.sourceFileInner, styles.sourceFileInnerLayout]}>
        <View
          style={[
            styles.alreadyHaveAnAccountParent,
            styles.sourceFileInnerLayout,
          ]}
        >
          <Text style={[styles.alreadyHaveAn, styles.signInFlexBox]}>
            Already have an account ?
          </Text>
          <Text style={[styles.signIn, styles.loginTypo]}>Sign In</Text>
        </View>
      </View>
      <View style={[styles.groupParent, styles.parentLayout]}>
        <View style={[styles.groupWrapper, styles.groupLayout1]}>
          <View style={[styles.groupContainer, styles.groupLayout1]}>
            <View style={styles.groupView}>
              <TextInput
                style={[styles.groupChild, styles.groupLayout, styles.fontColor]}
                placeholder="Enter Email"
                placeholderTextColor="#FFFAFA"
                keyboardType="email-address"
                secureTextEntry={true}
              />
              <TextInput
                style={[styles.groupItem, styles.groupLayout, styles.fontColor]}
                placeholder="Enter Password"
                placeholderTextColor="#FFFAFA"
                secureTextEntry={true}
              />
            </View>
            <Pressable style={styles.button}>
              <Text style={styles.checkDatabaseEntry}>
                Check Database Entry
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={[styles.orParent, styles.parentLayout]}>
       
          <View style={[styles.firstNameParent, styles.parentLayout]}>
            <View style={[styles.firstName, styles.firstLayout]}>
              <View style={[styles.firstNameChild, styles.nameChildBg]} />
              <Text style={[styles.facebook, styles.gmailTypo]}>Facebook</Text>
            </View>
            <View style={[styles.lastName, styles.lastLayout]}>
              <View style={[styles.lastNameChild, styles.lastLayout]} />
              <Text style={[styles.gmail, styles.gmailTypo]}>Gmail</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.loginWrapper, styles.loginLayout]}>
        <Text style={[styles.login, styles.loginLayout]}>Login</Text>
      </View>
      <Text style={[styles.testTheDatabase, styles.or1Clr]}>
        Test the Database
      </Text>
      <Text
        style={[styles.welcomeBackPlease, styles.or1Clr]}
      >{`Welcome back please
test the database`}</Text>
    
    </View>
  );
};

const styles = StyleSheet.create({
 
 fontColor: {
 color: 'white',
 },
  sourceFileInnerLayout: {
    width: 192,
    height: 18,
    position: "absolute",
  },
  signInFlexBox: {
    textAlign: "left",
    lineHeight: 14,
  },
  loginTypo: {
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    top: 0,
  },
  parentLayout: {
    width: 327,
    position: "absolute",
  },
  groupLayout1: {
    height: 200,
    width: 287,
    top: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 37,
    width: 287,
    left: 0,
    position: "absolute",
  },
  or1Clr: {
    color: Color.colorWhite,
    textAlign: "center",
  },
  orItemLayout: {
    width: 141,
    maxHeight: "100%",
    top: 7,
   
  },
  firstLayout: {
    height: 48,
    width: 327,
    left: 0,
    position: "absolute",
  },
  nameChildBg: {
    backgroundColor: Color.colorDarkslateblue_100,
    borderRadius: Border.br_3xl,
    top: 0,
  },
  gmailTypo: {
    lineHeight: 18,
    top: 15,
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  lastLayout: {
    width: 325,
    height: 48,
    left: 0,
    position: "absolute",
  },
  loginLayout: {
    height: 28,
    width: 135,
    position: "absolute",
  },
  iconLayout: {
    maxWidth: "100%",
    width: "4.27%",
    height: "1.97%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  alreadyHaveAn: {
    top: 1,
    color: "#999",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    lineHeight: 14,
    left: 0,
    position: "absolute",
  },
  signIn: {
    left: 148,
    color: Color.blue,
    width: 44,
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.size_sm,
    position: "absolute",
    textAlign: "left",
    lineHeight: 14,
    height: 18,
  },
  alreadyHaveAnAccountParent: {
    left: 0,
    top: 0,
    height: 18,
  },
  sourceFileInner: {
    top: 755,
    left: 93,
    height: 18,
  },
  groupChild: {
    top: 0,
  },
  groupItem: {
    top: 72,
  },
  groupView: {
    height: 109,
    width: 287,
    left: 0,
    top: 0,
    position: "absolute",
  },
  checkDatabaseEntry: {
    top: 18,
    left: 64,
    fontSize: 16,
    color: "#00224f",
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  button: {
    height: "28%",
    top: "72%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 32,
    backgroundColor: Color.colorWhite,
    position: "absolute",
    width: "100%",
  },
  groupContainer: {
    left: 0,
  },
  groupWrapper: {
    left: 20,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 10,
      height: 24,
    },
    shadowRadius: 54,
    elevation: 54,
    shadowOpacity: 1,
  },
  or1: {
    left: 157,
    width: 12,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    color: Color.colorWhite,
    height: 15,
    fontSize: FontSize.size_xs,
    top: 0,
    position: "absolute",
  },
  orChild: {
    left: 0,
  },
  orItem: {
    left: 186,
  },
  or: {
    height: 15,
    width: 327,
    left: 0,
    top: 0,
    position: "absolute",
  },
  firstNameChild: {
    height: 48,
    width: 327,
    left: 0,
    position: "absolute",
  },
  facebook: {
    left: 132,
  },
  firstName: {
    top: 0,
  },
  lastNameChild: {
    backgroundColor: Color.colorDarkslateblue_100,
    borderRadius: Border.br_3xl,
    top: 0,
  },
  gmail: {
    left: 144,
  },
  lastName: {
    top: 62,
  },
  firstNameParent: {
    top: 36,
    height: 110,
    left: 0,
  },
  orParent: {
    top: 256,
    height: 146,
    left: 0,
  },
  groupParent: {
    top: 337,
    left: 24,
    height: 402,
  },
  login: {
    fontSize: 18,
    lineHeight: 32,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    top: 0,
    left: 0,
  },
  loginWrapper: {
    top: 60,
    left: 120,
  },
  testTheDatabase: {
    top: 151,
    fontSize: 26,
    fontWeight: "600",
    width: 375,
    fontFamily: FontFamily.robotoBold,
    left: 0,
    position: "absolute",
  },
  welcomeBackPlease: {
    top: 197,
    left: 118,
    opacity: 0.4,
    fontSize: FontSize.size_sm,
    position: "absolute",
    fontFamily: FontFamily.robotoRegular,
  },
  btnsigninwithfbIcon: {
    top: "79.43%",
    right: "60%",
    bottom: "18.6%",
    left: "35.73%",
  },
  btnsigninwithgoogleIcon: {
    top: "87.07%",
    right: "57.87%",
    bottom: "10.96%",
    left: "37.87%",
  },
  sourceFile: {
    backgroundColor: "#011b33",
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default SourceFile;
