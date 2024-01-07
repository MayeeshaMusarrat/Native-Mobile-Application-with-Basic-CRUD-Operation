import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import styles from '../styles/signupStyles';
import { FontFamily, FontSize, Color, Padding, Border } from ".../../../GlobalStyles";

const Signup = () => {
  
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");

   /*** Object is sent to backend, fetch API works *****/
   const signupHandler = async () => {
    try {
      const signupData = {
        username: username,
        email: email,
        password: password,
      };
      const response = await fetch('http://192.168.0.106:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(signupData),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Signup response:', data);
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };
  

  return (
    <View style={styles.signup}>
      <LinearGradient
        style={[styles.backgroundImage, styles.headershadowPosition]}
        locations={[0, 1]}
        colors={["#240b48", "rgba(49, 15, 92, 0)"]}
      >
        <ImageBackground
          style={styles.icon}
          resizeMode="cover"
          source={require("../../../assets/backgroundimage.png")}
        />
      </LinearGradient>
      <LinearGradient
        style={[styles.headershadow, styles.headershadowPosition]}
        locations={[0, 1]}
        colors={["#000", "rgba(0, 0, 0, 0)"]}
      />
      <View style={styles.header}>
        <Image
          style={styles.logoIcon}
          contentFit="cover"
          source={require("../../../assets/logo2.png")}
        />
        <Text style={[styles.dosignuptext, styles.signup2Typo]}>
          <Text style={styles.haveAnAccount}> HAVE AN ACCOUNT?</Text>
          <Text style={styles.login}> LOGIN</Text>
        </Text>
      </View>
      <View style={[styles.overall, styles.overallLayout]}>
        <View style={[styles.footer, styles.footerFlexBox]}>
          <View style={styles.continuewithgoogleandfb}>
            <View style={[styles.continueWith, styles.continuePosition]}>
              <Text style={[styles.orContinueWith, styles.googleTypo1]}>
                Or continue with
              </Text>
            </View>
            <View style={styles.terms}>
              <Text
                style={[styles.byRegisteringYouContainer, styles.signUpTypo]}
              >
                <Text
                  style={styles.haveAnAccount}
                >{`By registering you with our `}</Text>
                <Text style={styles.termsAndConditions}>
                  Terms and Conditions
                </Text>
              </Text>
            </View>
            <View style={[styles.buttons, styles.buttonsPosition]}>
              <Image
                style={styles.cardIcon}
                contentFit="cover"
                source={require("../../../assets/card.png")}
              />
              <View style={styles.buttonsInner}>
                <View style={styles.groupParent}>
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
              <Image
                style={styles.cardIcon}
                contentFit="cover"
                source={require("../../../assets/card1.png")}
              />
              <View style={[styles.groupContainer, styles.footerFlexBox]}>
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

        <TouchableOpacity onPress={signupHandler}
         style={{top: 350}}
        >
          <LinearGradient
            style={styles.signupbutton}
            locations={[0, 1]}
            colors={['#501794', '#3e70a1']}
          >
            <Text style={[styles.signUp, styles.signUpTypo]}>Sign up</Text>
          </LinearGradient>
        </TouchableOpacity>


        <View style={[styles.signup1, styles.overallLayout]}>
          <Text style={[styles.signup2, styles.signup2Typo]}>SIGN UP</Text>
        </View>
        <View style={[styles.username, styles.emailPosition]}>
          <Image
            style={[styles.usernameinputIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../../../assets/usernameinput.png")}
          />
          <Text style={[styles.enterusernametext, styles.googleTypo]}>
            Enter Username
          </Text>
          <Image
            style={styles.usernameicon}
            contentFit="cover"
            source={require("../../../assets/usernameicon.png")}
          />
          <TextInput
            style={[styles.inputusername, styles.inputemailLayout]}
            placeholder="Your username"
            color = "white"
            placeholderTextColor={"lightgray"}
            underlineColorAndroid={"transparent"}
            value = {username}
            onChangeText = {(text) => setUsername(text)}
          />
        </View>
        <View style={[styles.email, styles.emailPosition]}>
          <Image
            style={[styles.emailinputIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../../../assets/emailinput.png")}
          />
          <Text style={[styles.emailtext, styles.googleTypo]}>
            Enter Your Email Address
          </Text>
          <TextInput
            style={[styles.inputemail, styles.inputemailLayout]}
            placeholder="Your email"
            color = "white"
            placeholderTextColor={"lightgray"}
            underlineColorAndroid={"transparent"}
            value = {email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={[styles.password, styles.emailPosition]}>
          <Image
            style={[styles.passwordinputIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../../../assets/usernameinput.png")}
          />
          <Image
            style={[styles.passwordicon, styles.passwordiconPosition]}
            contentFit="cover"
            source={require("../../../assets/passwordicon.png")}
          />
          <Text style={[styles.emailtext, styles.googleTypo]}>
            Enter Password
          </Text>
          <TextInput
            style={[styles.inputusername, styles.inputemailLayout]}
            placeholder="Your password"
            color = "white"
            placeholderTextColor={"lightgray"}
            underlineColorAndroid={"transparent"}
            value = {password}
            onChangeText = {(text) => setPassword(text)}
            secureTextEntry = {true}
          />
        </View>
        <View style={[styles.confirmpassword, styles.emailPosition]}>
          <Image
            style={[styles.confirmpasswordinputIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../../../assets/usernameinput.png")}
          />
          <Image
            style={[styles.passwordicon1, styles.passwordiconPosition]}
            contentFit="cover"
            source={require("../../../assets/passwordicon.png")}
          />
          <Text style={[styles.emailtext, styles.googleTypo]}>
            Confirm Password
          </Text>
          <TextInput
            style={[styles.inputusername, styles.inputemailLayout]}
            placeholder="Confirm password"
            color = "white"
            placeholderTextColor={"lightgray"}
            underlineColorAndroid={"transparent"}
          />
        </View>
      </View>
    </View>
  );
};

export default Signup;