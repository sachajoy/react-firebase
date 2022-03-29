import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCaexBMJEyExqC18yZrwFc-LRWZ9ik6UEI",
  authDomain: "react-spring-notificatio-e15c3.firebaseapp.com",
  projectId: "react-spring-notificatio-e15c3",
  storageBucket: "react-spring-notificatio-e15c3.appspot.com",
  messagingSenderId: "242845494482",
  appId: "1:242845494482:web:9fc07247dc14cbc945110b",
  measurementId: "G-86QJEF92PM"
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const fetchToken = (setTokenFound) => {
  return getToken(messaging, {
    vapidKey: 
    'BMwp87yLSOcq_r7exaHFgv0MtC6OtzTiSCmsMA3caKy-gEbDT76B9oNThLVjcvtvg_crVIfm4qqYERzpEkSox_k'
  }).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      setTokenFound(true);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});