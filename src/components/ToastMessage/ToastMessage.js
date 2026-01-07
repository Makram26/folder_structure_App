import Toast  from 'react-native-toast-message';

export function ToastMessage(title,msg,msgType) {
  Toast.show({
    type: msgType, // or 'error', 'info', 'warn'
    position: "top",
    text1: title,
    text2: msg,
  });
}




