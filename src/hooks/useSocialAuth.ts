//import 'react-native-get-random-values';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useState} from 'react';

import Social from '../typings/Social';
import {isIOS} from '../utils/isPlatform';

const useSocialAuth = () => {
  const [isPending, setIsPending] = useState(false);

  const socialAuth = async (type: Social) => {
    try {
      setIsPending(true);
      switch (type) {
        case Social.Google:
          return await onGoogleAuth();
      }
    } finally {
      setIsPending(false);
    }
  };

  return {socialAuth, isPending};
};

const onGoogleAuth = async () => {
  try {
    const {idToken} = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    const res = await auth().signInWithCredential(googleCredential);
    return {
      success: true,
      data: res,
    };
  } catch (e) {
    //captureException(e);
    return {
      success: false,
    };
  }
};

/* const onAppleAuth = async () => {
  const res = await (isIOS
    ? onAppleCredentialIOS()
    : onAppleCredentialAndroid());
  if (res === null) {
    return {
      success: false,
    };
  }

  try {
    const {identityToken, nonce} = res;

    const appleCredential = auth.AppleAuthProvider.credential(
      identityToken,
      nonce,
    );

    const userCredential = await auth().signInWithCredential(appleCredential);
    return {
      success: true,
      data: userCredential,
    };
  } catch (e) {
    captureException(e);
    return {
      success: false,
    };
  }
}; */
/* const onAppleCredentialIOS = async () => {
  try {
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    const {identityToken, nonce} = appleAuthRequestResponse;

    if (!!identityToken && !!nonce) {
      return {
        identityToken,
        nonce,
      };
    }
    return null;
  } catch (e) {
    captureException(e);
    return null;
  }
}; */
/*
const onAppleCredentialAndroid = async () => {
  const rawNonce = uuid();
  const state = uuid();

  appleAuthAndroid.configure({
    clientId: config.appleServiceId,

    redirectUri: config.appleRedirectUri,

    responseType: appleAuthAndroid.ResponseType.ALL,

    scope: appleAuthAndroid.Scope.ALL,

    nonce: rawNonce,
    state,
  });

  try {
    const response = await appleAuthAndroid.signIn();
    const {id_token: identityToken, nonce} = response;

    if (!!identityToken && !!nonce) {
      return {
        identityToken,
        nonce,
      };
    }
    return null;
  } catch (e) {
    captureException(e);
    return null;
  }
};
 */
export default useSocialAuth;
