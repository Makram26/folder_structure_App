import React, { useContext, useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Button from '../../components/buttons/Buttons';
import TextInputs from '../../components/TextInputs/TextInputs';
import { AuthContext } from '../../boot/routing';
import styles from './styles';
import { images } from '../../assets/images';
import { AppColors, AppFonts, appIcons, AppIcons, normalized } from '../../utils/AppConstants';
import { SafeAreaView } from 'react-native-safe-area-context';




const Register = ({ navigation }) => {
  const { signUp } = useContext(AuthContext);


  const [formValues, setFormValues] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    confirmPassword: '',

    country: 'South Africa',
    countryCode: '+27',
    countryFlag: '🇿🇦',
    mobile: '',
    showCountryDropdown: false,

    focusedField: null, // 👈 single source of truth
    rememberMe: false,
  });

  const handleRegister = () => {
    // Placeholder create account flow
    signUp(email);
    navigation.navigate('EmailVerification', { email });
  };


  const handleInputChange = (field, value) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };


  const handleCountrySelect = (country) => {
    setFormValues(prev => ({
      ...prev,
      country: country.label,
      countryCode: country.code,
      countryFlag: country.flag,
      showCountryDropdown: false,
    }));
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


  const COUNTRIES = [
    { label: 'Eswatini', code: '+268', flag: '🇸🇿' },
    { label: 'Namibia', code: '+264', flag: '🇳🇦' },
    { label: 'Zimbabwe', code: '+263', flag: '🇿🇼' },
    { label: 'South Africa', code: '+27', flag: '🇿🇦' },
    { label: 'Lesotho', code: '+266', flag: '🇱🇸' },
  ];




  return (
    <SafeAreaView style={{ flex: 1,}}>
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: normalized.wp(1),}}>

          <Image source={images.logo} style={styles.logo} />
          <Text style={styles.heading}>Create your account!</Text>
          <Text style={styles.subHeading}>Join us today!!</Text>

          <View style={styles.formGap}>

            <Text style={[
              styles.label,
              formValues.focusedField === 'fname' && styles.labelFocused,
            ]}>
              First Name
            </Text>

            <TextInputs
              profileTxtInput
              placeholder="Enter your first name"
              value={formValues.fname}
              onChangeText={(text) => handleInputChange('fname', text)}
              onFocus={() => handleFocus('fname')}
              onBlur={handleBlur}
              isFocused={formValues.focusedField === 'fname'}
              placeholderTextColor="#A0A0A0"
            />

            <Text style={[
              styles.label,
              formValues.focusedField === 'lname' && styles.labelFocused,
            ]}>
              Last Name
            </Text>

            <TextInputs
              profileTxtInput
              placeholder="Enter your last name"
              value={formValues.lname}
              onChangeText={(text) => handleInputChange('lname', text)}
              onFocus={() => handleFocus('lname')}
              onBlur={handleBlur}
              isFocused={formValues.focusedField === 'lname'}
              placeholderTextColor="#A0A0A0"
            />

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
              placeholderTextColor="#A0A0A0"
            />


            <Text style={[
              styles.label,
              formValues.focusedField === 'mobile' && styles.labelFocused
            ]}>
              Phone Number
            </Text>
            <View style={styles.phoneRow}>

              {/* COUNTRY DROPDOWN */}
              <TouchableOpacity
                style={[
                  styles.countryBox,
                  formValues.focusedField === 'mobile' && { borderColor: AppColors.primaryColor.mainContent }
                ]}
                onPress={() =>
                  handleInputChange('showCountryDropdown', !formValues.showCountryDropdown)
                }
              >

                <Text style={styles.flag}>{formValues.countryFlag}</Text>
                <Text style={[styles.countryText, formValues.focusedField === 'mobile' && { color: AppColors.primaryColor.mainContent }]}>
                  {formValues.country || 'Select Country'}
                </Text>
                <appIcons.Entypo name="chevron-down" size={18} style={{ color: formValues.focusedField === 'mobile' ? AppColors.primaryColor.mainContent : AppColors.secondaryColor.lightGray }} />
              </TouchableOpacity>






              {/* MOBILE INPUT */}
              <View
                style={[
                  styles.mobileBox,
                  formValues.focusedField == 'mobile' && { borderColor: AppColors.primaryColor.mainContent },
                ]}
              >
                <Text style={[styles.codeText, formValues.focusedField == 'mobile' && { color: AppColors.primaryColor.mainContent }]}>
                  {formValues.countryCode || '+--'}
                </Text>

                <TextInput
                  style={styles.mobileInput}
                  placeholder="Enter Mobile Number"
                  placeholderTextColor={AppColors.secondaryColor.lightGray}
                  numberOfLines={1}
                  keyboardType="number-pad"
                  value={formValues.mobile}
                  onChangeText={(text) => handleInputChange('mobile', text)}
                  onFocus={() => handleInputChange('focusedField', 'mobile')}
                  onBlur={() => handleInputChange('focusedField', null)}
                />
              </View>

            </View>

            {formValues.showCountryDropdown && (
              <View style={styles.dropdown}>
                {COUNTRIES.map((item, index) => (
                  <TouchableOpacity
                    key={item.code}
                    style={{ ...styles.dropdownItem, borderBottomWidth: COUNTRIES.length - 1 == index ? 0 : 0.5 }}
                    onPress={() => handleCountrySelect(item)}
                  >
                    <Text style={styles.dropdownText}>
                      {item.flag} {item.label} ({item.code})
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}




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
              placeholderTextColor="#A0A0A0"
            />


            <Text
              style={[
                styles.label,
                formValues.focusedField === 'confirmPassword' && styles.labelFocused,
              ]}
            >Confirm Password</Text>
            <TextInputs
              password
              lockshow={false}
              placeholder="Enter your Confirm password"
              value={formValues.confirmPassword}
              onChangeText={(text) => handleInputChange('confirmPassword', text)}
              onFocus={() => handleFocus('confirmPassword')}
              onBlur={handleBlur}
              isFocused={formValues.focusedField === 'confirmPassword'}
              placeholderTextColor="#A0A0A0"
            />

            <View style={{ ...styles.rememberForgotRow, }}>
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
                <Text style={styles.rememberText}>
                  I agree with
                  <Text
                    style={{
                      color: AppColors.primaryColor.mainContent,
                      fontWeight: "600",
                      fontSize: AppFonts.commonFont.small
                    }}>
                    Terms & Conditions
                  </Text>
                </Text>
              </TouchableOpacity>

            </View>

            <Button
              largeBtn
              label={'Register'}
              onPress={handleRegister}
              txtColor={AppColors.primaryColor.darkWhite}
            />
          </View>


          <View style={{ alignItems: "center",marginVertical:normalized.wp(5) }}>
            <Text style={styles.helper}>
              Already an account??{' '}
              <Text
                style={styles.link}
                onPress={() => navigation.navigate('Login')}>
                Sign in
              </Text>
            </Text>
          </View>

          {/* <Text style={{
            textAlign: "center",
            marginVertical: normalized.wp(5),
            fontSize: AppFonts.commonFont.lessMedium,
            color: AppColors.secondaryColor.mainContent,
            fontWeight: "500"
          }}>
            OR
          </Text> */}

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

export default Register;
