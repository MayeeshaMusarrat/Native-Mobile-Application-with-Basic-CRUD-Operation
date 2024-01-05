import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Button } from "react-native";

const Login = () => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const loginHandler = () => {
        const loginData = {
          email: email,
          password: password,
        };

        console.log("LoginData = ", loginData);
      
        fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            credentials: 'include', 
            body: JSON.stringify(loginData),
          })
          .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Login response:', data);
        })
        .catch(error => {
            console.error('Error during login:', error);
        });
        
      };
      
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
          source={require("../../../assets/backgroundimage.png")}
        />
      </LinearGradient>
      <View style={[styles.footer, styles.footerFlexBox]}>
        <View style={styles.continuewithgoogleandfb}>
          <View style={styles.continueWith}>
            <Text style={[styles.orContinueWith, styles.orContinueWithTypo]}>
              Or continue with
            </Text>
          </View>
          <View style={styles.terms}>
            <Text style={[styles.byRegisteringYouContainer, styles.login1Typo]}>
              <Text
                style={styles.byRegisteringYou}
              >{`By registering you with our `}</Text>
              <Text style={styles.termsAndConditions}>
                Terms and Conditions
              </Text>
            </Text>
          </View>
          <View style={[styles.buttons, styles.buttonsPosition]}>
           
            <View style={styles.buttonsInner}>
              <View style={[styles.groupParent, styles.cardIconPosition]}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../../../assets/group-1431.png")}
                />
                <Text style={[styles.facebook, styles.googleTypo]}>
                  Facebook
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.buttons1, styles.buttonsPosition]}>
          
            <View style={[styles.groupContainer, styles.headerFlexBox]}>
              <Image
                style={styles.frameItem}
                contentFit="cover"
                source={require("../../../assets/group-1432.png")}
              />
              <Text style={[styles.google, styles.googleTypo]}>Google</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.dologin, styles.dologinPosition]}>
        <View style={styles.loginbuttonLayout}>
          <LinearGradient
            style={[styles.loginrectangle, styles.headerPosition]}
            locations={[0, 1]}
            colors={["#501794", "#3e70a1"]}
          />

          <Button title="Login" onPress={loginHandler}> </Button>

        </View>
        <Image
          style={styles.seperatorIcon}
          contentFit="cover"
          source={require("../../../assets/seperator.png")}
        />
      </View>
      <View style={styles.login2}>
        <Text style={[styles.login3, styles.login3Typo]}>LOGIN</Text>
      </View>
      <LinearGradient
        style={styles.headershadow}
        locations={[0, 1]}
        colors={["#000", "rgba(0, 0, 0, 0)"]}
      />
      <View style={[styles.header, styles.headerPosition]}>
        <Image
          style={styles.logoIcon}
          contentFit="cover"
          source={require("../../../assets/logo2.png")}
        />
        <Text style={[styles.dosignuptext, styles.login3Typo]}>
          <Text style={styles.byRegisteringYou}>DON’T HAVE AN ACCOUNT?</Text>
          <Text style={styles.signUp}> SIGN UP</Text>
        </Text>
      </View>


      <View style={[styles.inputfields, styles.dologinPosition]}>
        <TextInput
          style={[styles.username, styles.emailSpaceBlock]}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          color = "white"
          placeholderTextColor={"lightgray"}
          underlineColorAndroid={"lightgray"}
          value = {email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={[styles.email, styles.emailSpaceBlock]}
          placeholder="Password"
          color = "white"
          placeholderTextColor={"lightgray"}
          underlineColorAndroid={"lightgray"}
          value = {password}
          onChangeText = {(text) => setPassword(text)}
          secureTextEntry = {true}
        />
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  footerFlexBox: {
    flexWrap: "wrap",
    justifyContent: "center",
  },
  orContinueWithTypo: {
    textAlign: "left",
    fontSize: 10,
    left: "0%",
    top: "0%",
  },
  login1Typo: {
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    position: "absolute",
    width: 300
  },
  buttonsPosition: {
    bottom: "34.02%",
    top: "28.87%",
    height: "37.11%",
    position: "absolute",
  },
  cardIconPosition: {
    right: "0%",
    bottom: "0%",
    left: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  googleTypo: {
    fontSize: 12,
    color: "#fff",
    textAlign: "left",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
  },
  headerFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  dologinPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  headerPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  login3Typo: {
    fontFamily: "Poppins-Bold",
    fontWeight: "700",
    
  },
  emailSpaceBlock: {
    paddingBottom: 10,
    paddingTop: 10,
    width: 300,
    marginLeft: 30,
  },
  icon: {
    backgroundColor: "transparent",
    height: "100%",
    width: "100%",
  },
  backgroundImage: {
    left: "-97.67%",
    right: "-1.53%",
    bottom: "38.74%",
    width: "199.19%",
    height: "61.26%",
    top: "0%",
    position: "absolute",
  },
  orContinueWith: {
    color: "#b6b6b6",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
    width: 300
  },
  continueWith: {
    width: "22.89%",
    right: "77.11%",
    bottom: "84.54%",
    left: "0%",
    height: "15.46%",
    top: "0%",
    position: "absolute",
  },
  byRegisteringYou: {
    color: "#b6b6b6",
  },
  termsAndConditions: {
    color: "#9d5ce9",
  },
  byRegisteringYouContainer: {
    textAlign: "left",
    fontSize: 10,
    left: "0%",
    top: "-10%",
    
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
    maxHeight: "100%",
    overflow: "hidden",
  },
  frameChild: {
    width: 18,
    height: 18,
  },
  facebook: {
    width: 80,
    height: 20,
    marginLeft: 8,
    color: "#fff",
  },
  groupParent: {
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonsInner: {
    height: "50%",
    width: "63.24%",
    top: "25%",
    right: "18.38%",
    bottom: "25%",
    left: "18.38%",
    position: "absolute",
  },
  buttons: {
    width: "37.06%",
    right: "19.89%",
    left: "43.05%",
  },
  frameItem: {
    width: 15,
    height: 16,
  },
  google: {
    marginLeft: 10,
    color: "#fff",
    height: 20
  },
  groupContainer: {
    height: "44.17%",
    width: "45.97%",
    top: "27.78%",
    right: "26.81%",
    bottom: "28.06%",
    left: "27.22%",
    justifyContent: "center",
    position: "absolute",
  },
  buttons1: {
    width: "39.24%",
    right: "60.76%",
    left: "0%",
  },
  continuewithgoogleandfb: {
    width: 367,
    height: 97,
  },
  footer: {
    top: 650,
    left: 1,
    width: 357,
    height: 124,
    paddingLeft: 77,
    paddingRight: 4,
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
  },
  loginrectangle: {
    borderRadius: 15,
    height: 50,
    width: 296,
    backgroundColor: "transparent",
  },
  login1: {
    top: 12,
    left: 5,
    fontSize: 18,
    textAlign: "center",
    width: 300,
    color: "#fff",
  },
  loginbuttonLayout: {
    height: 50,
    width: 296,
  },
  seperatorIcon: {
    width: 299,
    marginLeft: 33,
    maxHeight: "100%",
  },
  dologin: {
    top: 546,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  login3: {
    fontSize: 62,
    color: "#fff",
    width: 300
  },
  login2: {
    top: 247,
    paddingLeft: 34,
    paddingRight: 202,
    paddingBottom: 10,
    paddingTop: 10,
    width: 360,
    left: -2,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  headershadow: {
    left: -49,
    width: 601,
    height: 134,
    top: 0,
    backgroundColor: "transparent",
    position: "absolute",
  },
  logoIcon: {
    width: 91,
    height: 31,
  },
  signUp: {
    color: "#fff",
  },
  dosignuptext: {
    letterSpacing: 0.8,
    width: 216,
    marginLeft: 40,
    fontSize: 10,
    fontFamily: "Poppins-Bold",
    fontWeight: "700",
  },
  header: {
    width: 361,
    height: 93,
    paddingLeft: 16,
    paddingTop: 12,
    paddingRight: 7,
    alignItems: "center",
    flexDirection: "row",
  },
  username: {
    paddingLeft: 12,
    width: 20
  },
  email: {
    paddingLeft: 12,
    marginTop: 8,
  },
  inputfields: {
    top: 380,
  },
  login: {
    backgroundColor: "#240b48",
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Login;