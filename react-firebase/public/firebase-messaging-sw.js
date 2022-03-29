// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyCaexBMJEyExqC18yZrwFc-LRWZ9ik6UEI",
    authDomain: "react-spring-notificatio-e15c3.firebaseapp.com",
    projectId: "react-spring-notificatio-e15c3",
    storageBucket: "react-spring-notificatio-e15c3.appspot.com",
    messagingSenderId: "242845494482",
    appId: "1:242845494482:web:9fc07247dc14cbc945110b",
    measurementId: "G-86QJEF92PM"
  };
  

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});