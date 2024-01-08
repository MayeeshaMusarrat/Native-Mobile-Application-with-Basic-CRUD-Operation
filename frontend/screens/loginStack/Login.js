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
import styles from '../styles/loginStyles';
import { FontFamily, FontSize, Color, Padding, Border } from ".../../../GlobalStyles";
import { Button } from "react-native";

const Login = () => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    /*** Object is sent to backend, fetch API works *****/
    const loginHandler = async () => {
      try {
        const loginData = {
          email: email,
          password: password,
        };
        const response = await fetch('http://192.168.0.106:5000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(loginData),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Login response:', data);
      } catch (error) {
        console.error('Error during login:', error);
      }
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