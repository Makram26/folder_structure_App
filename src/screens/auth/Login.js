import React, { useContext, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Button from '../../components/buttons/Buttons';
import TextInputs from '../../components/TextInputs/TextInputs';
import { AuthContext } from '../../boot/routing';
import styles from './styles';
import { images } from '../../assets/images';
import { AppColors, AppFonts, appIcons, AppIcons, normalized } from '../../utils/AppConstants';

const Login = ({ navigation }) => {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false)
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Placeholder auth success
    signIn();
  };

  return (
    <View style={styles.container}>
      <ScrollView 
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
       style={{marginBottom:normalized.wp(10)}}>

        <Image source={images.logo} style={styles.logo} />
        <Text style={styles.heading}>Welcome back</Text>
        <Text style={styles.subHeading}>Enter your details to get sign in to your account</Text>

        <View style={styles.formGap}>
          <Text style={[styles.label, isEmailFocused && styles.labelFocused]}>
            Email Address
          </Text>
          <TextInputs
            profileTxtInput
            placeholder="Enter your email address"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="#A0A0A0"
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
            isFocused={isEmailFocused}
          />
          <Text style={styles.label}>Password</Text>
          <TextInputs
            password
            lockshow={false}
            placeholder="Enter your password"
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
            isFocused={isPasswordFocused}
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#A0A0A0"
          />

          <View style={styles.rememberForgotRow}>
            <TouchableOpacity
              style={styles.checkboxRow}
              onPress={() => setRememberMe(!rememberMe)}>
              <View
                style={[
                  styles.checkbox,
                  rememberMe && styles.checkboxChecked,
                ]}>
                {rememberMe && (
                  <appIcons.Ionicons
                    name="checkmark"
                    size={AppIcons.commonIcons.smallest}
                    color={AppColors.primaryColor.darkWhite}
                  />
                )}
              </View>
              <Text style={styles.rememberText}>Remember me</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <Button
            largeBtn
            label={'Login'}
            onPress={handleLogin}
            txtColor={AppColors.primaryColor.darkWhite}
          />
        </View>


        <View style={{ alignItems: "flex-end" }}>
          <Text style={styles.helper}>
            Don’t have an account?{' '}
            <Text
              style={styles.link}
              onPress={() => navigation.navigate('Register')}>
              Sign up
            </Text>
          </Text>
        </View>

        <Text style={{
          textAlign: "center",
          marginVertical: normalized.wp(5),
          fontSize: AppFonts.commonFont.lessMedium,
          color: AppColors.secondaryColor.mainContent,
          fontWeight: "500"
        }}>
          OR
        </Text>

        <Button
          socialBtn
          label='Continue with Google'
          disable={false}
          image={images.googleLogo}
          // onPress={() => withGooglesignIn()}
          txtColor={AppColors.primaryColor.darkBlack}
        />
        <Button
          socialBtn
          label='Continue with Facebook'
          disable={false}
          image={images.googleLogo}
          // onPress={() => withGooglesignIn()}
          txtColor={AppColors.primaryColor.darkBlack}
        />

      </ScrollView>
    </View>

  );
};

export default Login;
