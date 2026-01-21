import React, { useContext, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Button from '../../components/buttons/Buttons';
import TextInputs from '../../components/TextInputs/TextInputs';
import { AuthContext } from '../../boot/routing';
import styles from './styles';
import { images } from '../../assets/images';
import { AppColor, AppColors, normalized } from '../../utils/AppConstants';

const EmailVerification = ({ route, navigation }) => {
  const { verifyEmail } = useContext(AuthContext);


  const handleVerify = () => {
    // Placeholder verification -> navigate to app
    verifyEmail();
  };


  const [formValues, setFormValues] = useState({
    email: '',
  });

  const handleInputChange = (field, value) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };



  return (
    <View style={[styles.container]}>
      <ScrollView 
       keyboardShouldPersistTaps={"handled"}
       showsVerticalScrollIndicator={false}
      //  style={{marginBottom:normalized.wp(4),backgroundColor:"red"}}
      >
        <View style={styles.imageContainer}>
          <Image source={images.logo} style={styles.logo} />
        </View>

        <Text style={styles.title}>
          Don’t Worry. Reseting your password is easy.{'\n'}
          Just type your username / email you have registered to MyBday.co.uk
        </Text>
        <Text style={[
          styles.label, { color: AppColors.primaryColor.mainContent, marginVertical: normalized.wp(3) }
        ]}>
          Email Address
        </Text>

        <TextInputs
          profileTxtInput
          placeholder="Enter your email address"
          value={formValues.email}
          onChangeText={(text) => handleInputChange('email', text)}
          placeholderTextColor={AppColors.secondaryColor.lightGray}
          isFocused={formValues.email !== "" ? true : false}
        />

        <View style={styles.btnView}>
          <Button
            largeBtn
            label={'Send Email'}
            // onPress={handleLogin}
            txtColor={AppColors.primaryColor.darkWhite}
          />
          <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
          <Text style={styles.txt}>RETURN TO LOGIN</Text>
          </TouchableOpacity>
          
        </View>
      </ScrollView>



    </View>
  );
};

export default EmailVerification;
