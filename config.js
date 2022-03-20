import firebase from 'firebase';

// // const firebaseConfig = {
// //    apiKey: "AIzaSyDk_5F387BDyKhQ2kPBM1M3YRlhxRg4WcA",
//   authDomain: "authentication-78523.firebaseapp.com",
//   projectId: "authentication-78523",
//   storageBucket: "authentication-78523.appspot.com",
//   messagingSenderId: "855919832989",
//   appId: "1:855919832989:web:a824eb12b57d127c27c974"",
// //   measurementId: "G-BT3JVLR78K"
// // };

const firebaseConfig = {
  apiKey: "AIzaSyDk_5F387BDyKhQ2kPBM1M3YRlhxRg4WcA",
  authDomain: "authentication-78523.firebaseapp.com",
  databaseURL: "https://authentication-78523-default-rtdb.firebaseio.com",
  projectId: "authentication-78523",
  storageBucket: "authentication-78523.appspot.com",
  messagingSenderId: "855919832989",
  appId: "1:855919832989:web:a824eb12b57d127c27c974"
};
// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()