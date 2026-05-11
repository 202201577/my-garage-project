const firebaseConfig = {
  apiKey: "AIzaSyA1TicQrYLv7ypC7cJqGUasQfC2e5L6Es8",
  authDomain: "my---garage.firebaseapp.com",
  projectId: "my---garage",
  storageBucket: "my---garage.firebasestorage.app",
  messagingSenderId: "52476419320",
  appId: "1:52476419320:web:1742f544a775e2864baf0d",
  measurementId: "G-Q9MZ7TS0XT"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = firebase.firestore();

const COMMISSION_RATE = 0.15;
