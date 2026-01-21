import React, { useContext, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Button from '../../components/buttons/Buttons';
import TextInputs from '../../components/TextInputs/TextInputs';
import { AuthContext } from '../../boot/routing';
import styles from './styles';
import { images } from '../../assets/images';
import { AppColors, AppFonts, appIcons, AppIcons, normalized } from '../../utils/AppConstants';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = ({ navigation }) => {
  const { signIn } = useContext(AuthContext);

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    focusedField: null, // 👈 single source of truth
    rememberMe: false,
  });

  const handleLogin = () => {
    // Placeholder auth success
    signIn();
  };


  const handleInputChange = (field, value) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };


  const handleFocus = (field) => {
    setFormValues(prev => ({
      ...prev,
      focusedField: field,
    }));
  };

  const handleBlur = () => {
    setFormValues(prev => ({
      ...prev,
      focusedField: null,
    }));
  };



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "red" }}>
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: normalized.wp(1) }}>

          <Image source={images.logo} style={styles.logo} />
          <Text style={styles.heading}>Welcome back</Text>
          <Text style={styles.subHeading}>Enter your details to get sign in to your account</Text>

          <View style={styles.formGap}>
            <Text style={[
              styles.label,
              formValues.focusedField === 'email' && styles.labelFocused,
            ]}>
              Email Address
            </Text>

            <TextInputs
              profileTxtInput
              placeholder="Enter your email address"
              value={formValues.email}
              onChangeText={(text) => handleInputChange('email', text)}
              onFocus={() => handleFocus('email')}
              onBlur={handleBlur}
              isFocused={formValues.focusedField === 'email'}
              placeholderTextColor={AppColors.secondaryColor.lightGray}
            />
            <Text
              style={[
                styles.label,
                formValues.focusedField === 'password' && styles.labelFocused,
              ]}
            >Password</Text>
            <TextInputs
              password
              lockshow={false}
              placeholder="Enter your password"
              value={formValues.password}
              onChangeText={(text) => handleInputChange('password', text)}
              onFocus={() => handleFocus('password')}
              onBlur={handleBlur}
              isFocused={formValues.focusedField === 'password'}
              placeholderTextColor={AppColors.secondaryColor.lightGray}
            />

            <View style={styles.rememberForgotRow}>
              <TouchableOpacity
                style={styles.checkboxRow}
                onPress={() => handleInputChange('rememberMe', !formValues.rememberMe)}>
                <View
                  style={[
                    styles.checkbox,
                    formValues.rememberMe && styles.checkboxChecked,
                  ]}>
                  {formValues.rememberMe && (
                    <appIcons.Ionicons
                      name="checkmark"
                      size={AppIcons.commonIcons.moresmall}
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
            image={images.facebookLogo}
            // onPress={() => withGooglesignIn()}
            txtColor={AppColors.primaryColor.darkBlack}
          />

        </ScrollView>
      </View>
    </SafeAreaView>


  );
};

export default Login;
