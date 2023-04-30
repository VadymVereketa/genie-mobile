import {GoogleSignin} from '@react-native-google-signin/google-signin';

const configGoogleAuth = () => {
  GoogleSignin.configure({
    webClientId:
      '362195227054-8gmpuedtll97f6hn168ejqr4tro55oqd.apps.googleusercontent.com',
    iosClientId:
      '362195227054-bcjo2ikqad4975fhj2aokl6aun4nbqt7.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
  });
};
export default configGoogleAuth;
