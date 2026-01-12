import React, {useContext, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import Button from '../../components/buttons/Buttons';
import TextInputs from '../../components/TextInputs/TextInputs';
import {AuthContext} from '../../boot/routing';
import styles from './styles';

const EmailVerification = ({route, navigation}) => {
  const {verifyEmail} = useContext(AuthContext);
  const [code, setCode] = useState('');
  const email = route?.params?.email;

  const handleVerify = () => {
    // Placeholder verification -> navigate to app
    verifyEmail();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Verify your email</Text>
      <Text style={styles.subHeading}>
        We sent a 6-digit code to {email || 'your inbox'}. Enter it to continue.
      </Text>

      <View style={styles.formGap}>
        <TextInputs
          simple
          placeholder="Verification code"
          value={code}
          onChangeText={setCode}
          placeholderTextColor="#A0A0A0"
        />
        <Button
          commonButton
          label="Verify email"
          txtColor="#000"
          onPress={handleVerify}
        />
      </View>

      <Text style={styles.helper}>
        Wrong email?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('Register')}>
          Edit account
        </Text>
      </Text>
    </ScrollView>
  );
};

export default EmailVerification;
