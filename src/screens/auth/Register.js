import React, {useContext, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import Button from '../../components/buttons/Buttons';
import TextInputs from '../../components/TextInputs/TextInputs';
import {AuthContext} from '../../boot/routing';
import styles from './styles';

const Register = ({navigation}) => {
  const {signUp} = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Placeholder create account flow
    signUp(email);
    navigation.navigate('EmailVerification', {email});
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Create account</Text>
      <Text style={styles.subHeading}>
        Sign up to save favourites and get updates.
      </Text>

      <View style={styles.formGap}>
        <TextInputs
          userName
          placeholder="Full name"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#A0A0A0"
        />
        <TextInputs
          simple
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#A0A0A0"
        />
        <TextInputs
          password
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#A0A0A0"
        />
        <Button
          commonButton
          label="Register"
          txtColor="#000"
          onPress={handleRegister}
        />
      </View>

      <Text style={styles.helper}>
        Already have an account?{' '}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate('Login')}>
          Login
        </Text>
      </Text>
    </ScrollView>
  );
};

export default Register;
