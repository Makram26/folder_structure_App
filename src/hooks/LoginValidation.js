import { Alert } from 'react-native';
import { useAnimatedNavigation } from './useAnimatedNavigation';

function useLoginValidation() {
  const { slideIn } = useAnimatedNavigation();

  const showLoginAlert = () => {
    Alert.alert(
      'Alert',
      'Prior to attending any event, kindly ensure you have logged in to your account.',
      [
        {
          text: 'Cancel',
          onPress: () => {},
        },
        {
          text: 'Login',
          onPress: () => {
            slideIn('AuthStack');
          },
        },
      ]
    );
  };

  return showLoginAlert;
}

export default useLoginValidation;
